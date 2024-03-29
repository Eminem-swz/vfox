<template>
  <div class="fx-time-ago">
    {{ timeAgo }}
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  ref,
  watch
} from 'vue'
import dayjs from '../helpers/day'
import type { Dayjs } from 'dayjs'
import { format } from 'timeago.js'
import { addTimer } from '../helpers/timer'
import { locale } from '../Locale'

export default defineComponent({
  name: 'fx-time-ago',
  props: {
    // 倒计时时间
    time: {
      type: [Date, String, Number],
      default: null
    },
    // 格式化模板
    formatTemplate: {
      type: String,
      default: null
    },
    // 自动更新的间隔，单位：秒
    interval: {
      type: Number,
      default: 60
    }
  },
  setup(props) {
    const timeAgo = ref('')

    function getDate() {
      let djs: Dayjs | null = null

      if (props.time instanceof Date || typeof props.time === 'number') {
        djs = dayjs(props.time)
      } else if (typeof props.time === 'string' && props.formatTemplate) {
        djs = dayjs(props.time, props.formatTemplate)
      }

      if (djs && djs.isValid()) {
        return djs.toDate()
      }

      return null
    }

    function update() {
      const d = getDate()

      timeAgo.value =
        d == null ? '' : format(d, locale.value.lang.replace('-', '_'))
    }

    watch([() => props.time, () => props.formatTemplate], update, {
      immediate: true
    })

    let removeTimer: () => void
    watch(
      () => props.interval,
      val => {
        removeTimer && removeTimer()
        removeTimer = addTimer(update, val)
      }
    )

    watch(locale, () => update())

    onBeforeMount(() => (removeTimer = addTimer(update, props.interval)))
    onBeforeUnmount(() => removeTimer && removeTimer())

    return {
      timeAgo
    }
  }
})
</script>
