<template>
  <div class="fx-pagination">
    <button
      class="fx-pagination_prev"
      :disabled="current <= 1"
      @click="onClick('prev')"
    >
      <slot name="prev">
        <Icon icon="LeftOutlined" />
      </slot>
    </button>
    <div class="fx-pagination_content">
      <slot :current="current" :total="total">{{ current }} / {{ total }}</slot>
    </div>
    <button
      class="fx-pagination_next"
      :disabled="current >= total"
      @click="onClick('next')"
    >
      <slot name="next">
        <Icon icon="RightOutlined" />
      </slot>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '../Icon'
import type { FnArgs } from '../helpers/types'
import type { OnChange } from './types'

export default defineComponent({
  name: 'fx-pagination',
  components: { Icon },
  props: {
    // 栅格占据的列数
    current: {
      type: Number,
      default: 1
    },
    // 栅格左侧的间隔格数
    total: {
      type: Number,
      default: 1
    }
  },
  emits: {
    'update:current': (current: number) => typeof current === 'number',
    change: (payload: FnArgs<OnChange>[0]) =>
      payload &&
      typeof payload.current === 'number' &&
      typeof payload.total === 'number'
  },
  setup(props, { emit }) {
    function onClick(type: string) {
      const newPageNum = type === 'next' ? props.current + 1 : props.current - 1

      emit('update:current', newPageNum)
      emit('change', {
        current: newPageNum,
        total: props.total
      })
    }

    return { onClick }
  }
})
</script>
