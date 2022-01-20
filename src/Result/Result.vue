<template>
  <div class="fx-result" :class="['type--' + type2]">
    <div class="fx-result_header">
      <Icon class="fx-result_icon" :class="['type--' + type2]" :icon="icon" />
      <div class="fx-result_title" v-if="title">{{ title }}</div>
      <div class="fx-result_description" v-if="description">
        {{ description }}
      </div>
    </div>
    <slot></slot>
    <div class="fx-result_footer">
      <Button type="primary" @click="onConfirmClick">
        {{ confirmText || locale.resultConfirmText }}
      </Button>
      <Button v-if="showBack" type="default" @click="onCancelClick">
        {{ backText || locale.resultBackText }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
import { Icon } from '../Icon'
import { Button } from '../Button'
import {
  createEnumsValidator,
  emitEventValidator,
  getEnumsValue
} from '../helpers/validator'
import { locale } from '../Locale'

type ResultType = 'info' | 'warning' | 'success' | 'fail'

const iconMap = new Map<ResultType, string>([
  ['info', 'InfoCircleFilled'],
  ['warning', 'WarningFilled'],
  ['success', 'CheckCircleFilled'],
  ['fail', 'CloseCircleFilled']
])

const RESULT_TYPES: ResultType[] = ['info', 'warning', 'success', 'fail']

export default defineComponent({
  name: 'fx-result',
  components: { Icon, Button },
  props: {
    // 类型
    type: {
      type: String as PropType<ResultType>,
      validator: createEnumsValidator(RESULT_TYPES),
      default: null
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 描述
    description: {
      type: String,
      default: ''
    },
    // 展示返回按钮
    showBack: {
      type: Boolean,
      default: true
    },
    // 返回文本文本
    backText: {
      type: String
    },
    // 确认文本
    confirmText: {
      type: String
    }
  },
  emits: {
    confirm: emitEventValidator,
    back: emitEventValidator
  },
  setup(props, { emit }) {
    const type2 = computed(() => getEnumsValue(RESULT_TYPES, props.type))

    const icon = computed(() => iconMap.get(type2.value) as string)

    function onConfirmClick(e: Event) {
      emit('confirm', e)
    }

    function onCancelClick(e: Event) {
      emit('back', e)
    }

    return {
      type2,
      icon,
      onConfirmClick,
      onCancelClick,
      locale
    }
  }
})
</script>
