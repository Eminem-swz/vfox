<template>
  <div
    class="fx-radio-group"
    :class="{ vertical: !inline, disabled: !!disabled }"
    ref="root"
  >
    <slot>
      <Radio v-for="item in options2" :key="item.value" :value="item.value">{{
        item.label
      }}</Radio>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Radio from './Radio.vue'
import { formItemEmits, formItemProps } from '@/Form/form'
import { useCheckboxOrRadioGroup } from '@/Checkbox/use-checkbox-radio'
import type { ModelValue } from '../Checkbox/types'
import { checkboxOrRadioGroupProps } from '@/Checkbox/checkbox-radio'

export default defineComponent({
  name: 'fx-radio-group',
  components: { Radio },
  props: {
    ...formItemProps,
    ...checkboxOrRadioGroupProps,
    modelValue: {
      type: [Number, String],
      default: null
    }
  },
  emits: formItemEmits,
  setup(props, ctx) {
    const inputValue = ref<ModelValue>('')
    const { emit } = ctx

    const group = useCheckboxOrRadioGroup(props, ctx, {
      name: 'radio',
      updateValue({ isChange, uid, children }) {
        let hasChecked = false
        let value: ModelValue = ''

        children.forEach(child => {
          const checked = uid ? uid === child.uid : child.getInputChecked()

          if (!hasChecked && checked) {
            hasChecked = true
            value = child.getValue()
            child.setChecked(true)
          } else {
            child.setChecked(false)
          }
        })

        inputValue.value = value

        if (isChange && inputValue.value !== props.modelValue) {
          emit('update:modelValue', value)
        }

        if (isChange) {
          emit('change', value)
        }

        return value
      },
      watchValue({ children, value }) {
        let hasChecked = false

        children.forEach(child => {
          if (!hasChecked && child.getValue() === value) {
            hasChecked = true
            inputValue.value = value
            child.setChecked(true)
          } else {
            child.setChecked(false)
          }
        })
      }
    })

    return {
      ...group
    }
  }
})
</script>
