<template>
  <div class="fx-stopwatch">
    <slot
      :time="countTime.time"
      :days="countTime.days"
      :fullHours="countTime.fullHours"
      :thousandsFullHours="countTime.thousandsFullHours"
      :hours="countTime.hours"
      :minutes="countTime.minutes"
      :seconds="countTime.seconds"
      :milliseconds="countTime.milliseconds"
    >
      {{
        parseInt(countTime.fullHours) > 0
          ? (thousands ? countTime.thousandsFullHours : countTime.fullHours) +
            ':'
          : ''
      }}{{ countTime.minutes }}:{{ countTime.seconds
      }}{{ showMilliseconds ? '.' + countTime.milliseconds : '' }}
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { CountTime } from '../CountDown/types'
import { getCountTime } from '../CountDown/count-time'
import { useCountTime } from '../CountDown/use-count-time'
import { cloneData } from '../helpers/util'
import { emitTypeValidator } from '../helpers/validator'
import type { FnArgs } from '../helpers/types'
import type { OnStop } from './types'

export default defineComponent({
  name: 'fx-stopwatch',
  props: {
    // 是否显示毫秒数
    showMilliseconds: {
      type: Boolean,
      default: true
    },
    // 是否千分位显示
    thousands: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    start: emitTypeValidator,
    reset: emitTypeValidator,
    stop: (payload: FnArgs<OnStop>[0]) =>
      payload && payload.detail && Array.isArray(payload.laps)
  },
  setup(props, { emit }) {
    let time = 0
    let startTime = 0
    let laps: CountTime[] = []

    const countTime = useCountTime(({ update }) => {
      time = Date.now() - startTime
      update(time)
    })

    function doing() {
      return startTime > 0
    }

    function stop() {
      if (doing()) {
        const _laps = cloneData(laps)
        _laps.push(getNextLap())

        emit('stop', {
          detail: getCountTime(time),
          laps: _laps
        })

        startTime = 0
        countTime.stop()
      }
    }

    function start() {
      if (startTime === 0) {
        startTime = Date.now() - time
      }

      emit('start', {
        type: 'start'
      })

      countTime.start()
    }

    function reset() {
      doing() && stop()

      emit('reset', {
        type: 'reset'
      })

      time = 0
      laps = []
      countTime.update(0)

      countTime.stop()
    }

    function getNextLap() {
      let totalTime = 0

      laps.forEach(({ time }) => {
        totalTime += time
      })

      return getCountTime(time - totalTime)
    }

    function lap(): CountTime[] {
      if (doing()) {
        laps.push(getNextLap())

        return cloneData(laps)
      }

      return []
    }

    countTime.update(0)

    return {
      time,
      countTime: countTime.times,
      stop,
      start,
      reset,
      lap
    }
  }
})
</script>
