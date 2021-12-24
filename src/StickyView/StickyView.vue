<template>
  <div class="fx-sticky-view" ref="root">
    <div class="fx-sticky-view_list" ref="list">
      <slot></slot>
    </div>
    <Sticky
      :offset-top="offsetTop"
      :contain-selector="containSelector"
      :disabled="disabled"
      class="fx-sticky-view_top"
      ref="sticky"
    >
      <div ref="fixed" class="fx-sticky-view_fixed" :style="fixedStyles">
        {{ title }}
      </div>
    </Sticky>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { Sticky } from '@/Sticky'
import {
  getRelativeOffset,
  getScrollDom,
  getSizeValue,
  querySelector
} from '@/helpers/dom'
import { selectorValidator, sizeValidator } from '@/helpers/validator'
import { useScrollEvent } from '@/hooks/use-scroll'
import { isNumber } from '@/helpers/util'
import { useList } from '@/hooks/use-list'
import type {
  ScrollToOptions,
  ScrollToIndexOptions,
  Noop
} from '../helpers/types'

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
      validator: selectorValidator,
      default: null
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
  emits: ['reset-items', 'update:activeIndex', 'change'],
  setup(props, ctx) {
    const { emit } = ctx
    const root = ref<HTMLElement>()
    const fixed = ref<HTMLElement>()
    const sticky = ref()
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
    let scrollOff: Noop

    function resetContainer(containSelector: any) {
      scrollOff && scrollOff()
      $container = querySelector(containSelector) || (root.value as HTMLElement)

      if ($container === root.value) {
        isSelfContainer.value = true
      }

      sticky.value && sticky.value.resetContainer($container)

      scrollOff = useScrollEvent($container, (e: Event, { scrollTop }) => {
        updateFixed(scrollTop)
      })

      updateFixed(null)
    }

    function updateFixed(scrollTop: number | null) {
      const $fixed = fixed.value as HTMLElement

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
        scrollTop == null
          ? getScrollDom($container).scrollTop
          : (scrollTop as number)

      const activeIndex = index.value
      const nextIndex = activeIndex + 1
      const offsetTops = getOffsetTops()

      const current = offsetTops[activeIndex]
      const next =
        offsetTops[nextIndex] != null ? offsetTops[nextIndex] : Infinity
      const first = offsetTops[0]

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
        getRelativeOffset(list.value as HTMLElement, $container).offsetTop -
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
      let _index: number

      if (isNumber(options)) {
        _index = options as number
      } else {
        _index = (options as ScrollToIndexOptions).index
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
      let offset: number

      if (isNumber(options)) {
        offset = options as number
      } else {
        offset = (options as ScrollToOptions).offset
      }

      isScrollTo = true
      getScrollDom($container).scrollTop = offset
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

    const { list } = useList('stickyView', resetItems)

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

    onMounted(() => {
      resetContainer(props.containSelector)
    })

    return {
      root,
      list,
      fixed,
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
