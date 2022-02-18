<template>
  <div class="fx-scroll-tab">
    <div class="fx-scroll-tab_sidebar">
      <Sticky
        ref="side"
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
import { SideTab } from '../SideTab'
import { Sticky } from '../Sticky'
import { StickyView } from '../StickyView'
import { sizeValidator } from '../helpers/validator'
import type { ScrollToIndexOptions, ScrollToOptions } from '../StickyView/types'
import type { OnChange as StickyViewOnChange } from '../StickyView/types'
import { emitChangeValidator } from '../StickyView/stickyView'
import type { DomSelector } from '../helpers/types'

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
    const side = ref<InstanceType<typeof Sticky>>()
    const body = ref<InstanceType<typeof StickyView>>()
    const tabList = ref<
      {
        value: number
        label: string
      }[]
    >([])
    const activeIndex = ref(0)

    function resetContainer(containSelector: DomSelector) {
      side.value?.resetContainer(containSelector)
      body.value?.resetContainer(containSelector)
    }

    function onResetItems(items: { name: string; index: number }[]) {
      tabList.value = items.map(item => {
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
      body.value && body.value.scrollToIndex(index)
    }

    /**
     * 滚到到指定位置
     * @param scrollTop 位置值
     */
    function scrollTo(scrollTop: number | ScrollToOptions) {
      body.value && body.value.scrollTo(scrollTop)
    }

    onMounted(() => resetContainer(document))

    return {
      side,
      body,
      activeIndex,
      tabList,
      onChange,
      scrollToIndex,
      scrollTo,
      resetContainer,
      onResetItems
    }
  }
})
</script>
