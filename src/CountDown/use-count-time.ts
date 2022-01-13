import { onBeforeUnmount, reactive } from 'vue'
import { getDefaultCountTime, getCountTime } from '@/CountDown/count-time'
import type { CountTime } from './types'

interface StepHandlers {
  update: (time: number) => void
  start: () => void
  stop: () => void
}

export function useCountTime(onStep: (handlers: StepHandlers) => void) {
  const times = reactive<CountTime>(getDefaultCountTime())

  function update(time: number) {
    Object.assign(times, getCountTime(time))
  }

  let timer: number

  function start() {
    timer = requestAnimationFrame(() => {
      start()
      onStep({ update, start, stop })
    })
  }

  function stop() {
    cancelAnimationFrame(timer)
  }

  onBeforeUnmount(stop)

  return {
    times,
    start,
    stop,
    update
  }
}
