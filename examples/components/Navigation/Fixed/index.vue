<template>
  <fx-group title="基本用法">
    <fx-fixed>
      <div class="exp-fixed-box">
        <fx-button type="primary">固定布局</fx-button>
      </div>
    </fx-fixed>
  </fx-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExpFixed'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.exp-fixed {
  &-box {
    display: flex;
    padding: 12px 16px;
    display: flex;
  }
}
</style>
