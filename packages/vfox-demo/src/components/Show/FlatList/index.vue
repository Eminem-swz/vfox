<template>
  <fx-group title="基础用法">
    <fx-flat-list class="exp-flatList-box" :data="list" dataKey="id">
      <template #default="{ data }">
        <div class="exp-flatList-item">
          {{ data.text }}
        </div>
      </template>
    </fx-flat-list>
  </fx-group>
  <fx-group title="水平列表">
    <fx-flat-list
      class="exp-flatList-box"
      :data="list"
      :itemSize="140"
      dataKey="id"
      initialHorizontal
    >
      <template #default="{ data }">
        <div class="exp-flatList-item">
          {{ data.text }}
        </div>
      </template>
    </fx-flat-list>
  </fx-group>
  <fx-group title="开启下拉刷新">
    <fx-flat-list
      class="exp-flatList-box"
      :data="list"
      :itemSize="50"
      dataKey="id"
      :enablePullRefresh="true"
      @refreshing="onRefreshing"
    >
      <template #default="{ data }">
        <div class="exp-flatList-item">
          {{ data.text }}
        </div>
      </template>
    </fx-flat-list>
  </fx-group>
  <fx-group title="展示底部加载更多提示">
    <fx-flat-list
      class="exp-flatList-box"
      :data="loadList"
      dataKey="id"
      :lowerLoading="lowerLoading"
      @endReached="onLoadMore"
    >
      <template #default="{ data }">
        <div class="exp-flatList-item">
          {{ data.text }}
        </div>
      </template>
    </fx-flat-list>
  </fx-group>
  <fx-group title="分割线（#separator）">
    <fx-flat-list class="exp-flatList-box" :data="list" dataKey="id">
      <template #default="{ data }">
        <div class="exp-flatList-item">
          {{ data.text }}
        </div>
      </template>
      <template #separator="{ index }">
        <div
          class="exp-flatList-item-separator"
          v-if="index < list.length - 1"
        ></div>
      </template>
    </fx-flat-list>
  </fx-group>
  <fx-group title="瀑布流">
    <fx-flat-list
      class="exp-flatList-box"
      :data="list"
      :getItemSize="getItemSize"
      dataKey="id"
      initialWaterfall
      :waterfallColCount="3"
      ref="demo"
    >
      <template #default="{ data, index }">
        <div class="exp-flatList-item" :class="['color-' + (index % 10)]">
          {{ data.text }}
        </div>
      </template>
    </fx-flat-list>
  </fx-group>
  <fx-group title="事件监听（end-reached/visible-items-change）">
    <fx-flat-list
      class="exp-flatList-box"
      :data="list"
      :itemSize="50"
      dataKey="id"
      @endReached="onEndReached"
      @visibleItemsChange="onVisibleItemsChange"
    >
      <template #default="{ data }">
        <div class="exp-flatList-item">
          {{ data.text }}
        </div>
      </template>
    </fx-flat-list>
  </fx-group>
  <fx-group title="Slot empty">
    <fx-flat-list
      class="exp-flatList-box"
      :data="[]"
      :itemSize="50"
      dataKey="id"
    >
      <template #empty>
        <fx-empty description="暂无列表"></fx-empty>
      </template>
    </fx-flat-list>
  </fx-group>
  <fx-group title="Method">
    <fx-flat-list
      class="exp-flatList-box"
      :data="list"
      dataKey="id"
      ref="flatList"
    >
      <template #default="{ data, index }">
        <div class="exp-flatList-item" :class="['color-' + (index % 10)]">
          {{ data.text }}
        </div>
      </template>
    </fx-flat-list>
    <fx-cell
      label="scrollToIndex({ index: 49 })"
      isLink
      @click="scrollToIndex(49)"
    ></fx-cell>
    <fx-cell
      label="同上加 viewPosition=0.5"
      isLink
      @click="scrollToIndex(49, 0.5)"
    ></fx-cell>
    <fx-cell
      label="同上加 viewPosition=1"
      isLink
      @click="scrollToIndex(49, 1)"
    ></fx-cell>
    <fx-cell
      label="scrollTo({ offset: 200 })"
      isLink
      @click="scrollTo(200)"
    ></fx-cell>
    <fx-cell
      label="scrollToEnd(true)"
      isLink
      @click="scrollToEnd(true)"
    ></fx-cell>
  </fx-group>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import {
  FlatList,
  FlatListOnEndReached,
  FlatListOnRefreshing,
  FlatListOnVisibleItemsChange,
  showToast,
  ViewPosition
} from '@/index'

interface ExpList {
  id: number
  text: string
}

export default defineComponent({
  name: 'ExpFlatList',
  setup() {
    const list = reactive<ExpList[]>([])

    for (let i = 0; i < 100; i++) {
      list.push({
        id: i + 1,
        text: `第 ${i + 1} 个列表`
      })
    }

    const loadList = reactive<ExpList[]>([])

    function getLoadList() {
      for (let i = loadList.length, len = loadList.length + 10; i < len; i++) {
        loadList.push({
          id: i + 1,
          text: `第 ${i + 1} 个列表`
        })
      }
    }

    getLoadList()

    const lowerLoading = ref(true)
    const flatList = ref<InstanceType<typeof FlatList>>()

    function scrollToIndex(index: number, viewPosition: ViewPosition = 0) {
      flatList.value?.scrollToIndex({ index, viewPosition })
    }

    function scrollTo(offset: number) {
      flatList.value?.scrollTo({ offset })
    }

    function scrollToEnd(animated: boolean) {
      flatList.value?.scrollToEnd(animated)
    }

    const onRefreshing: FlatListOnRefreshing = (res, done) => {
      setTimeout(() => {
        showToast({
          title: `刷新成功`,
          type: 'success'
        })
        done()
      }, 2000)
    }

    const onEndReached: FlatListOnEndReached = res => {
      console.log('end-reached', res)
      showToast(`到底了`)
    }

    const onLoadMore: FlatListOnEndReached = res => {
      console.log('end-reached', res)

      const max = 100

      if (loadList.length >= max) {
        return
      }

      setTimeout(() => {
        getLoadList()
        showToast({
          title: `加载成功`,
          type: 'success'
        })

        if (loadList.length >= max) {
          lowerLoading.value = false
        }
      }, 500)
    }

    const onVisibleItemsChange: FlatListOnVisibleItemsChange = ({ items }) => {
      console.log('visible-items-change', items)

      items.forEach(({ index, visible }) => {
        index === 49 && showToast(`index: ${index}, visable: ${visible}`)
      })
    }

    return {
      list,
      loadList,
      lowerLoading,
      getItemSize(index: number) {
        return 50 + (index % 10) * 2
      },

      flatList,
      scrollToIndex,
      scrollTo,
      scrollToEnd,
      onRefreshing,
      onEndReached,
      onLoadMore,
      onVisibleItemsChange
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-flatList {
  &-box {
    height: 275px;
  }

  &-item {
    min-height: 50px;
    height: 100%;
    padding: 0 16px;
    font-size: 17px;
    color: $title-color;
    display: flex;
    align-items: center;

    @for $i from 0 through 9 {
      &.color-#{$i} {
        background-color: rgb($i * 25, $i * 25, $i * 25);
      }
    }

    &-separator {
      height: 1px;
      width: 100%;
      background-color: $divider-color;
    }
  }
}
</style>
