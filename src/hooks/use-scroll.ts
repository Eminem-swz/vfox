import { onBeforeUnmount } from 'vue'
import { addEvent, removeEvent } from '../helpers/events'
import { FxEventElement, FxEventCallback } from '../helpers/types'
import { getScrollTop } from '../helpers/dom'

interface OnScrollCallback {
  (
    e: Event,
    res: {
      scrollTop: number
    }
  ): void
}

export function useScrollEvent(
  $el: FxEventElement,
  callback: OnScrollCallback
) {
  const onScroll: FxEventCallback = (e, $el) => {
    callback(e, {
      scrollTop: getScrollTop($el)
    })
  }

  addEvent('scroll', onScroll, $el)

  let isOff = false

  function off() {
    if (!isOff) {
      isOff = true
      removeEvent('scroll', onScroll, $el)
    }
  }

  onBeforeUnmount(() => off)

  return off
}
