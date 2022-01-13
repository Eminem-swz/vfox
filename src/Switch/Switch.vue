<template>
  <label class="fx-switch" :class="{ disabled }" :style="styles">
    <input
      class="fx-switch_checkbox"
      type="checkbox"
      :disabled="disabled"
      :name="name"
      :value="checked.toString()"
      @change="onChange"
      ref="input"
    />
  </label>
</template>

<script lang="ts">
import { onMounted, ref, watch, defineComponent, computed } from 'vue'
import { formItemProps } from '@/Form/form'
import { useInput } from '@/Form/use-form'
import type { StyleObject } from '../helpers/types'
import { colorValidator } from '@/helpers/validator'

const isValue = (value: boolean) => typeof value === 'boolean'

export default defineComponent({
  name: 'fx-switch',
  props: {
    ...formItemProps,
    modelValue: {
      type: Boolean
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
  emits: {
    'update:modelValue': isValue,
    change: isValue
  },
  setup(props, { emit }) {
    const isValueNull = props.modelValue == null
    const checked = ref(!!props.modelValue)
    const { input, setInputChecked, getInputChecked } = useInput()

    watch(
      () => props.modelValue,
      val => {
        val = !!val

        if (val !== checked.value) {
          checked.value = val

          setInputChecked(val)
        }
      }
    )

    function onChange() {
      const value = getInputChecked()

      checked.value = value

      if (props.modelValue !== value) {
        emit('update:modelValue', value)
      }

      emit('change', value)
    }

    onMounted(() => {
      setInputChecked(checked.value)
    })

    const styles = computed(() => {
      const obj: StyleObject = {}

      props.color && (obj['--fx-color'] = props.color)
      props.activeColor && (obj['--fx-active-color'] = props.activeColor)
      props.size != null &&
        props.size > 0 &&
        (obj['--fx-size'] = parseFloat(props.size as string) + 'px')

      return obj
    })

    if (isValueNull) {
      emit('change', checked.value)
    }

    return {
      input,
      checked,
      onChange,
      styles
    }
  }
})
</script>
