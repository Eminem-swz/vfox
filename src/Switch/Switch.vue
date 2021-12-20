<template>
  <label class="fx-switch" :class="{ disabled }" :style="styles">
    <input
      class="fx-switch_checkbox"
      type="checkbox"
      :disabled="disabled"
      :name="formName"
      :value="formValue.toString()"
      @change="onChange"
      ref="input"
    />
  </label>
</template>

<script lang="ts">
import { onMounted, ref, watch, defineComponent, computed } from 'vue'
import { formItemEmits, formItemProps } from '@/Form/form'
import { useFormItem } from '@/Form/use-form'
import type { StyleObject } from '../helpers/types'

export default defineComponent({
  name: 'fx-switch',
  props: {
    ...formItemProps,
    modelValue: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    activeColor: {
      type: String
    },
    size: {
      type: [Number, String]
    }
  },
  emits: formItemEmits,
  setup(props, ctx) {
    const { emit } = ctx
    const formValue = ref(!!props.modelValue)

    const {
      formName,
      validateAfterEventTrigger,
      getInputEl,
      hookFormValue,
      eventEmit
    } = useFormItem<boolean>(props, ctx, {
      formValue,
      hookResetValue: input => input?.checked || false
    })

    watch(
      () => props.modelValue,
      val => {
        val = !!val

        if (val !== formValue.value) {
          getInputEl().checked = formValue.value = val
        }
      }
    )

    function onChange(e: Event) {
      const value = !!(e.target as HTMLInputElement).checked

      formValue.value = value

      if (props.modelValue !== value) {
        emit('update:modelValue', value)
      }

      eventEmit(e.type)
    }

    onMounted(() => {
      const $input = getInputEl()

      $input.defaultChecked = $input.checked = formValue.value
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

    return {
      formName,
      formValue,
      onChange,
      hookFormValue,
      validateAfterEventTrigger,
      styles
    }
  }
})
</script>
