<template>
  <div class="fx-copy" @click="onCopy">
    <input type="text" :value="text" class="fx-copy_input" ref="input" />
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
  setup(props, { emit }) {
    const input = ref<HTMLInputElement>()

    function onCopy(e: Event) {
      try {
        const $el = input.value as HTMLInputElement

        $el.select()
        document.execCommand('Copy')

        emit('success', {
          text: $el.value
        })
      } catch (error) {
        emit('error', error)
      }

      emit(e.type, e)
    }

    return {
      input,
      onCopy,
      locale
    }
  }
})
</script>
