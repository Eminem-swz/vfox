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
    <ol class="fx-cell_body" v-if="errors.length > 0">
      <li v-for="(error, k) in errors" :key="error">
        {{ errors.length > 1 ? k + 1 + '. ' : '' }}{{ error }}
      </li>
    </ol>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
import { isStringArray } from '../helpers/util'

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
    error: {
      type: [String, Array] as PropType<string | string[]>,
      validator: (val: string | string[]) =>
        typeof val === 'string' || isStringArray(val)
    },
    validateStatus: {
      type: String
    }
  },
  setup(props) {
    const errors = computed(() => {
      const ret: string[] = []

      if (Array.isArray(props.error)) {
        ;(props.error as string[]).forEach(v => {
          ret.push(v.toString())
        })
      } else if (props.error != null) {
        ret.push(props.error.toString())
      }

      return ret
    })

    return { errors }
  }
})
</script>
