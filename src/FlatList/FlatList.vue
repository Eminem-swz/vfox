<template>
  <ScrollView
    class="fx-flat-list"
    :class="{ horizontal }"
    :scrollX="scrollX"
    :scrollY="scrollY"
    :lowerThreshold="lowerThreshold"
    :enablePullDirections="enablePullDirections"
    @scroll="onScroll"
    @scrollToLower="onScrollToLower"
    @refreshing="onRefreshing"
    ref="scrollView"
  >
    <div class="fx-flat-list_header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <ul class="fx-flat-list_list" :style="listStyles" ref="listEl">
      <li
        class="fx-flat-list_item"
        v-for="item in renderList"
        :key="item.data[dataKey]"
        :data-index="item.index"
        :style="item.style"
      >
        <slot :data="item.data" :index="item.index"> </slot>
        <slot name="separator" :index="item.index"></slot>
      </li>
    </ul>
    <ul class="fx-flat-list_list pool" ref="poolEl">
      <li
        class="fx-flat-list_item"
        v-for="item in poolList"
        :key="item.id"
        :data-index="item.index"
      >
        <slot :data="item.data" :index="item.index"> </slot>
        <slot name="separator" :index="item.index"></slot>
      </li>
    </ul>
    <LoadMore
      class="fx-flat-list_indicator"
      loading
      :vertical="horizontal"
      v-if="lowerLoading && list.length > 0"
    >
      {{ locale.flatListLoadingText }}
    </LoadMore>
    <div class="fx-flat-list_empty" v-if="list.length === 0">
      <slot name="empty"></slot>
    </div>
    <div class="fx-flat-list_footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </ScrollView>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, nextTick, watch } from 'vue'
import type { PropType } from 'vue'
import { LoadMore } from '../LoadMore'
import { ScrollView } from '../ScrollView'
import {
  isInNumberRange,
  isInteger,
  isNumber,
  rangeInteger,
  rangeNumber
} from '../helpers/util'
import Exception from '../helpers/exception'
import { getViewPosition } from '../helpers/dom'
import { useResizeDetector } from '../hooks/use-resize-detector'
import type { StyleObject, ViewPosition, FnArgs } from '../helpers/types'
import type { ScrollToIndexOptions, OnVisibleItemsChange } from './types'
import { locale } from '../Locale'
import type {
  OnRefreshing,
  OnScroll,
  PullDirection,
  ScrollToOptions
} from '../ScrollView/types'
import {
  emitRefreshingValidator,
  emitScrollValidator
} from '../ScrollView/scrollView'

type Item = any

type RenderItem = {
  id: number | string
  index: number
  data: Item
  style?: StyleObject
  size: number
}

export default defineComponent({
  name: 'fx-flat-list',
  components: { ScrollView, LoadMore },
  props: {
    dataKey: {
      type: String,
      default: 'id'
    },
    data: {
      type: Array as PropType<Item[]>,
      required: true,
      default: () => [] as Item[]
    },
    getItemSize: {
      type: Function as PropType<(index: number) => number>
    },
    itemSize: {
      type: Number
    },
    // 横向
    initialHorizontal: {
      type: Boolean,
      default: false
    },
    // 预加载多少屏
    preLoad: {
      type: Number,
      default: 1.5
    },
    // 决定当距离内容最底部还有多远时触发endReached回调
    endReachedThreshold: {
      type: Number,
      default: 0.5
    },
    // 是否开启下拉刷新
    enablePullRefresh: {
      type: Boolean,
      default: false
    },
    // 展示加载更多图标
    lowerLoading: {
      type: Boolean,
      default: false
    },
    initialWaterfall: {
      type: Boolean,
      default: false
    },
    waterfallColCount: {
      type: Number,
      validator: (val: number) => {
        return isInteger(val) && isInNumberRange(val, 2, 5)
      },
      default: 2
    },
    // 认可展示项比例
    approvedItemVisibleScale: {
      type: Number,
      default: 0.5
    }
  },
  emits: {
    'end-reached': (payload: { distanceFromEnd: number }) =>
      payload && typeof payload.distanceFromEnd === 'number',
    scroll: emitScrollValidator,
    refreshing: emitRefreshingValidator,
    'visible-items-change': (payload: FnArgs<OnVisibleItemsChange>[0]) =>
      payload && Array.isArray(payload.items)
  },
  setup(props, { emit }) {
    const cols = ref<number[]>([])
    const list = ref<RenderItem[]>([])
    const renderList = ref<RenderItem[]>([])
    const scrollView = ref<InstanceType<typeof ScrollView>>()
    const listEl = ref<HTMLElement>()
    const poolEl = ref<HTMLElement>()

    const wrapperSize = ref(0)
    let scrollX = false
    let scrollY = true
    let horizontal = false

    if (props.initialWaterfall) {
      for (
        let i = 0, len = rangeInteger(props.waterfallColCount, 2, 5);
        i < len;
        i++
      ) {
        cols.value.push(0)
      }
    } else {
      cols.value.push(0)
      if (props.initialHorizontal) {
        horizontal = true
      }
    }

    if (horizontal) {
      scrollX = true
      scrollY = false
    }

    function getFixedSize(index: number) {
      if (typeof props.getItemSize === 'function') {
        try {
          const size = props.getItemSize(index)

          if (isNumber(size)) {
            return size
          }
        } catch (error) {
          console.error(
            new Exception(
              'The object.size value returned by getItemSize should be a Number type.',
              Exception.TYPE.PROP_ERROR,
              'FlatList'
            )
          )
        }
      } else if (isNumber(props.itemSize)) {
        return props.itemSize as number
      }

      return -1
    }

    function dataToList(data: Item[]) {
      const newList: RenderItem[] = []
      const dataKey = props.dataKey

      data.forEach((v, k) => {
        const oldItem = list.value[k]
        // 如果没有固定高度（或宽度），默认不回收，因为需要展示以获取当前高度
        let newItem: RenderItem = {
          id: v[dataKey],
          data: v,
          index: k,
          size: -1
        }

        if (oldItem && v.id === oldItem.id) {
          newItem = oldItem
          newItem.data = v
        } else {
          newItem.size = getFixedSize(newItem.index)
        }

        newList.push(newItem)
      })

      list.value = newList

      nextTick(() => {
        updateItemsSize()
        updateItems(null, 'dataChange')
      })
    }

    function getRootEl() {
      return scrollView.value?.$el as HTMLElement
    }

    function updateSize() {
      wrapperSize.value = getElSize(getRootEl())
    }

    function getElSize($el: HTMLElement) {
      return $el[scrollX ? 'offsetWidth' : 'offsetHeight']
    }

    function getScrollSize() {
      return getRootEl()[scrollX ? 'scrollLeft' : 'scrollTop']
    }

    const onRefreshing: OnRefreshing = (res, loadComplete) => {
      emit('refreshing', res, loadComplete)
    }

    function getItemStyle(
      offset: number,
      otherOffset: string,
      itemSize: number,
      otherSizePx: string
    ) {
      const style: StyleObject = {}

      // style.position = 'absolute'
      if (cols.value.length > 1) {
        style.height = itemSize + 'px'
        style.width = otherSizePx
        style.transform = `translate3d(${otherOffset}, ${offset}px, 0)`
      } else if (scrollX) {
        style.width = itemSize + 'px'
        style.height = otherSizePx
        style.transform = `translate3d(${offset}px, 0, 0)`
      } else {
        style.height = itemSize + 'px'
        style.width = otherSizePx
        style.transform = `translate3d(0, ${offset}px, 0)`
      }

      return style
    }

    let visibleIndexList: number[] = []

    /**
     * 重新计算列表元素
     * @param _scrollSize 滚动值
     * @param source 调用来源
     */
    function updateItems(_scrollSize: number | null, source?: string) {
      const scrollSize =
        _scrollSize == null ? getScrollSize() : (_scrollSize as number)
      const approvedItemVisibleScale = rangeNumber(
        props.approvedItemVisibleScale,
        0,
        1
      )

      const newList: RenderItem[] = []
      const newCols = cols.value.map(() => {
        return 0
      })
      const newVisibleIndexList: number[] = []

      list.value.forEach(item => {
        const itemSize = item.size

        if (itemSize === -1) {
          return
        }

        let offset = 0
        let colMinIndex = 0
        if (newCols.length > 1) {
          // 瀑布流
          offset = Math.min(...newCols)
          colMinIndex = newCols.indexOf(offset)
        } else {
          colMinIndex = 0
          offset = newCols[colMinIndex]
        }

        if (!isRecycled(offset, scrollSize)) {
          newList.push({
            id: item.id,
            index: item.index,
            data: item.data,
            style: getItemStyle(
              offset,
              `${colMinIndex * 100}%`,
              itemSize,
              newCols.length > 1 ? `calc(100% / ${newCols.length})` : '100%'
            ),
            size: itemSize
          })

          if (
            isVisible(offset, itemSize, scrollSize, approvedItemVisibleScale)
          ) {
            newVisibleIndexList.push(item.index)
          }
        }

        newCols[colMinIndex] += itemSize
      })

      cols.value = newCols
      renderList.value = newList

      // items change
      const payload: FnArgs<OnVisibleItemsChange>[0] = {
        items: []
      }
      newVisibleIndexList.forEach(index => {
        if (!visibleIndexList.includes(index)) {
          payload.items.push({
            index,
            visible: true
          })
        }
      })
      visibleIndexList.forEach(index => {
        if (!newVisibleIndexList.includes(index)) {
          payload.items.push({
            index,
            visible: false
          })
        }
      })
      visibleIndexList = newVisibleIndexList

      if (payload.items.length > 0) {
        payload.items.sort((a, b) => a.index - b.index)

        emit('visible-items-change', payload)
      }
    }

    function isRecycled(offset: number, scrollSize: number) {
      return !(
        offset >= scrollSize - wrapperSize.value * props.preLoad &&
        offset <= scrollSize + wrapperSize.value * (props.preLoad + 1)
      )
    }

    function isVisible(
      offset: number,
      itemSize: number,
      scrollSize: number,
      approvedItemVisibleScale: number
    ) {
      return (
        scrollSize <= offset + itemSize - itemSize * approvedItemVisibleScale &&
        scrollSize >=
          offset - wrapperSize.value + itemSize * approvedItemVisibleScale
      )
    }

    /**
     * 更新未固定高度的item
     */
    function updateItemsSize() {
      if (poolEl.value) {
        const $items = poolEl.value.children

        if ($items.length > 0) {
          const newList = list.value

          for (let i = 0; i < $items.length; i++) {
            const $item = $items[i] as HTMLElement
            const index = parseInt($item.dataset.index as string)

            newList[index].size = getElSize($item)
          }

          list.value = newList
        }
      }
    }

    const listStyles = computed(() => {
      const styles: StyleObject = {}

      styles[scrollX ? 'width' : 'height'] = Math.max(...cols.value) + 'px'

      return styles
    })

    /**
     * 主动通知列表发生了一个事件，以使列表重新计算可视区域
     */
    function recordInteraction() {
      updateItems(null, 'recordInteraction')
    }

    function onResize() {
      updateSize()
      updateItems(null, 'resize')
    }

    let scrollTimer: number
    let scrollCount = 0

    const onScroll: OnScroll = res => {
      const scrollSize = res[scrollX ? 'scrollLeft' : 'scrollTop']

      if (scrollCount > 10) {
        // 每轮询10次更新一次
        scrollCount = 0
        clearTimeout(scrollTimer)
        updateItems(scrollSize, 'scroll')
      } else {
        clearTimeout(scrollTimer)
        scrollTimer = window.setTimeout(() => {
          scrollCount = 0
          updateItems(scrollSize, 'scroll')
        }, 17)
        scrollCount++
      }

      // scroll 事件回调
      emit('scroll', res)
    }

    function onScrollToLower() {
      const $el = getRootEl()
      const distanceFromEnd = scrollX
        ? $el.scrollWidth - $el.scrollLeft - $el.offsetWidth
        : $el.scrollHeight - $el.scrollTop - $el.offsetHeight

      emit('end-reached', {
        distanceFromEnd
      })
    }

    /**
     * 滚动列表到指定的偏移（以像素为单位）
     */
    function scrollToOffset(options: number | ScrollToOptions) {
      scrollView.value?.scrollTo(options)
    }

    /**
     * 滑动到第index个元素
     */
    function scrollToIndex(options: number | ScrollToIndexOptions) {
      let index: number
      let animated = true
      let viewPosition: ViewPosition | undefined

      if (typeof options === 'number') {
        index = options
        options = {
          index
        }
      } else {
        index = options.index
        animated = !(options.animated === false)
        viewPosition = getViewPosition(options.viewPosition)
      }

      const newCols = cols.value.map(() => {
        return 0
      })

      for (
        let i = 0, len = Math.min(index, list.value.length - 1);
        i <= len;
        i++
      ) {
        const item = list.value[i]

        if (item.size === -1) {
          return
        }

        let offset = 0
        let colMinIndex = 0
        if (newCols.length > 1) {
          // 瀑布流
          offset = Math.min(...newCols)
          colMinIndex = newCols.indexOf(offset)
        } else {
          colMinIndex = 0
          offset = newCols[colMinIndex]
        }

        newCols[colMinIndex] += item.size

        if (i === len) {
          if (viewPosition === 0.5) {
            offset += item.size / 2 - wrapperSize.value / 2
          } else if (viewPosition === 1) {
            offset += item.size - wrapperSize.value
          }

          scrollToOffset({
            offset,
            animated
          })
        }
      }
    }

    /**
     * 滚动到底部
     */
    function scrollToEnd(animated = false) {
      const $root = getRootEl()

      if (!$root) {
        return
      }

      scrollToOffset({
        offset: scrollX ? $root.scrollWidth : $root.scrollHeight,
        animated
      })
    }

    const lowerThreshold = computed(() => {
      return wrapperSize.value * props.endReachedThreshold
    })

    const enablePullDirections = computed<PullDirection[]>(() => {
      if (props.enablePullRefresh) {
        return horizontal ? ['right'] : ['down']
      }

      return []
    })

    watch(
      () => props.data,
      val => {
        dataToList(val)
      },
      {
        deep: true
      }
    )

    const poolList = computed(() => {
      const newList: RenderItem[] = []

      list.value.forEach(item => {
        if (item.size === -1 && !renderList.value.some(v => v.id === item.id)) {
          newList.push(item)
        }
      })

      return newList
    })

    useResizeDetector(scrollView, onResize)

    onMounted(() => {
      updateSize()
      dataToList(props.data)
    })

    return {
      listEl,
      poolEl,
      poolList,
      renderList,
      listStyles,
      scrollView,
      scrollX,
      scrollY,
      horizontal,
      list,
      cols,
      lowerThreshold,
      enablePullDirections,
      onRefreshing,
      recordInteraction,
      onScroll,
      onScrollToLower,
      scrollTo: scrollToOffset,
      scrollToIndex,
      scrollToEnd,
      locale
    }
  }
})
</script>
