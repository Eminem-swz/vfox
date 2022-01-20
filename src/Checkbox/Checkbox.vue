<template>
  <label
    class="fx-checkbox fx-horizontal-hairline"
    :class="{ disabled: disabled2 }"
    :style="styles"
  >
    <input
      class="fx-checkbox_input fx-form-input"
      type="checkbox"
      :name="name2"
      :value="value"
      :disabled="disabled2"
      @change="onChange"
      ref="input"
    />
    <div class="fx-checkbox_box">
      <Icon
        class="fx-checkbox_icon"
        :icon="circle ? 'CircleOutlined' : 'BorderOutlined'"
      />
      <Icon
        class="fx-checkbox_checked-icon"
        :icon="circle ? 'CheckCircleFilled' : 'CheckSquareFilled'"
      />
      <span class="fx-checkbox_text" v-if="$slots.default">
        <slot></slot>
      </span>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '../Icon'
import {
  checkboxOrRadioEmits,
  checkboxOrRadioProps
} from '../Checkbox/checkbox-radio'
import { useCheckboxOrRadio } from '../Checkbox/use-checkbox-radio'

export default defineComponent({
  name: 'fx-checkbox',
  components: { Icon },
  props: {
    ...checkboxOrRadioProps,
    circle: {
      type: Boolean,
      default: false
    }
  },
  emits: { ...checkboxOrRadioEmits },
  setup(props, ctx) {
    return useCheckboxOrRadio(props, ctx, 'checkbox')
  }
})
</script>
