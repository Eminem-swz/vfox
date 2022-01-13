import { onBeforeUnmount, onMounted } from 'vue'
import type { Ref } from 'vue'
import { resizeDetector } from '@/helpers/resize-detector'

export function useResizeDetector(ctx: Ref, callback: () => void) {
  let stopHandle: () => void

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
