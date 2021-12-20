<template>
  <div
    class="fx-checkbox-group"
    :class="{ vertical: !inline, disabled: !!disabled }"
    ref="root"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
import { formItemEmits, formItemProps } from '@/Form/form'
import {
  isStringNumberMixArray,
  cloneData,
  isSameArray,
  inArray
} from '@/helpers/util'
import { useCheckboxOrRadioGroup } from '@/Checkbox/use-checkbox-radio'
import type { ModelValue } from './types'

export default defineComponent({
  name: 'fx-checkbox-group',
  props: {
    ...formItemProps,
    modelValue: {
      type: Array as PropType<ModelValue[]>,
      validator: isStringNumberMixArray,
      default: (): string[] => []
    },
    inline: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String
    }
  },
  emits: formItemEmits,
  setup(props, ctx) {
    const formValue = reactive<ModelValue[]>([])

    const group = useCheckboxOrRadioGroup(props, ctx, {
      name: 'checkbox',
      updateValue({ isChange, children, hookFormValue }) {
        const value: ModelValue[] = []

        children.forEach(child => {
          if (child.getInputChecked()) {
            value.push(cloneData(child.getValue()))
          }
        })

        formValue.splice(0, Infinity, ...value)

        if (isChange && !isSameArray(value, props.modelValue)) {
          ctx.emit('update:modelValue', hookFormValue())
        }

        return hookFormValue()
      },
      watchValue({ children, value }) {
        if (
          isStringNumberMixArray(value) &&
          !isSameArray(value as ModelValue[], formValue)
        ) {
          formValue.length = 0

          children.forEach(child => {
            const checked = inArray(child.getValue(), value as ModelValue[])
            child.setChecked(checked)
            checked && formValue.push(child.getValue())
          })
        }
      },
      formValue
    })

    return {
      ...group,
      formValue
    }
  }
})
</script>
