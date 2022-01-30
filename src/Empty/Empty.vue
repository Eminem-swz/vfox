<template>
  <div class="fx-empty">
    <slot name="image" v-if="$slots.image"></slot>
    <template v-else>
      <img class="fx-empty_image" :src="imageUrl" />
    </template>
    <p class="fx-empty_description" v-show="description">
      {{ description }}
    </p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
import { createEnumsValidator, getEnumsValue } from '../helpers/validator'
import type { EmptyType } from './types'
import { images } from './images'

const TYPE_NAMES: EmptyType[] = ['default', 'error', 'network', 'search']

export default defineComponent({
  name: 'fx-empty',
  props: {
    // 描述文字
    description: {
      type: String,
      default: ''
    },
    // 类型
    type: {
      type: String as PropType<EmptyType>,
      validator: createEnumsValidator(TYPE_NAMES),
      default: TYPE_NAMES[0]
    }
  },
  setup(props) {
    const imageUrl = computed(() => {
      return images[getEnumsValue(TYPE_NAMES, props.type)]
    })

    return {
      imageUrl
    }
  }
})
</script>
