<template>
  <div class="fx-copy" @click="onCopy">
    <input type="text" :value="text" class="fx-copy_input" ref="inputEl" />
    <div class="fx-copy_box">
      <slot>{{ locale.copyText }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { locale } from '@/Locale'

export default defineComponent({
  name: 'fx-copy',
  props: {
    // 需要复制的文本
    text: {
      type: String,
      required: true
    }
  },
  emits: {
    success: (payload: string) => typeof payload === 'string',
    error: (e: Error) => e instanceof Error
  },
  setup(props, { emit }) {
    const inputEl = ref<HTMLInputElement>()

    function onCopy() {
      try {
        const $el = inputEl.value as HTMLInputElement

        $el.select()
        document.execCommand('Copy')

        emit('success', $el.value ?? '')
      } catch (error) {
        emit('error', error as Error)
      }
    }

    return {
      inputEl,
      onCopy,
      locale
    }
  }
})
</script>
