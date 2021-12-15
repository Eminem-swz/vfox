<template>
  <div>
    <fx-group title="Calendar">
      <fx-cell label="基础">
        <fx-calendar />
      </fx-cell>
      <fx-cell label="v-model today">
        <fx-calendar v-model="value" popup-show-confirm />
      </fx-cell>
      <fx-cell label="minDate/maxDate 11-11">
        <fx-calendar
          :min-date="new Date('2021-11-11')"
          :max-date="new Date('2022-11-11')"
          placeholder="选择日期"
          popup-show-close
        />
      </fx-cell>
      <fx-cell label="initialMode=range">
        <fx-calendar
          initialMode="range"
          v-model="rangeValue"
          @change="onChange"
          popup-show-close
        />
      </fx-cell>
      <fx-cell label="initialMode=range && allowSameDay">
        <fx-calendar
          initialMode="range"
          allowSameDay
          @change="onChange"
          popup-show-close
        />
      </fx-cell>
      <fx-cell label="禁用">
        <fx-calendar v-model="value" disabled />
      </fx-cell>
    </fx-group>
    <fx-group title="CalendarView">
      <div class="calendar-view-box">
        <div class="calendar-view-header">选择：{{ viewValue }}</div>
        <div class="calendar-view-body">
          <fx-calendar-view
            initialMode="single"
            v-model="viewValue"
            :formatter="formatter"
            :parser="parser"
            @select="onSelect"
          ></fx-calendar-view>
        </div>
      </div>
    </fx-group>
    <fx-group title="CalendarView initialMode=range">
      <div class="calendar-view-box">
        <div class="calendar-view-header">选择：{{ viewRangeValue }}</div>
        <div class="calendar-view-body">
          <fx-calendar-view
            initialMode="range"
            :first-day-of-week="1"
            v-model="viewRangeValue"
            :formatter="formatter"
            :parser="parser"
            @select="onSelect"
          ></fx-calendar-view>
        </div>
      </div>
    </fx-group>
    <fx-group title="CalendarPopup">
      <fx-cell label="v-modal +1day" isLink @click="addOneDay">{{
        popupValue
      }}</fx-cell>
      <fx-cell
        label="showConfirm=true"
        isLink
        @click="
          ;(confirmEvent = true),
            (popupShowConfirm = true),
            (popupShowClose = false),
            (popupVisible = true)
        "
      ></fx-cell>
      <fx-cell
        label="initialMode=range && max-range=5"
        isLink
        @click="popupRangeVisible = true"
      ></fx-cell>
    </fx-group>
    <fx-group title="CalendarPopup Event">
      <fx-cell
        label="confirm"
        isLink
        @click="
          ;(confirmEvent = true),
            (popupShowConfirm = false),
            (popupShowClose = false),
            (popupVisible = true)
        "
      ></fx-cell>
      <fx-cell
        label="visible-state-change"
        isLink
        @click="
          ;(visibleEvent = true),
            (popupShowConfirm = true),
            (popupShowClose = true),
            (popupVisible = true)
        "
      ></fx-cell>
    </fx-group>
    <fx-group title="API">
      <fx-cell label="showCalendar" isLink @click="onCallApi()"></fx-cell>
    </fx-group>
    <fx-calendar-popup
      v-model:visible="popupVisible"
      :title="title"
      :show-confirm="popupShowConfirm"
      :show-close="popupShowClose"
      v-model="popupValue"
      :formatter="formatter"
      :parser="parser"
      @confirm="onConfirm"
      @visible-state-change="onVisibleStateChange"
    />
    <fx-calendar-popup
      v-model:visible="popupRangeVisible"
      :title="title"
      initialMode="range"
      :max-range="5"
      :show-confirm="true"
      v-model="popupRangeValue"
      @confirm="onRangeConfirm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import dayjs from '@/helpers/day'
import { showToast } from '@/Toast'
import { showCalendar } from '@/Calendar'
import {
  CalendarChangeArgs,
  CalendarConfirmArgs,
  CalendarFormatter,
  CalendarParser,
  CalendarSelectArgs,
  PopupVisibleStateChangeArgs
} from '@/types'

export default defineComponent({
  name: 'ExpCalendar',
  setup() {
    const template = 'YYYY-MM-DD'

    const value = reactive([new Date()])
    const rangeValue = reactive([])
    const viewValue = ref('')
    const viewRangeValue = ref('')
    const popupValue = ref(dayjs().format(template))
    const popupRangeValue = reactive([])

    const popupVisible = ref(false)
    const popupRangeVisible = ref(false)
    const popupShowConfirm = ref(false)
    const popupShowClose = ref(false)
    const confirmEvent = ref(false)
    const visibleEvent = ref(false)

    const title = '日期选择'

    const formatter: CalendarFormatter = (valueArray, mode) => {
      if (mode === 'range') {
        return valueArray
          .map(date => {
            return dayjs(date).format(template)
          })
          .join(' ~ ')
      } else {
        return dayjs(valueArray[0]).format(template)
      }
    }

    const parser: CalendarParser = (value, mode) => {
      if (mode === 'range') {
        return (value as string).split(' ~ ').map(v => {
          return dayjs(v, template, true).toDate()
        })
      } else {
        return [dayjs(value as string, template, true).toDate()]
      }
    }

    function onVisibleStateChange(res: PopupVisibleStateChangeArgs) {
      // console.log(`${type} 事件触发`)

      if (visibleEvent.value) {
        console.log('event', res)
        showToast(`${res.state} 事件触发`)
      }

      if (res.state === 'hidden') {
        visibleEvent.value = false
        confirmEvent.value = false
      }
    }

    function onChange(res: CalendarChangeArgs) {
      console.log('change', res)
    }

    function onSelect(res: CalendarSelectArgs) {
      console.log('select', res)
    }

    function onConfirm(res: CalendarConfirmArgs) {
      if (confirmEvent.value) {
        console.log('event', res)
        showToast(`触发了确定事件`)
      }
    }

    function onRangeConfirm(res: CalendarConfirmArgs) {
      showToast(`选择了 ${res.label}`)
    }

    function onCallApi() {
      showCalendar({
        mode: 'range',
        showClose: true,
        success: res => {
          console.log('success', res)
          if (res.cancel) {
            showToast('取消了')
          } else {
            showToast(`选择了 ${res.detail.label}`)
          }
        }
      })
    }

    function addOneDay() {
      popupValue.value = dayjs(popupValue.value, template, true)
        .add(1, 'day')
        .format(template)
    }

    return {
      title,

      value,
      rangeValue,
      viewValue,
      viewRangeValue,
      popupValue,
      popupRangeValue,

      formatter,
      parser,

      popupVisible,
      popupRangeVisible,
      popupShowConfirm,
      popupShowClose,
      confirmEvent,
      visibleEvent,

      onVisibleStateChange,
      onChange,
      onSelect,
      onConfirm,
      onRangeConfirm,
      onCallApi,
      addOneDay
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.calendar {
  &-view {
    &-header {
      line-height: 32px;
      padding: 0 16px;
      font-size: 14px;
      color: $primary-color;
      border-bottom: 1px solid $border-color;
    }
  }
}
</style>
