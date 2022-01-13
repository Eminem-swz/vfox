<template>
  <div
    class="fx-rate"
    :class="{ disabled: !!disabled, readonly: !!readonly }"
    :style="styles"
    ref="root"
  >
    <input
      :name="name"
      type="hidden"
      :value="inputValue"
      :disabled="disabled"
      ref="input"
    />
    <div
      class="fx-rate_item"
      :class="{
        active: num - 0.5 <= inputValue,
        half: inputValue - num === -0.5
      }"
      v-for="num in max"
      :key="num"
      :data-value="num"
    >
      <i class="fx-rate_icon">
        <Icon :icon="iconPattern + 'Outlined'" />
      </i>
      <i class="fx-rate_active-icon">
        <Icon :icon="iconPattern + 'Filled'" />
      </i>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { Icon } from '@/Icon'
import { capitalize, isInteger, isNumeric, rangeInteger } from '@/helpers/util'
import {
  colorValidator,
  createEnumsValidator,
  getEnumsValue
} from '@/helpers/validator'
import { formItemProps, formNumberValueEmits } from '@/Form/form'
import type { StyleObject } from '../helpers/types'
import { useTouch } from '@/hooks/use-touch'

interface RateCoords {
  size: number
  offsetX: number
  startX: number
  current: number
  isHalf: boolean
  isChange: boolean
}

const ALLOW_ICONS = ['star', 'heart']

const isIntegerOrHalf = (val: number | string) => {
  if (isNumeric(val)) {
    if (isInteger(val) || (parseFloat(val as string) * 10) % 5 === 0) {
      return true
    }
  }
  return false
}

export default defineComponent({
  name: 'fx-rate',
  components: { Icon },
  props: {
    ...formItemProps,
    pattern: {
      type: String as PropType<'star' | 'heart'>,
      validator: createEnumsValidator(ALLOW_ICONS),
      default: null
    },
    modelValue: {
      type: [Number, String],
      validator: isIntegerOrHalf,
      default: null
    },
    count: {
      type: [Number, String],
      default: 5
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      validator: colorValidator
    },
    activeColor: {
      type: String,
      validator: colorValidator
    },
    size: {
      type: [Number, String]
    }
  },
  emits: { ...formNumberValueEmits },
  setup(props, ctx) {
    const { emit } = ctx
    const root = ref<HTMLElement>()
    const inputValue = ref(0)

    function change(value: number, isHalf = false) {
      if (props.allowHalf && isHalf) {
        value -= 0.5
      }

      if (value !== inputValue.value) {
        inputValue.value = value

        emit('update:modelValue', value)
        emit('change', value)
      }
    }

    function onHalfClick(num: number) {
      if (props.readonly || props.disabled) {
        return
      }

      if (props.allowHalf) {
        num -= 0.5
      }

      change(num)
    }

    function onItemClick(num: number) {
      if (props.readonly || props.disabled) {
        return
      }

      change(num)
    }

    const iconPattern = computed(() =>
      capitalize(getEnumsValue(ALLOW_ICONS, props.pattern))
    )

    const styles = computed(() => {
      const obj: StyleObject = {}

      props.color && (obj['--fx-color'] = props.color)
      props.activeColor && (obj['--fx-active-color'] = props.activeColor)
      props.size != null &&
        props.size > 0 &&
        (obj['--fx-size'] = parseFloat(props.size as string) + 'px')

      return obj
    })

    const max = computed(() => {
      return isNumeric(props.count) && Math.round(props.count as number) > 0
        ? Math.round(props.count as number)
        : 5
    })

    let coords: RateCoords | null

    useTouch({
      el: root,
      onTouchStart(e) {
        if (props.disabled) {
          return
        }

        const { clientX } = e.touchObject

        let $target = e.target as HTMLElement
        while ($target.tagName !== 'DIV') {
          $target = $target.parentElement as HTMLElement
        }
        const value = parseInt($target.dataset.value as string)
        const rects = $target.getClientRects()[0]

        coords = {
          size: rects.height,
          offsetX: clientX - rects.left,
          startX: clientX,
          current: value,
          isHalf: false,
          isChange: false
        }
        coords.isHalf = coords.offsetX < coords.size / 2

        change(value, coords.isHalf)

        e.preventDefault()
      },
      onTouchMove(e) {
        if (!coords) {
          return
        }

        const { clientX } = e.touchObject
        const { startX, size, offsetX, current } = coords

        const x = clientX - startX

        let offsetCount = 0

        if (x > 0) {
          offsetCount =
            Math.floor(x / size) + (x % size > size - offsetX ? 1 : 0)
        } else if (x < 0) {
          offsetCount = -Math.floor(-x / size) + (-x % size > offsetX ? -1 : 0)
        }

        const isHalf = (offsetX + x) % size < size / 2

        coords.isChange = true

        change(rangeInteger(current + offsetCount, 1, max.value), isHalf)

        e.stopPropagation()
      },
      onTouchEnd(e) {
        if (coords) {
          coords = null
          e.stopPropagation()
        }
      }
    })

    function updateValue() {
      if (!isIntegerOrHalf(props.modelValue)) {
        return
      }

      const value = parseFloat(props.modelValue as string)

      if (value === inputValue.value) {
        return
      }

      if (value < 0 || value > max.value) {
        return
      }

      if (!props.allowHalf && !isInteger(value)) {
        return
      }

      inputValue.value = value
    }

    updateValue()

    watch(() => props.modelValue, updateValue)

    return {
      root,
      inputValue,
      iconPattern,
      styles,
      max,
      onHalfClick,
      onItemClick
    }
  }
})
</script>
