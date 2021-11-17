import { frameTo } from '@/helpers/animation'
import { getScrollDom, querySelector } from '@/helpers/dom'
import { getCallbackFns } from '@/apis/callback'
import { parseParamsByRules } from '@/apis/rules'
import { ApiFnOptions } from './types'
import Exception from '@/helpers/exception'

type ScrollCallbackArgs = { from: number; to: number }

interface ScrollCallback {
  (res: ScrollCallbackArgs): void
}

interface PageScrollToOptions extends ApiFnOptions {
  scrollTop: number
  duration: number
}

interface ScrollToOptions extends PageScrollToOptions {
  selector: string | HTMLElement | Document
}

/**
 * 将页面滚动到目标位置（可以设置滚动动画时长）
 * @param object
 */
export function pageScrollTo(object: Partial<PageScrollToOptions>) {
  const { success, fail, complete } = getCallbackFns(object)

  return new Promise<ScrollCallbackArgs>((resolve, reject) => {
    try {
      const options = parseParamsByRules<PageScrollToOptions>(
        object,
        'pageScrollTo'
      )
      const callback: ScrollCallback = res => {
        success(res)
        complete()
        resolve(res)
      }

      elementScrollTo(document, options.scrollTop, options.duration, callback)
    } catch (e) {
      fail(new Exception(e))
      complete()
      reject(new Exception(e))
    }
  })
}

/**
 * 将元素滚动到目标位置（可以设置滚动动画时长）
 * @param object
 */
export function scrollTo(object: Partial<ScrollToOptions>) {
  const { success, fail, complete } = getCallbackFns(object)

  return new Promise((resolve, reject) => {
    try {
      const options = parseParamsByRules<ScrollToOptions>(object, 'scrollTo')
      const callback: ScrollCallback = res => {
        success(res)
        complete()
        resolve(res)
      }
      const element = querySelector(options.selector)

      if (!element) {
        console.error(
          new Exception(
            '通过"selector"找不到对应Element.',
            Exception.TYPE.PARAM_ERROR,
            'scrollTo'
          )
        )
        return
      }

      elementScrollTo(element, options.scrollTop, options.duration, callback)
    } catch (e) {
      fail(new Exception(e))
      complete()
      reject(new Exception(e))
    }
  })
}

function elementScrollTo(
  element: HTMLElement | Document,
  scrollTop: number,
  duration: number,
  callback: ScrollCallback
) {
  const $el: HTMLElement =
    element === document ? getScrollDom() : (element as HTMLElement)

  const from = $el.scrollTop

  function done() {
    callback({
      from,
      to: scrollTop
    })
  }

  if (from === scrollTop) {
    // 不需要跳转
    done()
  } else if (duration === 0) {
    // 不需要动画
    $el.scrollTop = scrollTop
    done()
  } else {
    frameTo({
      from,
      to: scrollTop,
      duration,
      progress({ current }) {
        $el.scrollTop = current
      },
      complete({ current }) {
        $el.scrollTop = current
        done()
      }
    })
  }
}
