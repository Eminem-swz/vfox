import { onBeforeUnmount, onMounted } from 'vue'
import type { Ref, ComponentPublicInstance } from 'vue'
import { isElement } from '@/helpers/util'
import { resizeDetector } from '@/helpers/resize-detector'
import type { Noop } from '../helpers/types'

export function useResizeDetector(
  ctx: Ref<ComponentPublicInstance | HTMLElement | undefined>,
  callback: Noop
) {
  let stopHandle: Noop

  onMounted(() => {
    const $el: HTMLElement = isElement(ctx.value)
      ? (ctx.value as HTMLElement)
      : (ctx as Ref<ComponentPublicInstance>).value.$el

    stopHandle = resizeDetector($el, callback)
  })

  onBeforeUnmount(() => stopHandle())

  return {}
}
