<template>
  <fx-group title="设置主题颜色">
    <fx-form @validate-submit="onCreateColor" :rules="rules">
      <fx-form-item name="primary" label="primary 色" required>
        <fx-input modelValue="#0f4c82" />
      </fx-form-item>
      <fx-form-item name="success" label="success 色" required>
        <fx-input modelValue="#3c9052" />
      </fx-form-item>
      <fx-form-item name="warning" label="warning 色" required>
        <fx-input modelValue="#bb9445" />
      </fx-form-item>
      <fx-form-item name="danger" label="danger 色" required>
        <fx-input modelValue="#b1262d" />
      </fx-form-item>
      <div class="exp-custom-theme-submit">
        <fx-button type="primary" form-type="submit">生成主题</fx-button>
      </div>
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
      rules: {
        primary: [colorValidator],
        success: [colorValidator],
        warning: [colorValidator],
        danger: [colorValidator]
      },

      themeCode: ''
    }
  },
  methods: {
    showToast,
    onCreateColor(e) {
      if (!e.valid) {
        return
      }

      const code = [
        getThemeColorCode('primary', e.value.primary, true),
        getThemeColorCode('success', e.value.success, true),
        getThemeColorCode('warning', e.value.warning, true),
        getThemeColorCode('danger', e.value.danger, true)
      ].join('')

      this.themeCode = code
      console.log(code)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-custom-theme {
  &-submit {
    display: flex;
    padding: 12px 16px;
  }

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
