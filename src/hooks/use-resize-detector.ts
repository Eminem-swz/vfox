import { onBeforeUnmount, onMounted } from 'vue'
import type { Ref } from 'vue'
import { resizeDetector } from '@/helpers/resize-detector'
import type { Noop } from '../helpers/types'

export function useResizeDetector(ctx: Ref, callback: Noop) {
  let stopHandle: Noop

  onMounted(() => {
    const $el =
      ctx.value instanceof HTMLElement
        ? ctx.value
        : (ctx.value.$el as HTMLElement)

    stopHandle = resizeDetector($el, callback)
  })

  onBeforeUnmount(() => stopHandle())

  return {}
}
