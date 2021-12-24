<template>
  <label
    class="fx-radio fx-horizontal-hairline"
    :class="{ disabled: disabled2 }"
    :style="styles"
  >
    <input
      class="fx-radio_input fx-form-input"
      type="radio"
      :name="name2"
      :value="value"
      :disabled="disabled2"
      @change="onChange"
      ref="input"
    />
    <div class="fx-radio_box">
      <Icon class="fx-radio_icon" icon="CircleOutlined" />
      <Icon class="fx-radio_checked-icon" icon="CheckCircleFilled" />
      <span class="fx-radio_text" v-if="$slots.default">
        <slot></slot>
      </span>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@/Icon'
import { checkboxOrRadioEmits } from '@/Checkbox/checkbox-radio'
import { useCheckboxOrRadio } from '@/Checkbox/use-checkbox-radio'

export default defineComponent({
  name: 'fx-radio',
  components: { Icon },
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String
    },
    name: {
      type: String,
      default: ''
    }
  },
  emits: [...checkboxOrRadioEmits],
  setup(props, ctx) {
    return useCheckboxOrRadio(props, ctx, 'radio')
  }
})
</script>
