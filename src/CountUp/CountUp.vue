<template>
  <div class="fx-count-up">
    {{ content }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { AnimationFrameTask, frameTo } from '@/helpers/animation'
import { thousands, isNumber } from '@/helpers/util'
import type { OnCancel, Speed } from './types'
import type { VoidFnToBooleanFn } from '../helpers/types'

const emitValidator: VoidFnToBooleanFn<OnCancel> = payload => {
  return payload && typeof payload.number === 'number'
}

const SpeedMap = new Map<Speed, number>([
  ['normal', 50],
  ['fast', 10],
  ['slow', 100]
])

export default defineComponent({
  name: 'fx-count-up',
  props: {
    // 初始数值
    initialNumber: {
      type: Number,
      default: 0
    },
    // 目标数值
    number: {
      type: Number,
      default: 0
    },
    // 持续时间
    speed: {
      type: [Number, String] as PropType<Speed>,
      validator: (val: Speed) => isNumber(val) || SpeedMap.get(val) != null
    },
    // 是否千分位展示
    thousands: {
      type: Boolean,
      default: false
    },
    // 小数位数
    decimalDigits: {
      type: Number,
      default: 0
    }
  },
  emits: { animated: emitValidator, cancel: emitValidator },
  setup(props, { emit }) {
    const content = ref('')
    let number = props.initialNumber as number

    function getDuration(diff: number) {
      if (isNumber(props.speed)) {
        return props.speed as number
      }

      return Math.max(
        Math.abs(diff) *
          (SpeedMap.get(props.speed as 'normal') ||
            (SpeedMap.get('normal') as number)),
        1000
      )
    }

    let frameTask: AnimationFrameTask | null = null

    function cancel() {
      if (frameTask) {
        frameTask.stop()
        emit('cancel', { number })
      }
    }

    function update(newNumber: number) {
      cancel()

      const decimalDigits = props.decimalDigits
      const carry = Math.pow(10, decimalDigits)
      const from = Math.round(number * carry)
      const to = Math.round(newNumber * carry)

      frameTask = frameTo({
        from,
        to,
        duration: getDuration(newNumber - number),
        progress: ({ current }) => {
          number = parseFloat((current / carry).toFixed(decimalDigits))
          content.value = props.thousands
            ? thousands(number.toFixed(decimalDigits))
            : number.toFixed(decimalDigits)
        },
        complete: ({ id }) => {
          if (frameTask && frameTask.id === id) {
            frameTask = null
          }

          emit('animated', { number })
        }
      })
    }

    watch(
      () => props.number,
      val => update(val),
      { immediate: true }
    )

    onBeforeUnmount(() => cancel())

    return {
      content,
      cancel
    }
  }
})
</script>
