import { E2E_TIMEOUT, setupPuppeteer, timeout } from './e2eUtils'
import path from 'path'

describe('e2e: Picker', () => {
  const {
    page,
    isVisible,
    typeValue,
    isFocused,
    value,
    html,
    texts,
    nextFrame,
    click
  } = setupPuppeteer()
  const baseUrl = `file://${path.resolve(__dirname, './index.html')}`

  beforeEach(async () => {
    await page().goto(baseUrl)
    await page().waitForSelector('#app')
  })

  test(
    'test showPicker',
    async () => {
      await page().evaluate(() => {
        // 注：这里是在DevTool运行的代码，不能接受函数外的参数
        const { createApp } = (window as any).Vue
        const Vfox = (window as any).Vfox

        createApp({
          template: `
            <button id="button" @click="onShowPicker">showPicker</button>
          `,
          setup: () => {
            const options: number[] = []
            for (let i = 2000; i <= 2020; i++) {
              options.push(i)
            }
            const multiOptions = [options, ['春', '夏', '秋', '冬']]

            function onShowPicker() {
              Vfox.showPicker({
                options: multiOptions
              })
            }
            return { onShowPicker }
          }
        })
          .use(Vfox)
          .mount('#app')
      })

      // 点击展开
      await click('#button')
      await nextFrame()
      expect(await texts('.selected')).toStrictEqual(['2000', '春'])

      // 模拟滚动滚动条
      await page().$eval('.fx-picker-view_list', node => (node.scrollTop = 30))
      await timeout(500)
      expect(await texts('.selected')).toStrictEqual(['2001', '春'])
    },
    E2E_TIMEOUT
  )
})
