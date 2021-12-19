<template>
  <fx-group title="设置主色">
    <fx-form @validate-submit="onSubmitColor" :rules="rules">
      <fx-form-item name="color" label="颜色值" required>
        <fx-input v-model="primaryColor" />
      </fx-form-item>
      <div class="exp-color-submit">
        <fx-button
          type="primary"
          form-type="submit"
          :color="(colors.length && primaryColor) || null"
          >生成色卡</fx-button
        >
      </div>
    </fx-form>
  </fx-group>
  <fx-group title="色卡列表" v-if="colors.length">
    <fx-copy
      :text="color"
      class="exp-color-item"
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
import { Color, getColorGroups } from '@/helpers/color'
import { showToast } from '@/Toast'

function colorValidator(rule, value) {
  const errors = []

  if (!value) {
    errors.push(new Error(`${rule.field} is required.`))
  } else {
    try {
      Color(value)
    } catch (e) {
      errors.push(e)
    }
  }

  return errors
}

export default {
  name: 'ExpColor',
  data() {
    return {
      rules: {
        color: [colorValidator]
      },

      primaryColor: '',
      colors: []
    }
  },
  methods: {
    onSubmitColor(e) {
      if (!e.valid) {
        return
      }

      this.colors = getColorGroups(this.primaryColor)
    },
    showToast
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-color {
  &-submit {
    display: flex;
    padding: 12px 16px;
  }

  &-item {
    display: block !important;
    height: 48px;
    line-height: 48px;
    color: white;
    text-align: right;
    font-size: 12px;
    padding: 0 16px;
    text-shadow: 0px 1px 2px rgba($color: $black-color, $alpha: 0.4);
  }
}
</style>
