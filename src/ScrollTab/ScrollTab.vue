<template>
  <div class="fx-scroll-tab">
    <div class="fx-scroll-tab_sidebar">
      <Sticky
        ref="sidebar"
        :offsetTop="stickyOffsetTop"
        :offsetBottom="stickyOffsetBottom"
      >
        <SideTab :options="tabList" v-model:activeValue="activeIndex" />
      </Sticky>
    </div>
    <div class="fx-scroll-tab_body">
      <StickyView
        :offsetTop="stickyOffsetTop"
        ref="body"
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
import { SideTab } from '@/SideTab'
import { Sticky } from '@/Sticky'
import { StickyView } from '@/StickyView'
import { sizeValidator } from '@/helpers/validator'
import type { ScrollToIndexOptions, ScrollToOptions } from '../helpers/types'
import type { StickyViewChangeArgs } from '@/StickyView/types'
import { emitChangeValidator } from '@/StickyView/stickyView'

export default defineComponent({
  name: 'fx-scroll-tab',
  components: { SideTab, Sticky, StickyView },
  props: {
    stickyOffsetTop: {
      validator: sizeValidator,
      default: 0
    },
    stickyOffsetBottom: {
      validator: sizeValidator,
      default: 0
    }
  },
  emits: {
    change: emitChangeValidator
  },
  setup(props, { emit }) {
    const sidebar = ref()
    const body = ref()
    const tabList = ref<
      {
        value: number
        label: string
      }[]
    >([])
    const activeIndex = ref(0)

    function resetContainer(containSelector: any) {
      sidebar.value && sidebar.value.resetContainer(containSelector)
      body.value && body.value.resetContainer(containSelector)
    }

    function onResetItems(items: { name: string; index: number }[]) {
      tabList.value = items.map(item => {
        return {
          value: item.index,
          label: item.name
        }
      })
    }

    function onChange(res: StickyViewChangeArgs) {
      emit('change', res)
    }

    /**
     * 滚动到第index个
     * @param index 索引
     */
    function scrollToIndex(index: number | ScrollToIndexOptions) {
      body.value && body.value.scrollToIndex(index)
    }

    /**
     * 滚到到指定位置
     * @param scrollTop 位置值
     */
    function scrollToOffset(scrollTop: number | ScrollToOptions) {
      body.value && body.value.scrollToOffset(scrollTop)
    }

    onMounted(() => resetContainer(document))

    return {
      sidebar,
      body,
      activeIndex,
      tabList,
      onChange,
      scrollToIndex,
      scrollToOffset,
      resetContainer,
      onResetItems
    }
  }
})
</script>
