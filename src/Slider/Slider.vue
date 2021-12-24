<template>
  <div class="fx-slider" :class="{ disabled: !!disabled }" :style="styles">
    <div class="fx-slider_inner" ref="slider">
      <div class="fx-slider_box">
        <div
          class="fx-slider_track"
          :style="{ width: progress * 100 + '%' }"
        ></div>
        <div
          class="fx-slider_thumb"
          data-thumb="true"
          :style="{ left: progress * 100 + '%' }"
        >
          {{ showValue ? inputValue : '' }}
        </div>
      </div>
      <input
        type="hidden"
        :name="name"
        :disabled="disabled"
        :value="inputValue"
        ref="input"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch, nextTick } from 'vue'
import { isNumeric } from '@/helpers/util'
import { formItemEmits, formItemProps } from '@/Form/form'
import { slideProps, slideEmits } from '@/Slider/slide'
import { useSlide } from '@/Slider/use-slide'

export default defineComponent({
  name: 'fx-slider',
  props: {
    ...formItemProps,
    ...slideProps,
    modelValue: {
      type: [Number, String],
      validator: isNumeric
    }
  },
  emits: [...formItemEmits, ...slideEmits],
  setup(props, ctx) {
    const progress = ref(0)
    const inputValue = ref(0)
    const { emit } = ctx

    const { slider, toInteger, rangeValue, value2Progress, styles } = useSlide(
      props,
      {
        getValue() {
          return inputValue.value
        },
        move({ value: newVal, progress: newProgress }) {
          inputValue.value = newVal
          progress.value = newProgress

          emitModel()
          emit('input', inputValue.value)
        },
        end({ isChange }) {
          isChange && emit('change', inputValue.value)
        }
      }
    )

    function emitModel() {
      if (
        props.modelValue == null ||
        inputValue.value !== toInteger(props.modelValue)
      ) {
        emit('update:modelValue', inputValue.value)
        return true
      }
      return false
    }

    function updateValue(val: unknown) {
      if (val == null) {
        return
      }

      let newVal = toInteger(val as string)

      if (isNaN(newVal)) {
        return
      }

      newVal = rangeValue(newVal)

      if (newVal !== inputValue.value) {
        inputValue.value = newVal
        progress.value = value2Progress(newVal)
      }
    }

    watch(
      () => props.modelValue,
      val => updateValue(val)
    )

    watch([() => props.min, () => props.max], () => {
      nextTick(() => {
        updateValue(inputValue.value)

        if (emitModel()) {
          emit('change', inputValue.value)
        }
      })
    })

    updateValue(props.modelValue || 0)

    if (emitModel()) {
      emit('change', inputValue.value)
    }

    return {
      slider,
      progress,
      inputValue,
      styles
    }
  }
})
</script>
