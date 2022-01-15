<template>
  <div class="fx-tab-view" :class="{ vertical }">
    <div class="fx-tab-view_header fx-horizontal-hairline">
      <SideTab
        v-if="vertical"
        :options="tabList"
        v-model:activeValue="activeIndex"
      />
      <Tab
        v-else
        :options="tabList"
        v-model:activeValue="activeIndex"
        :scroll-threshold="scrollThreshold"
      />
    </div>
    <div class="fx-tab-view_body" ref="listEl">
      <Swiper
        v-model:activeIndex="activeIndex"
        @change="onChange"
        @animated="onAnimated"
        ref="swiper"
        :initial-vertical="vertical"
      >
        <slot></slot>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, provide } from 'vue'
import { Tab } from '@/Tab'
import { SideTab } from '@/SideTab'
import { Swiper } from '@/Swiper'
import { useList } from '@/hooks/use-list'
import { scrollTo } from '@/helpers/dom'
import type {
  OnChange as SwiperOnChange,
  OnAnimated as SwiperOnAnimated
} from '../Swiper/types'
import { emitChangeValidator } from '@/Swiper/swiper'

export default defineComponent({
  name: 'fx-tab-view',
  components: { Tab, SideTab, Swiper },
  props: {
    // 纵向
    initialVertical: {
      type: Boolean,
      default: false
    },
    scrollThreshold: {
      type: Number,
      default: 4
    },
    backUpperWhenChange: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    change: emitChangeValidator,
    animated: emitChangeValidator
  },
  setup(props, { emit }) {
    const vertical = ref(!!props.initialVertical)
    const swiper = ref<InstanceType<typeof Swiper>>()
    const tabList = ref<
      {
        value: number
        label: string
        subLabel: string
      }[]
    >([])
    const activeIndex = ref(0)

    function resetItems($items: HTMLElement[]) {
      tabList.value = $items.map(($item, index) => {
        const { name, subName } = $item.dataset

        return {
          value: index,
          label: name || '',
          subLabel: subName || ''
        }
      })
    }

    const { listEl } = useList('tabView', resetItems)

    const onChange: SwiperOnChange = res => {
      emit('change', res)

      if (props.backUpperWhenChange) {
        // 切换时回到顶部

        if (!swiper.value) {
          return
        }

        const $viewItem = swiper.value?.getItemEl(res.activeIndex)

        if (!$viewItem) {
          return
        }

        $viewItem.scrollTop = 0
        $viewItem.scrollLeft = 0

        const $firstChild = $viewItem.firstElementChild

        if (
          $firstChild &&
          $firstChild.className.indexOf(`fx-scroll-view`) !== -1
        ) {
          // ScrollView
          scrollTo($firstChild as HTMLElement, { top: 0, left: 0 }, false)
        }
      }
    }

    const onAnimated: SwiperOnAnimated = res => {
      emit('animated', res)
    }

    function swipeTo(activeIndex: number) {
      swiper.value && swiper.value.swipeTo(activeIndex)
    }

    provide('fxTabViewVertical', vertical.value)

    return {
      activeIndex,
      tabList,
      vertical,
      listEl,
      swiper,
      onChange,
      onAnimated,
      swipeTo
    }
  }
})
</script>
