<template>
  <div
    class="fx-sticky-view"
    ref="root"
    :class="{
      self: isSelfContainer
    }"
  >
    <div class="fx-sticky-view_list" ref="listEl">
      <slot></slot>
    </div>
    <Sticky
      :offsetTop="offsetTop"
      :containSelector="containSelector"
      :disabled="disabled"
      class="fx-sticky-view_top"
      ref="sticky"
    >
      <div ref="fixedEl" class="fx-sticky-view_fixed">
        <div class="fx-sticky-view_fixed-inner" :style="fixedStyles">
          {{ title }}
        </div>
      </div>
    </Sticky>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { Sticky } from '../Sticky'
import {
  getRelativeOffset,
  getScrollTop,
  getSizeValue,
  querySelector,
  setScrollTop
} from '../helpers/dom'
import { selectorValidator, sizeValidator } from '../helpers/validator'
import { useScrollEvent } from '../hooks/use-scroll'
import { useList } from '../hooks/use-list'
import { emitChangeValidator } from '../StickyView/stickyView'
import { StickyViewItem, ScrollToOptions, ScrollToIndexOptions } from './types'
import type { DomSelector } from '../helpers/types'

export default defineComponent({
  name: 'fx-sticky-view',
  components: { Sticky },
  props: {
    // 纵向
    activeIndex: {
      type: Number,
      default: 0
    },
    containSelector: {
      type: [String, HTMLElement, Document] as PropType<DomSelector>,
      validator: selectorValidator
    },
    offsetTop: {
      type: [Number, String],
      validator: sizeValidator,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:activeIndex': (activeIndex: number) =>
      typeof activeIndex === 'number',
    change: emitChangeValidator,
    'reset-items': (items: StickyViewItem[]) => {
      if (Array.isArray(items)) {
        return (
          items.filter(item => {
            return !(
              item &&
              typeof item.index === 'number' &&
              typeof item.name === 'string'
            )
          }).length === 0
        )
      }
      return false
    }
  },
  setup(props, { emit }) {
    const root = ref<HTMLElement>()
    const fixedEl = ref<HTMLElement>()
    const sticky = ref<InstanceType<typeof Sticky>>()
    const index = ref(0)
    const title = ref('')
    const titleY = ref<number | null>(0)
    const isSelfContainer = ref(false)

    let $items: HTMLElement[] = []
    let isScrollTo = false

    function getItemName(index: number) {
      return $items[index]?.dataset.name || ''
    }

    let $container: HTMLElement
    let scrollOff: () => void

    function resetContainer(containSelector?: DomSelector) {
      scrollOff && scrollOff()
      $container = querySelector(containSelector) || (root.value as HTMLElement)

      isSelfContainer.value = $container === root.value

      sticky.value?.resetContainer($container)

      scrollOff = useScrollEvent($container, (e: Event, { scrollTop }) => {
        updateFixed(scrollTop)
      })

      updateFixed(null)
    }

    function updateFixed(scrollTop: number | null) {
      const $fixed = fixedEl.value as HTMLElement

      if (!$fixed) {
        return
      }

      const h = $fixed.clientHeight

      if ($items.length === 0) {
        title.value = ''
        titleY.value = -h
        return
      }

      scrollTop =
        scrollTop == null ? getScrollTop($container) : (scrollTop as number)

        console.log(scrollTop)

      const activeIndex = index.value
      const nextIndex = activeIndex + 1
      const offsetTops = getOffsetTops()

      const current = offsetTops[activeIndex]
      const next =
        offsetTops[nextIndex] != null ? offsetTops[nextIndex] : Infinity
      const first = offsetTops[0]
      console.log(offsetTops)

      if (scrollTop < first) {
        title.value = ''
        titleY.value = null
      } else if (scrollTop >= current) {
        if (scrollTop >= next) {
          index.value = nextIndex
          title.value = getItemName(nextIndex)
          titleY.value = 0

          if (
            offsetTops[nextIndex + 1] &&
            scrollTop >= offsetTops[nextIndex + 1]
          ) {
            // 超过了
            updateFixed(scrollTop)
          } else {
            if (!isScrollTo) {
              emit('update:activeIndex', index.value)
            }
            emit('change', {
              activeIndex: index.value
            })
          }
        } else if (next - scrollTop < h) {
          titleY.value = next - scrollTop - h
        } else {
          title.value = getItemName(activeIndex)
          titleY.value = 0
        }
      } else {
        if (current - scrollTop < h) {
          title.value = getItemName(activeIndex - 1)
          titleY.value = current - scrollTop - h
        } else {
          index.value = activeIndex - 1
          title.value = getItemName(index.value)
          titleY.value = 0

          if (
            offsetTops[activeIndex - 1] &&
            offsetTops[activeIndex - 1] > scrollTop
          ) {
            updateFixed(scrollTop)
          } else {
            if (!isScrollTo) {
              emit('update:activeIndex', index.value)
            }

            emit('change', {
              activeIndex: index.value
            })
          }
        }
      }

      isScrollTo = false
    }

    function getOffsetTops() {
      const offset =
        getRelativeOffset(listEl.value as HTMLElement, $container).offsetTop -
        getSizeValue(props.offsetTop)

      return $items.map($el => {
        return $el.offsetTop + offset
      })
    }

    /**
     * 滚动到第index个
     * @param options
     */
    function scrollToIndex(options: number | ScrollToIndexOptions) {
      let _index = 0

      if (typeof options === 'number') {
        _index = options
      } else if (options && typeof options.index === 'number') {
        _index = options.index
      }

      if ($items[_index] && _index != index.value) {
        scrollTo({
          offset: getRelativeOffset($items[_index], $container).offsetTop
        })
      }
    }

    /**
     * 滚到到指定位置
     * @param options
     */
    function scrollTo(options: number | ScrollToOptions) {
      let offset = 0

      if (typeof options === 'number') {
        offset = options
      } else if (options && typeof options.offset === 'number') {
        offset = options.offset
      }

      isScrollTo = true
      setScrollTop($container, offset)
    }

    function resetItems(res: HTMLElement[]) {
      $items = res

      updateFixed(null)

      emit(
        'reset-items',
        $items.map((v, k) => {
          return {
            name: getItemName(k),
            index: k
          }
        })
      )
    }

    const { listEl } = useList('stickyView', resetItems)

    const fixedStyles = computed(() => {
      return {
        transform: `translate3d(0px, ${
          titleY.value === null ? '-100%' : titleY.value + 'px'
        }, 0px)`
      }
    })

    watch(
      () => props.activeIndex,
      val => scrollToIndex({ index: val })
    )

    onMounted(() => resetContainer(props.containSelector))

    return {
      root,
      listEl,
      fixedEl,
      sticky,
      index,
      title,
      isSelfContainer,
      fixedStyles,
      resetContainer,
      scrollToIndex,
      scrollTo
    }
  }
})
</script>
