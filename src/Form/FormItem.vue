<template>
  <label
    class="fx-form-item fx-cell fx-horizontal-hairline"
    :class="[validateStatus]"
  >
    <div class="fx-cell_header">
      <div class="fx-cell_label" v-if="label">
        {{ label }}
        <span class="fx-form-item_required" v-if="required">*</span>
      </div>
      <div class="fx-cell_content">
        <slot></slot>
      </div>
    </div>
    <div class="fx-cell_body" v-if="errMsg">
      {{ errMsg }}
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'fx-form-item',
  props: {
    label: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    errMsg: {
      type: String
    },
    validateStatus: {
      type: String
    }
  }
})
</script>
