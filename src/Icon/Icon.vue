<template>
  <component
    :is="component"
    class="fx-icon"
    :class="{ spin }"
    :style="iconStyles"
    :iconName="iconName"
  >
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SvgIcon from './SvgIcon.vue'
import { iconValidator, isSvgComponent } from '@/helpers/validator'
import type { StyleObject } from '../helpers/types'

export default defineComponent({
  name: 'fx-icon',
  props: {
    icon: {
      type: null,
      validator: iconValidator,
      required: true
    },
    spin: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 0
    },
    color: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const iconStyles = computed(() => {
      const obj: StyleObject = {}

      props.color && (obj['--fx-icon-color'] = props.color)

      if (props.width > 0 && props.height > 0) {
        obj.width = props.width + 'px'
        obj.height = props.height + 'px'
      } else if (props.size > 0) {
        obj['--fx-icon-size'] = props.size + 'px'
      }

      return obj
    })

    const component = computed(() => {
      return isSvgComponent(props.icon) ? props.icon : SvgIcon
    })

    const iconName = computed(() => {
      return isSvgComponent(props.icon) ? null : props.icon
      // return `#icon-${isSvgComponent(props.icon) ? 'component' : props.icon}`
    })

    return {
      iconName,
      iconStyles,
      component
    }
  }
})
</script>
