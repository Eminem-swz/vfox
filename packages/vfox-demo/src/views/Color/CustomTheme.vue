<template>
  <fx-group title="设置主题颜色">
    <fx-form>
      <fx-form-item name="primary" label="primary 色" required>
        <fx-input v-model="primary" />
      </fx-form-item>
      <fx-form-item name="success" label="success 色" required>
        <fx-input v-model="success" />
      </fx-form-item>
      <fx-form-item name="warning" label="warning 色" required>
        <fx-input v-model="warning" />
      </fx-form-item>
      <fx-form-item name="danger" label="danger 色" required>
        <fx-input v-model="danger" />
      </fx-form-item>
      <template #footer>
        <fx-button type="primary" @click="onCreateColor">生成主题</fx-button>
      </template>
    </fx-form>
    <div class="exp-custom-theme-code" v-if="themeCode">
      <pre>
      {{ themeCode }}
      </pre>
      <fx-copy @success="showToast('复制成功')" :text="themeCode"
        >复制代码
      </fx-copy>
    </div>
  </fx-group>
</template>

<script>
import { getColorGroups } from '@/helpers/color'
import { showToast } from '@/Toast'
import { showNotify } from '@/Notify'

function getThemeColorCode(name, color, isDefault = true) {
  const colors = getColorGroups(color)
  const noDefault = isDefault ? '' : ' !default'

  return `
$${name}-color-2: ${colors[2]}${noDefault};
$${name}-color-5: ${colors[5]}${noDefault};
$${name}-color-6: ${colors[6]}${noDefault};
$${name}-color-7: ${colors[7]}${noDefault};
$${name}-color: $${name}-color-6;
`
}

export default {
  name: 'ExpCustomTheme',
  data() {
    return {
      primary: '#0f4c82',
      success: '#276a3b',
      warning: '#bb9445',
      danger: '#b1262d',

      themeCode: ''
    }
  },
  methods: {
    showToast,
    onCreateColor() {
      try {
        const code = [
          getThemeColorCode('primary', this.primary, true),
          getThemeColorCode('success', this.success, true),
          getThemeColorCode('warning', this.warning, true),
          getThemeColorCode('danger', this.danger, true)
        ].join('')

        this.themeCode = code
        console.log(code)
      } catch (e) {
        showNotify({
          type: 'danger',
          title: e.message
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-custom-theme {
  &-code {
    position: relative;
    background-color: $background-color;
    margin: 0;

    .fx-copy {
      position: absolute;
      right: 0;
      top: 0;
      padding: 4px 8px;
      color: $font-color;
    }

    pre {
      margin: 0;
      padding: 12px 16px;
      color: $title-color;
    }
  }
}
</style>
