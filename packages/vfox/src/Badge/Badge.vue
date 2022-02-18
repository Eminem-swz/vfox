<template>
  <div class="fx-badge" :class="{ animated: !!animated }">
    <slot></slot>
    <div
      class="fx-badge_badge"
      :class="{ dot }"
      :style="styles"
      v-if="content != null"
    >
      <slot name="badge">
        {{ showCount }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { isNumber, rangeInteger } from '../helpers/util'
import type { StyleObject } from '../helpers/types'
import { AnimationFrameTask, frameTo } from '../helpers/animation'
import { getColorObject } from '../helpers/color'
import { colorValidator } from '../helpers/validator'

export default defineComponent({
  name: 'fx-badge',
  props: {
    content: {
      type: [Number, String],
      default: 0
    },
    maxCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    },
    showZero: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Array as PropType<number[]>,
      default: () => {
        return [0, 0]
      }
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup(props) {
    const content2 = ref<string | number>(
      typeof props.content === 'string'
        ? props.content
        : typeof props.content === 'number'
        ? rangeInteger(props.content, 0, props.maxCount)
        : 0
    )

    let frameTask: AnimationFrameTask

    const showCount = computed(() => {
      if (typeof content2.value === 'string') {
        return content2.value
      }

      if (props.content > props.maxCount && content2.value === props.maxCount) {
        return content2.value + '+'
      }
      return content2.value.toString()
    })

    const styles = computed(() => {
      const obj: StyleObject = {
        transform: `translate3d(50%, -50%, 0px) scale(${
          (typeof props.content === 'string' && props.content) ||
          props.showZero ||
          props.content > 0
            ? 1
            : 0
        })`,
        right: `${-props.offset[0]}px`,
        top: `${props.offset[1]}px`
      }

      const colorObj = getColorObject(props.color as string)

      if (colorObj.hasColor) {
        obj[`--fx-color`] = colorObj.varBackgroundColor
        obj[`--fx-front-color`] = colorObj.varFrontColor
      }

      return obj
    })

    watch(
      () => props.content,
      val => {
        frameTask && frameTask.stop()

        if (typeof val === 'string') {
          content2.value = val
          return
        }
        if (!isNumber(val)) {
          return
        }

        const currentIsShow = props.showZero || content2.value > 0
        const isReadyToHide = !props.showZero && val === 0

        if (!currentIsShow || isReadyToHide) {
          content2.value = val
        } else {
          const to = rangeInteger(val, 0, props.maxCount)

          frameTask = frameTo({
            from: content2.value as number,
            to,
            duration: Math.min(
              Math.abs(to - (content2.value as number)) * 50,
              1000
            ),
            progress: ({
              current,
              frameIndex
            }: {
              current: number
              frameIndex: number
            }) => {
              if (frameIndex % 3 === 0) {
                content2.value = Math.round(current)
              }
            },
            complete: ({ current }: { current: number }) => {
              content2.value = current
            }
          })
        }
      }
    )

    onBeforeUnmount(() => frameTask && frameTask.stop())

    return {
      showCount,
      styles
    }
  }
})
</script>
