import { E2E_TIMEOUT, setupPuppeteer } from './e2eUtils'
import path from 'path'

describe('e2e: Input', () => {
  const { page, isVisible, typeValue, isFocused, value, focus, blur, timeout } =
    setupPuppeteer()
  const baseUrl = `file://${path.resolve(__dirname, './index.html')}`

  beforeEach(async () => {
    await page().goto(baseUrl)
    await page().waitForSelector('#app')
  })

  test(
    'test input',
    async () => {
      await page().evaluate(() => {
        const { createApp, ref } = (window as any).Vue
        const Vfox = (window as any).Vfox
        createApp({
          template: `
            <fx-input type="digit" v-model="inputValue" />
          `,
          setup: () => {
            const inputValue = ref('123')
            return { inputValue }
          }
        })
          .use(Vfox)
          .mount('#app')
      })

      expect(await value('input')).toBe(`123`)
      await typeValue('input', 'a1234')
      expect(await value('input')).toBe(`1234`)
    },
    E2E_TIMEOUT
  )

  test(
    'test prop focus',
    async () => {
      await page().evaluate(() => {
        const { createApp } = (window as any).Vue
        const Vfox = (window as any).Vfox
        createApp({
          template: `
            <fx-input focus />
          `
        })
          .use(Vfox)
          .mount('#app')
      })

      expect(await isFocused('input')).toBe(true)
    },
    E2E_TIMEOUT
  )

  test(
    'test prop showClear',
    async () => {
      await page().evaluate(() => {
        const { createApp } = (window as any).Vue
        const Vfox = (window as any).Vfox
        createApp({
          template: `
            <fx-input show-clear />
          `
        })
          .use(Vfox)
          .mount('#app')
      })

      // 默认focus 没有 showClear 按钮
      await focus('input')
      expect(await isVisible('.fx-input_clear')).toBe(false)

      // 当出现文字的时候有 showClear 按钮
      await typeValue('input', '123')
      await timeout(200)
      expect(await isVisible('.fx-input_clear')).toBe(true)

      // 当失去焦点的时候没有 showClear 按钮
      await blur('input')
      await timeout(1000)
      expect(await isVisible('.fx-input_clear')).toBe(false)
    },
    E2E_TIMEOUT
  )
})
