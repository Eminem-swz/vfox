<template>
  <div>
    <fx-group title="DatePicker initialMode">
      <fx-form-item name="date-picker" label="日期 date">
        <fx-date-picker
          initialMode="date"
          v-model="dateValue"
          @change="onChange"
        />
      </fx-form-item>
      <fx-form-item name="date-picker" label="时间 time">
        <fx-date-picker
          initialMode="time"
          v-model="timeValue"
          @change="onChange"
        />
      </fx-form-item>
      <fx-form-item name="date-picker" label="日期时间 datetime">
        <fx-date-picker
          initialMode="datetime"
          v-model="dateTimeValue"
          @change="onChange"
        />
      </fx-form-item>
      <fx-form-item name="date-picker" label="分秒 minute-second">
        <fx-date-picker initialMode="minute-second" @change="onChange" />
      </fx-form-item>
      <fx-form-item name="date-picker" label="时分 hour-minute">
        <fx-date-picker initialMode="hour-minute" @change="onChange" />
      </fx-form-item>
      <fx-form-item name="date-picker" label="天时 day-hour">
        <fx-date-picker initialMode="day-hour" @change="onChange" />
      </fx-form-item>
      <fx-form-item name="date-picker" label="月日 month-day">
        <fx-date-picker initialMode="month-day" @change="onChange" />
      </fx-form-item>
      <fx-form-item name="date-picker" label="月日时 month-day-hour">
        <fx-date-picker initialMode="month-day-hour" @change="onChange" />
      </fx-form-item>
      <fx-form-item name="date-picker" label="月日时分 month-day-hour-minute">
        <fx-date-picker
          initialMode="month-day-hour-minute"
          @change="onChange"
        />
      </fx-form-item>
      <fx-form-item name="date-picker" label="年月 year-month">
        <fx-date-picker initialMode="year-month" @change="onChange" />
      </fx-form-item>
      <fx-form-item name="date-picker" label="年月日时 year-month-day-hour">
        <fx-date-picker initialMode="year-month-day-hour" @change="onChange" />
      </fx-form-item>
      <fx-form-item
        name="date-picker"
        label="年月日时分 year-month-day-hour-minute"
      >
        <fx-date-picker
          initialMode="year-month-day-hour-minute"
          @change="onChange"
        />
      </fx-form-item>
    </fx-group>
    <fx-group title="DatePicker minDate & maxDate">
      <fx-form-item name="date-picker" label="-5year ~ 5year">
        <fx-date-picker
          initialMode="date"
          :minDate="maxDate"
          :maxDate="minDate"
          v-model="minMaxValue"
          @change="onChange"
        />
      </fx-form-item>
    </fx-group>
    <fx-group title="DatePicker filter">
      <fx-form-item name="date-picker" label="秒步进5">
        <fx-date-picker
          initialMode="datetime"
          :filter="filter"
          v-model="filterValue"
          @change="onChange"
        />
      </fx-form-item>
    </fx-group>
    <fx-group title="DatePicker formatTemplate">
      <fx-form-item name="date-picker" label="YYYY年MM月DD日">
        <fx-date-picker
          initialMode="date"
          formatTemplate="YYYY年MM月DD日"
          v-model="formatValue"
          @change="onChange"
        />
      </fx-form-item>
    </fx-group>
    <fx-group title="DatePicker disabled">
      <fx-form-item name="date-picker" label="禁用">
        <fx-date-picker
          initialMode="date"
          disabled
          :modelValue="disableValue"
          @change="onChange"
        />
      </fx-form-item>
    </fx-group>
    <fx-group title="DatePickerPopup">
      <fx-cell
        label="基础"
        isLink
        @click="visible = true"
        :content="popupValue"
      ></fx-cell>
    </fx-group>
    <fx-group title="DatePickerPopup Event">
      <fx-cell
        label="change"
        isLink
        @click=";(changeEvent = true), (visible = true)"
      ></fx-cell>
      <fx-cell
        label="confirm/cancel"
        isLink
        @click=";(clickEvent = true), (visible = true)"
      ></fx-cell>
      <fx-cell
        label="visible-state-change"
        isLink
        @click=";(visibleEvent = true), (visible = true)"
      ></fx-cell>
    </fx-group>
    <fx-group title="API">
      <fx-cell label="showDatePicker" isLink @click="onCallApi"></fx-cell>
    </fx-group>

    <fx-date-picker-popup
      initialMode="date"
      formatTemplate="YYYY年MM月DD日"
      v-model:visible="visible"
      :title="title"
      v-model="popupValue"
      @change="onChange"
      @confirm="onConfirm"
      @cancel="onCancel"
      @visibleStateChange="onVisibleStateChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dayjs from '@/helpers/day'
import { showToast } from '@/Toast'
import { showDatePicker } from '@/DatePicker'
import {
  PopupVisibleStateChangeArgs,
  DatePickerFilter,
  DatePickerChangeArgs,
  DatePickerCancelArgs,
  DatePickerConfirmArgs
} from '@/types'

export default defineComponent({
  name: 'ExpDatePicker',
  setup() {
    const title = 'DatePicker'

    const dateValue = ref('')
    const timeValue = ref('')
    const dateTimeValue = ref('')
    const minMaxValue = ref('')
    const formatValue = ref('')
    const filterValue = ref('')
    const disableValue = ref(new Date())
    const popupValue = ref('')

    const minDate = dayjs().startOf('day').subtract(4, 'year').toDate()
    const maxDate = dayjs().startOf('day').add(5, 'year').toDate()

    const visible = ref(false)

    const clickEvent = ref(false)
    const changeEvent = ref(false)
    const visibleEvent = ref(false)

    const filter: DatePickerFilter = (number, type) => {
      if (type === 'second' && number % 5 !== 0) {
        return false
      }

      return true
    }

    function onVisibleStateChange(res: PopupVisibleStateChangeArgs) {
      if (visibleEvent.value) {
        console.log('event', res)
        showToast(`${res.state} 事件触发`)
      }

      if (res.state === 'hidden') {
        clickEvent.value = false
        visibleEvent.value = false
        changeEvent.value = false
      }
    }

    function onChange(res: DatePickerChangeArgs) {
      if (changeEvent.value) {
        console.log('event', res)
        showToast(`值改为 ${res.label}`)
      }
    }

    function onConfirm(res: DatePickerConfirmArgs) {
      if (clickEvent.value) {
        console.log('event', res)
        showToast(`点击确定按钮`)
      }
    }

    function onCancel(res: DatePickerCancelArgs) {
      if (clickEvent.value) {
        console.log('event', res)

        if (res.source === 'cancelClick') {
          showToast('点击了取消按钮')
        } else if (res.source === 'maskClick') {
          showToast('点击了蒙层')
        }
      }
    }

    function onCallApi() {
      showDatePicker({
        title,
        success: res => {
          console.log(res)
          if (res.cancel) {
            showToast('取消了')
          } else {
            showToast(`选择了 ${res.detail.label}`)
          }
        }
      })
    }

    return {
      title,

      dateValue,
      timeValue,
      dateTimeValue,
      minMaxValue,
      formatValue,
      filterValue,
      disableValue,

      filter,

      minDate,
      maxDate,

      visible,
      popupValue,

      clickEvent,
      visibleEvent,
      changeEvent,

      onConfirm,
      onCancel,
      onChange,
      onVisibleStateChange,
      onCallApi
    }
  }
})
</script>

<style lang="scss">
@import '@/style/var.scss';

.date-picker-view {
  &-header {
    text-align: center;
    font-size: 17px;
    line-height: 24px;
    color: $title-color;
    padding: 12px 16px;
  }
}
</style>
