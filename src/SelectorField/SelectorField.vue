<template>
  <div
    class="fx-input"
    :class="{ 'has--value': label, disabled }"
    @click="onFieldClick"
  >
    <div class="fx-input_input" :class="{ placeholder: !label }">
      {{ label || placeholder }}
    </div>
    <Icon class="fx-input_arrow" icon="RightOutlined" />
    <input
      class="fx-input_cover fx-form-input"
      type="text"
      readonly
      :name="name"
      :disabled="disabled"
      :value="value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '../Icon'
import { emitEventValidator } from '../helpers/validator'

export default defineComponent({
  name: 'fx-selector-field',
  components: { Icon },
  props: {
    disabled: Boolean,
    value: String,
    label: String,
    name: String,
    placeholder: String
  },
  emits: { 'field-click': emitEventValidator },
  setup(props, { emit }) {
    function onFieldClick(e: Event) {
      emit('field-click', e)
    }

    return {
      onFieldClick
    }
  }
})
</script>
