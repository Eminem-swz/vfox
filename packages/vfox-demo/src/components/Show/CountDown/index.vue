<template>
  <fx-group title="基础用法">
    <fx-cell label="默认" class="exp-countDown-box">
      <fx-count-down v-model:timestamp="time"></fx-count-down>
    </fx-cell>
    <fx-cell label="显示天数" class="exp-countDown-box">
      <fx-count-down v-model:timestamp="time2" showDays></fx-count-down>
    </fx-cell>
  </fx-group>
  <fx-group title="Slot">
    <fx-cell label="中文显示" class="exp-countDown-box">
      <fx-count-down v-model:timestamp="time3">
        <template #default="countDown">
          {{ countDown.fullHours }}时{{ countDown.minutes }}分{{
            countDown.seconds
          }}秒
        </template>
      </fx-count-down>
    </fx-cell>
    <fx-cell label="毫秒" class="exp-countDown-box">
      <fx-count-down v-model:timestamp="time5">
        <template #default="countDown">
          {{ countDown.fullHours }}:{{ countDown.minutes }}:{{
            countDown.seconds
          }}.{{ countDown.milliseconds }}
        </template>
      </fx-count-down>
    </fx-cell>
    <fx-cell label="自定义风格" class="exp-countDown-box">
      <fx-count-down v-model:timestamp="time3">
        <template #default="countDown">
          <span class="exp-countDown-time-item">{{ countDown.fullHours }}</span
          ><span class="exp-countDown-time-item">{{ countDown.minutes }}</span
          ><span class="exp-countDown-time-item">{{ countDown.seconds }}</span>
        </template>
      </fx-count-down>
    </fx-cell>
  </fx-group>
  <fx-group title="时间监听">
    <fx-cell label="pause/resume/end" class="exp-countDown-box">
      <div class="exp-countDown-time-r">
        <fx-count-down
          v-model:timestamp="time4"
          :paused="paused"
          @pause="onPause"
          @resume="onResume"
          @end="onEnd"
        ></fx-count-down>
      </div>
      <fx-button @click="paused = !paused" size="small">{{
        paused ? '恢复' : '暂停'
      }}</fx-button>
      <fx-button @click="time4 = 100 * 1000" size="small" type="danger">
        重置
      </fx-button>
    </fx-cell>
  </fx-group>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  CountDownOnEnd,
  CountDownOnPause,
  CountDownOnResume,
  showToast
} from '@/index'

export default defineComponent({
  name: 'ExpCountDown',
  setup() {
    const paused = ref(false)

    const onPause: CountDownOnPause = e => {
      console.log(e)
      showToast('已暂停')
    }

    const onResume: CountDownOnResume = e => {
      console.log(e)
      showToast('继续计时')
    }

    const onEnd: CountDownOnEnd = e => {
      console.log(e)
      showToast('计时结束')
    }

    return {
      time: 300 * 1000,
      time2: 1.5 * 24 * 3600 * 1000,
      time3: 300 * 1000,
      time4: 100 * 1000,
      time5: 300 * 1000,
      paused,

      onPause,
      onResume,
      onEnd
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-countDown {
  &-box {
    .fx-button {
      flex-grow: 0;
    }
  }

  &-time-item {
    display: inline-flex;
    width: 24px;
    align-items: center;
    justify-content: center;
    background: $primary-color;
    color: #fff;
    margin-left: 5px;
  }

  &-time-r {
    margin-right: 16px;
  }
}
</style>
