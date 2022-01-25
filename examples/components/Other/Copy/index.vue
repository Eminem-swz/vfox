<template>
  <fx-group title="基本用法">
    <div class="exp-copy-pad">
      <fx-copy class="exp-copy-box" text="复制的文本">
        <fx-button type="primary">点击复制</fx-button>
      </fx-copy>
    </div>
  </fx-group>
  <fx-group title="事件监听">
    <div class="exp-copy-pad">
      <fx-copy
        class="exp-copy-box"
        text="复制的文本2"
        @success="onSuccess"
        @error="onError"
      >
        <fx-button type="primary">点击复制</fx-button>
      </fx-copy>
    </div>
  </fx-group>
</template>

<script lang="ts">
import { showToast } from '@/index'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExpCopy',
  setup() {
    const onSuccess = (text: string) => {
      showToast({
        title: `${text}`,
        type: 'success'
      })
    }

    const onError = (error: Error) => {
      showToast({
        title: error.message,
        type: 'fail'
      })
    }

    return {
      onSuccess,
      onError
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.exp-copy {
  &-box {
    display: flex !important;
    flex: 1;
  }

  &-pad {
    padding: 12px 16px;
  }
}
</style>
