import { createApp, Component } from 'vue'
import { isObject, isString } from '@/helpers/util'
import { getCallbackFns } from '@/apis/callback'
import { parseParamsByRules } from '@/apis/rules'
import type { PopupHook, ApiFnOptions } from './types'
import type { AnyObject, EmptyObject } from '../helpers/types'
import type { PopupCustomCancel, PopupBridge } from '../popup/types'
import Exception from '@/helpers/exception'

type PopupDone = (res: any) => void

type RefFnName = 'customCancel'

interface RefFns {
  customCancel?: PopupCustomCancel
}

const $refs: {
  [propName: string]: {
    uid: number
    fns: RefFns
  }
} = {}

let puid = 1

function createPopup() {
  const $wrapper = document.createElement('div')

  const id = puid++

  return {
    id,
    $wrapper
  }
}

export function createShowPopup<T, E = EmptyObject>({
  apiName,
  createHook,
  component,
  singleMode
}: {
  apiName: string
  createHook: (done: PopupDone) => PopupHook
  component: Component
  singleMode?: boolean
}) {
  return function show(
    object: T &
      Partial<{
        success: (res: E) => void
        fail: (e: Exception) => void
        complete: () => void
      }>
  ) {
    let options: AnyObject

    if (isString(object)) {
      options = {
        title: object as any
      }
    } else if (!isObject(object)) {
      options = {}
    } else {
      options = object as AnyObject
    }

    const { success, fail, complete } = getCallbackFns(options)

    return new Promise<E>(function (resolve, reject) {
      try {
        const key = apiName.replace('show', '')

        const hook = createHook(function (res) {
          success(res)
          complete()
          resolve(res)
        })

        singleMode && clear(key)

        const fns: RefFns = {}
        const propsData = parseParamsByRules(options, apiName)

        if (propsData.mode) {
          propsData.initialMode = propsData.mode
          delete propsData.mode
        }
        if (propsData.value) {
          propsData.modelValue = propsData.value
          delete propsData.value
        }

        const { $wrapper } = createPopup()

        const app = createApp(
          component,
          Object.assign(propsData, {
            visible: true
          })
        )
        app.provide('fxApis', {
          in(hookEvent, res) {
            if (
              hookEvent === 'visible-state-change' &&
              res.state === 'hidden'
            ) {
              app.unmount()
              singleMode && remove(key, $ref.uid)
            }

            hook && hook(hookEvent, res)
          },
          out(key: RefFnName, value: PopupCustomCancel) {
            fns[key] = value
          }
        } as PopupBridge)
        app.mount($wrapper)

        const $ref = {
          uid: app._uid,
          fns
        }

        // 单例：如Toast
        singleMode && ($refs[key] = $ref)

        return app
      } catch (e) {
        fail(new Exception(e))
        complete()
        reject(new Exception(e))
      }
    })
  }
}

/**
 * 展示弹窗
 * @param object 参数
 */
export function showPopup<T = EmptyObject>(
  object: string | AnyObject,
  apiName: string,
  getOptions: (done: PopupDone) => {
    component: Component
    hook?: PopupHook
    singleMode?: boolean
  }
) {
  let options: AnyObject

  if (isString(object)) {
    options = {
      title: object as string
    }
  } else if (!isObject(object)) {
    options = {}
  } else {
    options = object as AnyObject
  }

  const { success, fail, complete } = getCallbackFns(options)

  return new Promise<T>(function (resolve, reject) {
    try {
      const key = apiName.replace('show', '')
      const { component, hook, singleMode } = getOptions(function (res) {
        success(res)
        complete()
        resolve(res)
      })

      singleMode && clear(key)

      const fns: RefFns = {}
      const propsData = parseParamsByRules(options, apiName)

      if (propsData.mode) {
        propsData.initialMode = propsData.mode
        delete propsData.mode
      }
      if (propsData.value) {
        propsData.modelValue = propsData.value
        delete propsData.value
      }

      const { $wrapper } = createPopup()

      const app = createApp(
        component,
        Object.assign(propsData, {
          visible: true
        })
      )
      app.provide('fxApis', {
        in(hookEvent, res) {
          if (hookEvent === 'visible-state-change' && res.state === 'hidden') {
            app.unmount()
            singleMode && remove(key, $ref.uid)
          }

          hook && hook(hookEvent, res)
        },
        out(key: RefFnName, value: PopupCustomCancel) {
          fns[key] = value
        }
      } as PopupBridge)
      app.mount($wrapper)

      const $ref = {
        uid: app._uid,
        fns
      }

      // 单例：如Toast
      singleMode && ($refs[key] = $ref)

      return app
    } catch (e) {
      fail(new Exception(e))
      complete()
      reject(new Exception(e))
    }
  })
}

function clear(key: string) {
  if ($refs[key]) {
    const fns = $refs[key].fns
    fns.customCancel && fns.customCancel('clear', true)

    delete $refs[key]
  }
}

function remove(key: string, uid: number) {
  if ($refs[key] && $refs[key].uid === uid) {
    delete $refs[key]
  }
}

/**
 * 隐藏弹窗
 * @param object 参数
 */
export function hidePopup(object: Partial<ApiFnOptions>, apiName: string) {
  if (!isObject(object)) {
    object = {}
  }

  const { success, fail, complete } = getCallbackFns(object)

  return new Promise<Record<string, never>>((resolve, reject) => {
    try {
      clear(apiName.replace('hide', ''))

      success()
      complete()
      resolve({})
    } catch (e) {
      fail(new Exception(e))
      complete()
      reject(new Exception(e))
    }
  })
}

export function createConfirmHook(done: PopupDone) {
  const hook: PopupHook = (hookEvent, args) => {
    if (hookEvent === 'cancel') {
      done({
        cancel: true,
        ...args
      })
    } else if (hookEvent === 'confirm') {
      done({
        confirm: true,
        detail: args
      })
    }
  }

  return hook
}

export function createAlertHook(done: PopupDone) {
  const hook: PopupHook = (hookEvent, args) => {
    if (hookEvent === 'visible-state-change' && args.state === 'shown') {
      done({})
    }
  }

  return hook
}
