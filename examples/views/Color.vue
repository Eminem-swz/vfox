<template>
  <fx-group title="设置色彩">
    <div class="exp-color-input">
      <fx-input placeholder="请输入HEX颜色值" v-model="primaryColor" />
    </div>
    <div class="exp-color-button" @click="onSubmitColor">
      <fx-button type="default">生成色卡</fx-button>
    </div>
  </fx-group>
  <fx-group title="色卡列表">
    <div
      class="exp-color-item"
      :class="['color-' + (index + 1)]"
      :style="{ backgroundColor: color }"
      v-for="(color, index) in colors"
      :key="color"
    >
      {{ color }}
    </div>
  </fx-group>
</template>

<script>
import { getColor } from './color'

export default {
  name: 'ExpColor',
  data() {
    return {
      primaryColor: '#1890ff',
      colors: []
    }
  },
  methods: {
    onSubmitColor() {
      this.colors = []

      for (let i = 1; i <= 10; i++) {
        this.colors.push(`${getColor(this.primaryColor, i)}`)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.exp-color {
  &-button {
    margin-top: 12px;
    display: flex;
  }
  &-item {
    height: 48px;
    line-height: 48px;
    color: white;
    text-align: right;
    font-size: 12px;
    padding: 0 16px;

    &.color-1,
    &.color-2,
    &.color-3,
    &.color-4,
    &.color-5 {
      color: black;
    }
  }
}
</style>
