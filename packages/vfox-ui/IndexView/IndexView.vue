<template>
  <div class="fx-index-view">
    <div class="fx-index-view_sidebar">
      <ul class="fx-index-view_list" ref="navEl">
        <li
          :class="{ active: item.value === activeIndex }"
          v-for="item in indexList"
          :data-value="item.value"
          :key="item.value"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="fx-index-view_body">
      <StickyView
        :offsetTop="stickyOffsetTop"
        ref="stickyView"
        v-model:activeIndex="activeIndex"
        @resetItems="onResetItems"
        @change="onChange"
      >
        <slot></slot>
      </StickyView>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { StickyView } from '../StickyView'
import { sizeValidator } from '../helpers/validator'
import { rangeInteger } from '../helpers/util'
import type { ScrollToIndexOptions, ScrollToOptions } from '../StickyView/types'
import { useTouch } from '../hooks/use-touch'
import type {
  OnChange as StickyViewOnChange,
  StickyViewItem
} from '../StickyView/types'
import { emitChangeValidator } from '../StickyView/stickyView'
import type { DomSelector } from '../helpers/types'

export default defineComponent({
  name: 'fx-index-view',
  components: { StickyView },
  props: {
    stickyOffsetTop: {
      validator: sizeValidator,
      default: 0
    }
  },
  emits: {
    change: emitChangeValidator
  },
  setup(props, { emit }) {
    const navEl = ref<HTMLElement>()
    const stickyView = ref<InstanceType<typeof StickyView>>()
    const indexList = ref<
      {
        value: number
        label: string
      }[]
    >([])
    const activeIndex = ref(0)

    function resetContainer(containSelector: DomSelector) {
      stickyView.value?.resetContainer(containSelector)
    }

    function onResetItems(items: StickyViewItem[]) {
      indexList.value = items.map(item => {
        return {
          value: item.index,
          label: item.name
        }
      })
    }

    const onChange: StickyViewOnChange = res => {
      emit('change', res)
    }

    /**
     * 滚动到第index个
     * @param index 索引
     */
    function scrollToIndex(index: number | ScrollToIndexOptions) {
      stickyView.value?.scrollToIndex(index)
    }

    /**
     * 滚到到指定位置
     * @param scrollTop 位置值
     */
    function scrollTo(scrollTop: number | ScrollToOptions) {
      stickyView.value?.scrollTo(scrollTop)
    }

    let coords: any
    let changeTimer: number

    useTouch({
      el: navEl,
      onTouchStart(e) {
        const { clientY } = e.touchObject

        const $target = e.target as HTMLElement
        const value = parseInt($target.dataset.value as string)
        const rects = $target.getClientRects()[0]

        coords = {
          size: rects.height,
          offsetY: clientY - rects.top,
          startY: clientY,
          current: value
        }

        clearTimeout(changeTimer)
        changeTimer = window.setTimeout(() => {
          activeIndex.value = value
        }, 500)

        e.preventDefault()
      },

      onTouchMove(e) {
        if (!coords) {
          return
        }

        const { clientY } = e.touchObject
        const { startY, size, offsetY, current } = coords

        const y = clientY - startY

        let offsetCount = 0

        if (y > 0) {
          offsetCount =
            Math.floor(y / size) + (y % size > size - offsetY ? 1 : 0)
        } else if (y < 0) {
          offsetCount = -Math.floor(-y / size) + (-y % size > offsetY ? -1 : 0)
        }

        if (offsetCount !== 0) {
          clearTimeout(changeTimer)
          coords.isChange = true

          changeTimer = window.setTimeout(() => {
            activeIndex.value = rangeInteger(
              current + offsetCount,
              0,
              indexList.value.length - 1
            )
          }, 100)
        }

        e.stopPropagation()
      },

      onTouchEnd(e) {
        if (coords) {
          if (!coords.isChange) {
            clearTimeout(changeTimer)
            activeIndex.value = coords.current
          }

          coords = null
          e.stopPropagation()
        }
      }
    })

    onMounted(() => resetContainer(document))

    return {
      navEl,
      stickyView,
      activeIndex,
      indexList,
      onChange,
      scrollToIndex,
      scrollTo,
      resetContainer,
      onResetItems
    }
  }
})
</script>
