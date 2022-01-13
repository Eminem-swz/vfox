<template>
  <div>
    <fx-group title="initialMode=date">
      <fx-date-picker-view
        initialMode="date"
        v-model="dateValue"
        @change="onChange"
      />
    </fx-group>
    <fx-group title="initialMode=time">
      <fx-date-picker-view
        initialMode="time"
        v-model="timeValue"
        @change="onChange"
      />
    </fx-group>
    <fx-group title="initialMode=datetime">
      <fx-date-picker-view
        initialMode="datetime"
        v-model="dateTimeValue"
        @change="onChange"
      />
    </fx-group>
    <fx-group title="minDate/maxDate">
      <div class="date-picker-view-box">
        <div class="date-picker-view-header">-5year ~ 5year</div>
        <div class="date-picker-view-body">
          <fx-date-picker-view
            initialMode="date"
            :minDate="maxDate"
            :maxDate="minDate"
            v-model="minMaxValue"
            @change="onChange"
          />
        </div>
      </div>
    </fx-group>
    <fx-group title="filter">
      <div class="date-picker-view-box">
        <div class="date-picker-view-header">秒步进5</div>
        <div class="date-picker-view-body">
          <fx-date-picker-view
            initialMode="datetime"
            :filter="filter"
            v-model="filterValue"
            @change="onChange"
          />
        </div>
      </div>
    </fx-group>
    <fx-group title="formatTemplate=YYYY年MM月DD日">
      <div class="date-picker-view-box">
        <div class="date-picker-view-header">v-model: {{ formatValue }}</div>
        <div class="date-picker-view-body">
          <fx-date-picker-view
            initialMode="date"
            formatTemplate="YYYY年MM月DD日"
            v-model="formatValue"
            @change="onChange"
          />
        </div>
      </div>
    </fx-group>
    <fx-group title="change 事件">
      <fx-date-picker-view
        initialMode="date"
        v-model="changeValue"
        @change="onChangeEvent"
      />
    </fx-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dayjs from '@/helpers/day'
import { showToast } from '@/Toast'
import type { DatePickerOptionFilter, SelectorModelValue } from '@/index'

export default defineComponent({
  name: 'ExpDatePickerView',
  setup() {
    const dateValue = ref('')
    const timeValue = ref('')
    const dateTimeValue = ref('')
    const minMaxValue = ref('')
    const formatValue = ref('')
    const filterValue = ref('')
    const changeValue = ref('')

    const minDate = dayjs().startOf('day').subtract(4, 'year').toDate()
    const maxDate = dayjs().startOf('day').add(5, 'year').toDate()

    const filter: DatePickerOptionFilter = (number, type) => {
      if (type === 'second' && number % 5 !== 0) {
        return false
      }

      return true
    }

    function onChange(e: SelectorModelValue) {
      console.log('event', e)
    }

    function onChangeEvent(e: SelectorModelValue) {
      onChange(e)

      showToast(`change: ${e}`)
    }

    return {
      dateValue,
      timeValue,
      dateTimeValue,
      minMaxValue,
      formatValue,
      filterValue,
      changeValue,

      minDate,
      maxDate,

      filter,
      onChange,
      onChangeEvent
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
