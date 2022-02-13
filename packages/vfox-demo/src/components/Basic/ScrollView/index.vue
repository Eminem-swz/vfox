<template>
  <fx-group title="垂直滚动">
    <fx-scroll-view class="exp-scrollView-box" scroll-y>
      <div class="exp-scrollView-h-400">
        <p>垂直滚动条</p>
        <p>scroll-y="true"</p>
      </div>
    </fx-scroll-view>
  </fx-group>
  <fx-group title="水平滚动">
    <fx-scroll-view class="exp-scrollView-box" scroll-x>
      <div class="exp-scrollView-w-750">
        <p>水平滚动条 scroll-x="true"</p>
      </div>
    </fx-scroll-view>
  </fx-group>
  <fx-group title="事件监听">
    <fx-scroll-view
      class="exp-scrollView-box"
      scroll-x
      scroll-y
      @scroll-to-upper="onScrollUpper"
      @scroll-to-lower="onScrollLower"
    >
      <div class="exp-scrollView-wh">
        <p>垂直水平滚动条</p>
        <p>scroll-y="true"</p>
        <p>scroll-x="true"</p>
        <p>监听到顶/底/最左/最右的事件</p>
      </div>
    </fx-scroll-view>
  </fx-group>
  <fx-group title="下拉刷新">
    <fx-scroll-view
      class="exp-scrollView-box"
      :enable-pull-directions="['down', 'right', 'up', 'left']"
      scroll-y
      @refreshing="onRefreshing"
    >
      <div class="exp-scrollView-h-400">
        <p>开启4个方向的拉动刷新</p>
        <p>scroll-y="true"</p>
        <p>pull-directions="['down', 'right', 'up', 'left']"</p>
        <p>由于有 scroll-y，上拉刷新要先滚到最底部</p>
      </div>
    </fx-scroll-view>
  </fx-group>
  <fx-group title="下拉刷新（自定义指示器）">
    <fx-scroll-view
      class="exp-scrollView-box"
      :enable-pull-directions="['down']"
      scroll-y
      @refreshing="onRefreshing"
    >
      <template #indicator="slotProps">
        <div class="exp-scrollView-indicator">
          方向：{{ slotProps.pullDirection }} 状态：{{
            slotProps.pullRefreshState
          }}
        </div>
      </template>
      <div class="exp-scrollView-h-400">
        <p>自定下拉义指示器</p>
        <p>scroll-y="true"</p>
        <p>pull-directions="['down']"</p>
      </div>
    </fx-scroll-view>
  </fx-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  ScrollViewOnRefreshing,
  ScrollViewOnScrollToLower,
  ScrollViewOnScrollToUpper,
  showToast
} from '@/index'

export default defineComponent({
  name: 'ExpScrollView',
  setup() {
    const onRefreshing: ScrollViewOnRefreshing = (res, done) => {
      setTimeout(() => {
        done()
      }, 2000)
    }

    const onScrollUpper: ScrollViewOnScrollToUpper = ({ direction }) => {
      showToast(`滚动到 ${direction}`)
    }

    const onScrollLower: ScrollViewOnScrollToLower = ({ direction }) => {
      showToast(`滚动到 ${direction}`)
    }

    return {
      onRefreshing,
      onScrollUpper,
      onScrollLower
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-scrollView {
  &-box {
    height: 200px;
  }

  &-h-400 {
    padding: 8px 16px;
    height: 400px;
    display: flex;
    flex-direction: column;
    border-top: 4px solid $primary-color;
    border-bottom: 4px solid $primary-color;
  }

  &-w-750 {
    border-left: 4px solid $primary-color;
    border-right: 4px solid $primary-color;
    padding: 12px 12px;
    width: 750px;
    height: 400px;
    display: flex;
  }

  &-wh {
    width: 750px;
    height: 400px;
    border: 4px solid $primary-color;
    padding: 8px 12px;
  }

  p {
    line-height: 24px;
    font-size: 14px;
    color: $title-color;
    margin: 4px 0;
  }

  &-indicator {
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 14px;
    color: $font-color;
  }
}
</style>
