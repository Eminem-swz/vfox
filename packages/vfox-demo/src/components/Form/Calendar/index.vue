<template>
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
    <div class="exp-calendarView-box">
      <div class="exp-calendarView-header">选择：{{ viewValue }}</div>
      <div class="exp-calendarView-body">
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
    <div class="exp-calendarView-box">
      <div class="exp-calendarView-header">选择：{{ viewRangeValue }}</div>
      <div class="exp-calendarView-body">
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
    @visibleStateChange="onVisibleStateChange"
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dayjs from 'dayjs'
import {
  showToast,
  showCalendar,
  SelectorModelValue,
  CalendarOnConfirm,
  CalendarValueFormatter,
  CalendarValueParser,
  CalendarOnSelect,
  PopupOnVisibleStateChange
} from '@/index'

export default defineComponent({
  name: 'ExpCalendar',
  setup() {
    const template = 'YYYY-MM-DD'

    const value = ref([new Date()])
    const rangeValue = ref([])
    const viewValue = ref('')
    const viewRangeValue = ref('')
    const popupValue = ref(dayjs().format(template))
    const popupRangeValue = ref([])

    const popupVisible = ref(false)
    const popupRangeVisible = ref(false)
    const popupShowConfirm = ref(false)
    const popupShowClose = ref(false)
    const confirmEvent = ref(false)
    const visibleEvent = ref(false)

    const title = '日期选择'

    const formatter: CalendarValueFormatter = (valueArray, mode) => {
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

    const parser: CalendarValueParser = (value, mode) => {
      if (mode === 'range') {
        return (value as string).split(' ~ ').map(v => {
          return dayjs(v, template, true).toDate()
        })
      } else {
        return [dayjs(value as string, template, true).toDate()]
      }
    }

    const onVisibleStateChange: PopupOnVisibleStateChange = res => {
      if (visibleEvent.value) {
        console.log('change', res)
        showToast(`${res.state} 事件触发`)
      }

      if (res.state === 'hidden') {
        visibleEvent.value = false
        confirmEvent.value = false
      }
    }

    function onChange(res: SelectorModelValue) {
      console.log('change', res)
    }

    const onSelect: CalendarOnSelect = res => {
      console.log('select', res)
    }

    const onConfirm: CalendarOnConfirm = res => {
      if (confirmEvent.value) {
        console.log('confirm', res)
        showToast(`触发了确定事件`)
      }
    }

    const onRangeConfirm: CalendarOnConfirm = res => {
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

.exp-calendarView {
  &-header {
    line-height: 32px;
    padding: 0 16px;
    font-size: 14px;
    color: $primary-color;
    border-bottom: 1px solid $border-color;
  }
}
</style>
