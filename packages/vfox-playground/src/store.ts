import { reactive, watchEffect, version } from 'vue'
import * as defaultCompiler from 'vue/compiler-sfc'
import type { Store, SFCOptions, StoreState, OutputModes } from '@vue/repl'
import { compileFile, File } from '@vue/repl'
import { utoa, atou } from './utils/encode'
import { showToast } from 'vfox'
import { genUnpkgLink } from './utils/link'

const defaultMainFile = 'App.vue'
const vfoxSetupFile = 'vfox-setup.js'
const vfoxJs = genUnpkgLink('vfox', undefined, '/dist/index.esm-browser.js')
const vfoxCss = genUnpkgLink('vfox', undefined, '/dist/index.css')
const vfoxImports = {
  vfox: vfoxJs
}

const welcomeCode = `\
<script setup lang='ts'>
/* required start */
import { setupVfox } from './${vfoxSetupFile}'
setupVfox()
/* required end */

import { ref } from 'vue'
import { showToast } from 'vfox'

const msg = ref('Click!')
const onClick = () => {
  showToast('Hello World!')
}
</script>

<template>
  <fx-button type="primary" @click="onClick">{{ msg }}</fx-button>
</template>
`

const vfoxReplPluginCode = `\
import Vfox from 'vfox'
import { getCurrentInstance } from 'vue'

await appendStyle()

export function setupVfox() {
  const instance = getCurrentInstance()
  instance.appContext.app.use(Vfox)
}

export function appendStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '${vfoxCss}'
    link.onload = resolve
    link.onerror = reject
    document.body.appendChild(link)
  })
}
`

const isHidden = !import.meta.env.DEV

export class ReplStore implements Store {
  state: StoreState
  compiler = defaultCompiler
  options?: SFCOptions
  initialShowOutput: boolean
  initialOutputMode: OutputModes = 'preview'

  private readonly defaultVueRuntimeURL: string

  constructor({
    serializedState = '',
    defaultVueRuntimeURL = genUnpkgLink(
      '@vue/runtime-dom',
      version,
      '/dist/runtime-dom.esm-browser.js'
    ),
    showOutput = false,
    outputMode = 'preview'
  }: {
    serializedState?: string
    showOutput?: boolean
    outputMode?: OutputModes | string
    defaultVueRuntimeURL?: string
  }) {
    let files: StoreState['files'] = {}

    if (serializedState) {
      const saved = JSON.parse(atou(serializedState))
      for (const filename of Object.keys(saved)) {
        files[filename] = new File(filename, saved[filename])
      }
    } else {
      files = {
        [defaultMainFile]: new File(defaultMainFile, welcomeCode)
      }
    }

    this.defaultVueRuntimeURL = defaultVueRuntimeURL
    this.initialShowOutput = showOutput
    this.initialOutputMode = outputMode as OutputModes

    let mainFile = defaultMainFile
    if (!files[mainFile]) {
      mainFile = Object.keys(files)[0]
    }
    this.state = reactive({
      mainFile,
      files,
      activeFile: files[mainFile],
      errors: [],
      vueRuntimeURL: this.defaultVueRuntimeURL
    })

    this.initImportMap()

    this.state.files[vfoxSetupFile] = new File(
      vfoxSetupFile,
      vfoxReplPluginCode,
      isHidden
    )

    watchEffect(() => compileFile(this, this.state.activeFile))

    for (const file of Object.values(this.state.files)) {
      compileFile(this, file)
    }
  }

  setActive(filename: string) {
    const file = this.state.files[filename]
    if (file.hidden) return
    this.state.activeFile = this.state.files[filename]
  }

  addFile(fileOrFilename: string | File) {
    const file =
      typeof fileOrFilename === 'string'
        ? new File(fileOrFilename)
        : fileOrFilename
    this.state.files[file.filename] = file
    if (!file.hidden) this.setActive(file.filename)
  }

  deleteFile(filename: string) {
    if (filename === vfoxSetupFile) {
      showToast('This is vfox setup file.')
      return
    }

    if (confirm(`Are you sure you want to delete ${filename}?`)) {
      if (this.state.activeFile.filename === filename) {
        this.state.activeFile = this.state.files[this.state.mainFile]
      }
      delete this.state.files[filename]
    }
  }

  serialize() {
    return '#' + utoa(JSON.stringify(this.getFiles()))
  }

  getFiles() {
    const exported: Record<string, string> = {}
    for (const file of Object.values(this.state.files)) {
      if (file.hidden) continue
      exported[file.filename] = file.code
    }
    return exported
  }

  async setFiles(newFiles: Record<string, string>, mainFile = defaultMainFile) {
    const files: Record<string, File> = {}
    if (mainFile === defaultMainFile && !newFiles[mainFile]) {
      files[mainFile] = new File(mainFile, welcomeCode)
    }

    for (const [filename, file] of Object.entries(newFiles)) {
      files[filename] = new File(filename, file)
    }

    for (const file of Object.values(files)) {
      await compileFile(this, file)
    }
    this.state.mainFile = mainFile
    this.state.files = files
    this.initImportMap()
    this.setActive(mainFile)
  }

  private initImportMap() {
    const map = this.state.files['import-map.json']
    if (!map) {
      this.state.files['import-map.json'] = new File(
        'import-map.json',
        JSON.stringify(
          {
            imports: {
              vue: this.defaultVueRuntimeURL,
              ...vfoxImports
            }
          },
          null,
          2
        )
      )
    } else {
      try {
        const json = JSON.parse(map.code)
        if (!json.imports.vue) {
          json.imports.vue = this.defaultVueRuntimeURL
          map.code = JSON.stringify(json, null, 2)
        }
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }

  getImportMap() {
    try {
      return JSON.parse(this.state.files['import-map.json'].code)
    } catch (e) {
      this.state.errors = [
        `Syntax error in import-map.json: ${(e as Error).message}`
      ]
      return {}
    }
  }
}
