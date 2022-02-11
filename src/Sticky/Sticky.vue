<template>
  <div class="fx-sticky" :style="styles" ref="root">
    <div class="fx-sticky_content" ref="contentEl">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, inject, watch } from 'vue'
import type { PropType } from 'vue'
import { widgetZIndex } from '../helpers/layer'
import { selectorValidator, sizeValidator } from '../helpers/validator'
import { useScrollEvent } from '../hooks/use-scroll'
import {
  getRelativeOffset,
  getScrollTop,
  getSizeValue,
  querySelector
} from '../helpers/dom'
import type { DomSelector, StyleObject } from '../helpers/types'
import { useFixed } from '../hooks/use-fixed'

export default defineComponent({
  name: 'fx-sticky',
  props: {
    containSelector: {
      type: [String, HTMLElement, Document] as PropType<DomSelector>,
      validator: selectorValidator
    },
    offsetTop: {
      type: [Number, String],
      validator: sizeValidator,
      default: 0
    },
    offsetBottom: {
      type: [Number, String],
      validator: sizeValidator,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const root = ref<HTMLElement>()
    const contentEl = ref<HTMLElement>()
    const width = ref<number | null>(null)
    const height = ref<number | null>(null)
    const disableFixed = inject('disableFixed', false)
    const fixed = ref(false)

    useFixed({
      disableFixed,
      root,
      inner: contentEl,
      fixed
    })

    function updateFixed(scrollTop: number | null) {
      if (!root.value || !$container) {
        return
      }

      if (props.disabled) {
        updateStyles(false)
        return
      }

      if (scrollTop == null) {
        scrollTop = getScrollTop($container)
      }

      const $root = root.value as HTMLElement
      const { clientHeight, clientWidth } = $root

      const offsetTop = getRelativeOffset($root, $container).offsetTop

      if (scrollTop >= offsetTop - getSizeValue(props.offsetTop)) {
        height.value = clientHeight
        width.value = clientWidth
        updateStyles(true)
      } else {
        height.value = null
        width.value = null
        updateStyles(false)
      }
    }

    function updateStyles(isFixed: boolean) {
      const $root = root.value as HTMLElement
      const styles = (contentEl.value as HTMLElement).style

      if (isFixed) {
        const { offsetTop } = getRelativeOffset($container)
        const { offsetLeft } = getRelativeOffset($root)

        styles.top = offsetTop + getSizeValue(props.offsetTop) + 'px'
        styles.left = offsetLeft + 'px'
        styles.width = width.value + 'px'
        if (props.offsetBottom != null) {
          styles.bottom = getSizeValue(props.offsetBottom) + 'px'
        } else {
          styles.height = height.value + 'px'
        }
        styles.zIndex = widgetZIndex.toString()
        styles.position = 'fixed'
      } else {
        styles.cssText = ''
      }

      fixed.value = isFixed
    }

    let $container: HTMLElement
    let scrollOff: () => void

    function resetContainer(containSelector?: DomSelector) {
      scrollOff && scrollOff()
      $container = querySelector(containSelector) || document.documentElement

      scrollOff = useScrollEvent($container, (e: Event, { scrollTop }) => {
        updateFixed(scrollTop)
      })

      updateFixed(null)
    }

    const styles = computed(() => {
      const styles: StyleObject = {}

      if (height.value != null) {
        styles.height = height.value + 'px'
      }

      return styles
    })

    watch(
      () => props.disabled,
      () => updateFixed(null)
    )

    onMounted(() => resetContainer(props.containSelector))

    return {
      root,
      fixed,
      contentEl,
      styles,
      resetContainer
    }
  }
})
</script>
