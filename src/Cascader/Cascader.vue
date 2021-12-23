<template>
  <div class="fx-cascader" :class="{ disabled }" ref="root">
    <SelectorField
      :label="fieldLabel"
      :value="fieldValue"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      @fieldClick="onFieldClick"
    />
    <CascaderPopup
      :options="options"
      :fieldNames="fieldNames"
      :modelValue="modelValue"
      :title="placeholder"
      :formatter="formatter"
      :parser="parser"
      v-model:visible="popupVisible"
      v-if="isInitPopup"
      @confirm="onConfirm"
      ref="popup"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CascaderPopup } from '@/CascaderPopup'
import { SelectorField } from '@/SelectorField'
import { formItemEmits, formItemProps } from '@/Form/form'
import {
  pickerEmits,
  pickerProps,
  commonProps,
  mergeHandlers
} from '@/Picker/picker'
import { usePicker } from '@/Picker/use-picker'

export default defineComponent({
  name: 'fx-cascader',
  components: { CascaderPopup, SelectorField },
  props: { ...formItemProps, ...commonProps, ...pickerProps },
  emits: [...formItemEmits, ...pickerEmits],
  setup(props, ctx) {
    return {
      ...usePicker(props, ctx, {
        name: 'cascader',
        handlers: mergeHandlers({
          formatter: props.formatter,
          parser: props.parser
        })
      })
    }
  }
})
</script>
