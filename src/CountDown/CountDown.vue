<template>
  <div class="fx-count-down">
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
        showDays
          ? countTime.days + locale.countDownDayUnit + ' ' + countTime.hours
          : countTime.fullHours
      }}:{{ countTime.minutes }}:{{ countTime.seconds }}
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useCountTime } from '@/CountDown/use-count-time'
import { locale } from '@/Locale'
import type { OnEnd, OnPauseOrResume } from './types'
import type { VoidFnToBooleanFn, FnArgs } from '../helpers/types'

const pauseOrResumeValidator: VoidFnToBooleanFn<OnPauseOrResume> = payload =>
  payload && typeof payload.remainTime === 'number'

export default defineComponent({
  name: 'fx-count-down',
  props: {
    // 倒计时时间
    timestamp: {
      type: Number,
      default: 0
    },
    // 是否显示天数
    showDays: {
      type: Boolean,
      default: false
    },
    // 是否暂停
    paused: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:timestamp': (timestamp: number) => typeof timestamp === 'number',
    end: (payload: FnArgs<OnEnd>[0]) =>
      payload &&
      typeof payload.startTime === 'number' &&
      typeof payload.endTime === 'number',
    pause: pauseOrResumeValidator,
    resume: pauseOrResumeValidator
  },
  setup(props, { emit }) {
    let startTime = 0
    let expiredTime = 0
    let remainTime = 0

    const countTime = useCountTime(({ update, stop }) => {
      remainTime = expiredTime - Date.now()

      if (remainTime > 0) {
        update(remainTime)
        emit('update:timestamp', remainTime)
      } else {
        remainTime = 0
        update(remainTime)
        emit('update:timestamp', remainTime)
        emit('end', {
          startTime,
          endTime: expiredTime
        })

        stop()
      }
    })

    watch(
      () => props.timestamp,
      val => {
        if (Math.abs(props.timestamp - remainTime) < 1000) {
          return
        }

        countTime.stop()

        startTime = Date.now()
        expiredTime = val + startTime
        remainTime = val

        countTime.update(remainTime)

        !props.paused && countTime.start()
      },
      {
        immediate: true
      }
    )

    watch(
      () => props.paused,
      val => {
        if (val) {
          emit('pause', {
            remainTime
          })

          countTime.stop()
        } else {
          emit('resume', {
            remainTime
          })

          expiredTime = remainTime + Date.now()

          countTime.start()
        }
      }
    )

    return {
      countTime: countTime.times,
      locale
    }
  }
})
</script>
