<template>
  <fx-group title="基础用法">
    <fx-notice-bar class="exp-noticeBar-item" :title="text1" />
    <fx-notice-bar class="exp-noticeBar-item" :title="text2" />
  </fx-group>
  <fx-group title="跑马灯">
    <fx-notice-bar class="exp-noticeBar-item" marquee :title="text2">
    </fx-notice-bar>
  </fx-group>
  <fx-group title="左侧图标">
    <fx-notice-bar
      class="exp-noticeBar-item"
      left-icon="SoundOutlined"
      :title="text1"
      marquee
    />
  </fx-group>
  <fx-group title="mode closable/clickable">
    <fx-notice-bar
      class="exp-noticeBar-item"
      mode="closable"
      v-model:visible="visible"
      :title="text1"
      @close-click="showToast('点击了关闭按钮')"
    />
    <fx-notice-bar
      class="exp-noticeBar-item"
      mode="clickable"
      :title="text1"
      @click="showToast('点击了通告栏')"
    />
  </fx-group>
  <fx-group title="type=success/primary/danger">
    <fx-notice-bar
      left-icon="SoundOutlined"
      class="exp-noticeBar-item"
      type="success"
      :title="text1"
    />
    <fx-notice-bar
      left-icon="SoundOutlined"
      class="exp-noticeBar-item"
      type="primary"
      :title="text1"
    />
    <fx-notice-bar
      left-icon="SoundOutlined"
      class="exp-noticeBar-item"
      type="danger"
      :title="text1"
    />
  </fx-group>
  <fx-group title="自定义颜色(#000000)">
    <fx-notice-bar
      class="exp-noticeBar-item"
      left-icon="SoundOutlined"
      :title="text1"
      color="#000000"
    />
  </fx-group>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { showToast } from '@/index'

export default defineComponent({
  name: 'ExpNoticeBar',
  setup() {
    const visible = ref(true)

    return {
      visible,
      text1: '简单不先于复杂，而是在复杂之后。',
      text2:
        '作为一个真正的程序员，首先应该尊重编程，热爱你所写下的程序，他是你的伙伴，而不是工具。',
      showToast
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.exp-noticeBar-item {
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
