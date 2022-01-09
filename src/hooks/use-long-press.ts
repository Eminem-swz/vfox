import { addLongPressEvent } from '@/helpers/events'
import { onBeforeUnmount, onMounted } from 'vue'
import type { Ref } from 'vue'
import type { LongPressEventCallback } from '../helpers/types'

interface OffFn {
  (): void
}

export function useLongPress(
  el: Ref<HTMLElement | undefined>,
  callback: LongPressEventCallback
) {
  let longPressOff: OffFn

  onMounted(() => {
    longPressOff = addLongPressEvent(el.value as HTMLElement, callback)
  })

  onBeforeUnmount(() => longPressOff())
}
