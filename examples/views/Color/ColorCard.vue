<template>
  <fx-group title="设置主色">
    <fx-form>
      <fx-form-item name="color" label="颜色值" required>
        <fx-input v-model="primaryColor" focus placeholder="请输入颜色值" />
      </fx-form-item>
      <template #footer>
        <fx-button
          type="primary"
          form-type="submit"
          :color="(colors.length && primaryColor) || null"
          @click="onSubmitColor"
          >生成色卡</fx-button
        >
      </template>
    </fx-form>
  </fx-group>
  <fx-group title="色卡列表" v-if="colors.length">
    <fx-copy
      :text="color"
      class="exp-colorCard-item"
      :class="['color-' + (index + 1)]"
      :style="{ backgroundColor: color }"
      v-for="(color, index) in colors"
      :key="color"
      @success="showToast('复制成功')"
    >
      {{ color }}
    </fx-copy>
  </fx-group>
</template>

<script>
import { getColorGroups } from '@/helpers/color'
import { showToast } from '@/Toast'
import { showNotify } from '@/Notify'

export default {
  name: 'ExpColor',
  data() {
    return {
      primaryColor: '',
      colors: []
    }
  },
  methods: {
    onSubmitColor() {
      try {
        this.colors = getColorGroups(this.primaryColor)
      } catch (e) {
        showNotify({
          type: 'danger',
          title: e.message
        })
      }
    },
    showToast
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.exp-colorCard {
  &-item {
    display: block !important;
    height: 48px;
    line-height: 48px;
    color: white;
    text-align: right;
    font-size: 12px;
    padding: 0 16px;
    text-shadow: 0px 1px 2px rgba($color: #000, $alpha: 0.4);
  }
}
</style>
