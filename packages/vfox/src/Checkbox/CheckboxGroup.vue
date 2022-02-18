<template>
  <div
    class="fx-checkbox-group"
    :class="{ vertical: !inline, disabled: !!disabled }"
    ref="root"
  >
    <slot>
      <Checkbox
        v-for="item in options2"
        :key="item.value"
        :value="item.value"
        >{{ item.label }}</Checkbox
      >
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'
import Checkbox from './Checkbox.vue'
import { isStringNumberMixArray, cloneData, isSameArray } from '../helpers/util'
import { useCheckboxOrRadioGroup } from '../Checkbox/use-checkbox-radio'
import type { ModelValue } from './types'
import { checkboxOrRadioGroupProps } from './checkbox-radio'

const isValue = (value: ModelValue[]) => isStringNumberMixArray(value)

export default defineComponent({
  name: 'fx-checkbox-group',
  components: { Checkbox },
  props: {
    ...checkboxOrRadioGroupProps,
    modelValue: {
      type: Array as PropType<ModelValue[]>,
      validator: isValue,
      default: (): string[] => []
    }
  },
  emits: {
    'update:modelValue': isValue,
    change: isValue
  },
  setup(props, ctx) {
    const inputValue = ref<ModelValue[]>([])
    const { emit } = ctx

    const group = useCheckboxOrRadioGroup(props, {
      name: 'checkbox',
      updateValue({ isChange, children }) {
        const newVal: ModelValue[] = []

        children.forEach(child => {
          if (child.getInputChecked()) {
            newVal.push(cloneData(child.getValue()))
          }
        })

        inputValue.value = newVal

        if (isChange && !isSameArray(newVal, props.modelValue)) {
          emit('update:modelValue', cloneData(newVal))
        }

        if (isChange) {
          emit('change', cloneData(newVal))
        }

        return newVal
      },
      watchValue({ children, value }) {
        if (
          isStringNumberMixArray(value) &&
          !isSameArray(value, inputValue.value)
        ) {
          const newVal: ModelValue[] = []

          children.forEach(child => {
            const checked = value.includes(child.getValue())
            child.setChecked(checked)
            checked && newVal.push(child.getValue())
          })

          inputValue.value = newVal
        }
      }
    })

    return {
      ...group
    }
  }
})
</script>
