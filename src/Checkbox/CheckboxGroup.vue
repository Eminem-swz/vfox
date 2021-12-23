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
import { defineComponent, reactive, PropType } from 'vue'
import Checkbox from './Checkbox.vue'
import { formItemEmits, formItemProps } from '@/Form/form'
import {
  isStringNumberMixArray,
  cloneData,
  isSameArray,
  inArray
} from '@/helpers/util'
import { useCheckboxOrRadioGroup } from '@/Checkbox/use-checkbox-radio'
import type { ModelValue } from './types'
import { checkboxOrRadioGroupProps } from './checkbox-radio'

export default defineComponent({
  name: 'fx-checkbox-group',
  components: { Checkbox },
  props: {
    ...formItemProps,
    ...checkboxOrRadioGroupProps,
    modelValue: {
      type: Array as PropType<ModelValue[]>,
      validator: isStringNumberMixArray,
      default: (): string[] => []
    }
  },
  emits: formItemEmits,
  setup(props, ctx) {
    const inputValue = reactive<ModelValue[]>([])
    const { emit } = ctx

    const group = useCheckboxOrRadioGroup(props, ctx, {
      name: 'checkbox',
      updateValue({ isChange, children }) {
        const value: ModelValue[] = []

        children.forEach(child => {
          if (child.getInputChecked()) {
            value.push(cloneData(child.getValue()))
          }
        })

        inputValue.splice(0, Infinity, ...value)

        if (isChange && !isSameArray(value, props.modelValue)) {
          ctx.emit('update:modelValue', cloneData(value))
        }

        if (isChange) {
          emit('change', cloneData(value))
        }

        return value
      },
      watchValue({ children, value }) {
        if (
          isStringNumberMixArray(value) &&
          !isSameArray(value as ModelValue[], inputValue)
        ) {
          inputValue.length = 0

          children.forEach(child => {
            const checked = inArray(child.getValue(), value as ModelValue[])
            child.setChecked(checked)
            checked && inputValue.push(child.getValue())
          })
        }
      }
    })

    return {
      ...group
    }
  }
})
</script>
