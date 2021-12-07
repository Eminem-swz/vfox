import { addLongPressEvent } from '@/helpers/events'
import { onBeforeUnmount, onMounted, Ref } from 'vue'
import { FxCustomEventCallback } from '../helpers/types'

interface OffFn {
  (): void
}

export function useLongPress(
  el: Ref<HTMLElement | undefined>,
  callback: FxCustomEventCallback
) {
  let longPressOff: OffFn

  onMounted(() => {
    longPressOff = addLongPressEvent(el.value as HTMLElement, callback)
  })

  onBeforeUnmount(() => longPressOff())
}
