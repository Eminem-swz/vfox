<template>
  <div class="fx-calendar-view">
    <div class="fx-calendar-view_header">
      <div class="fx-calendar-view_weekdays">
        <span
          class="fx-calendar-view_weekday"
          :class="{ highlight: weekDay === '0' || weekDay === '6' }"
          v-for="weekDay in weekDays"
          :key="weekDay"
          >{{ locale.calendarWeekDayTexts[weekDay] }}
        </span>
      </div>
    </div>
    <div class="fx-calendar-view_body">
      <template v-for="(month, monthIndex) in months" :key="month.caption">
        <div class="fx-calendar-view_month-caption">
          {{ month.caption }}
        </div>
        <div
          class="fx-calendar-view_days"
          :data-index="monthIndex"
          @click="onDaysClick"
        >
          <div
            class="fx-calendar-view_day"
            :class="{
              disabled: day.state === 'disabled',
              selected:
                day.state === 'selected' ||
                day.state === 'startSelected' ||
                day.state === 'endSelected',
              'in-range': mode === 'range' && day.state === 'selected'
            }"
            v-for="(day, dayIndex) in month.days"
            :key="dayIndex"
            :data-index="dayIndex"
          >
            <span
              v-if="day.topText"
              class="fx-calendar-view_day-top-text"
              :class="{ highlight: day.topHighlight }"
              >{{ day.topText }}</span
            >
            {{ day.text }}
            <span
              v-if="day.bottomText"
              class="fx-calendar-view_day-bottom-text"
              :class="{ highlight: day.bottomHighlight }"
              >{{ day.bottomText }}</span
            >
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import dayjs from '@/helpers/day'
import type { Dayjs } from 'dayjs'
import { isInNumberRange, isEmpty, isSameArray } from '@/helpers/util'
import { showToast } from '@/Toast'
import {
  DEFAULT_MONTH_RANGE,
  MODE_NAMES,
  commonProps,
  printError,
  calendarDetailValidator
} from '@/Calendar/calendar'
import { getEnumsValue } from '@/helpers/validator'
import type { DayInfo } from './types'
import { useHandlers } from '@/Calendar/use-calendar'
import { pickerValueEmits } from '@/Picker/picker'
import { locale } from '@/Locale'

type WeekDay = '0' | '1' | '2' | '3' | '4' | '5' | '6'

interface SelectDay {
  dateString: string
  timestamp: number
  monthIndex: number
  dayIndex: number
  state?: string
}

interface Month {
  caption: string
  monthString: string
  days: DayInfo[]
  startDay: number
}

const defaultWeekDays: WeekDay[] = ['0', '1', '2', '3', '4', '5', '6']

export default defineComponent({
  name: 'fx-calendar-view',
  props: { ...commonProps },
  emits: {
    ...pickerValueEmits,
    select: calendarDetailValidator
  },
  setup(props, { emit }) {
    const mode = getEnumsValue(MODE_NAMES, props.initialMode)

    const { formatter, parser } = useHandlers(props, { mode })

    const weekDays = ref<WeekDay[]>([])
    const months = reactive<Month[]>([])

    let start: SelectDay = getDefaultSelectDay()
    let end: SelectDay = getDefaultSelectDay()

    function getDefaultSelectDay() {
      return {
        dateString: '',
        timestamp: 0,
        monthIndex: 0,
        dayIndex: 0
      }
    }

    function getSelectedInfo(timestamp: number): SelectDay | null {
      for (let i = 0; i < months.length; i++) {
        for (let j = 0; j < months[i].days.length; j++) {
          const day = months[i].days[j]

          if (day.state !== 'disabled') {
            if (timestamp === day.timestamp) {
              return {
                dateString: day.dateString,
                timestamp,
                monthIndex: i,
                dayIndex: j
              }
            }
          }
        }
      }

      return null
    }

    function updateValue(val: unknown) {
      return updateOriginalValue(parser(val))
    }

    function updateOriginalValue(timeArr: number[]) {
      if (!isSameArray(timeArr, [start.timestamp, end.timestamp])) {
        if (timeArr.length === 0) {
          setSelected('start', null)
          setSelected('end', null)
          updateStates()
        } else if (mode === 'range') {
          const _start = getSelectedInfo(timeArr[0])
          const _end = getSelectedInfo(timeArr[1])

          if (_start && _end) {
            const { rangeCount, hasDisabled } = getRangeInfo(_start, _end)

            if (hasDisabled) {
              printError('The range of "modelValue" contains disabled days.')
            } else if (rangeCount > props.maxRange) {
              printError(
                `The range of "modelValue" contains ${rangeCount} days, no more than ${props.maxRange} days.`
              )
            } else {
              start = _start as SelectDay
              end = _end as SelectDay
              updateStates()
            }
          } else {
            printError(
              'The range of "modelValue" is not in the optional range.'
            )
          }
        } else {
          const select = getSelectedInfo(timeArr[0])

          if (select) {
            start = select
            setSelected('end', null)
            updateStates()
          } else {
            printError(
              'The range of "modelValue" is not in the optional range.'
            )
          }
        }
      }

      return getDetail()
    }

    function setSelected(name: string, day: SelectDay | null) {
      if (day) {
        name === 'start' ? (start = day) : (end = day)
      } else {
        name === 'start'
          ? (start = getDefaultSelectDay())
          : (end = getDefaultSelectDay())
      }
    }

    function getState(timestamp: number) {
      let state = ''

      if (
        (mode === 'range' &&
          timestamp >= start.timestamp &&
          timestamp <= end.timestamp) ||
        timestamp === start.timestamp
      ) {
        state = 'selected'
      }
      if (mode === 'range' && state == 'selected') {
        if (timestamp === end.timestamp) {
          state = 'endSelected'
        } else if (timestamp === start.timestamp) {
          state = 'startSelected'
        }
      }

      return state
    }

    function getDayInfo(day: Dayjs, extend: { state: string }): DayInfo {
      const dateString = day.format('YYYY-MM-DD')
      const state = extend.state

      let dayInfo: DayInfo = {
        topHighlight: false,
        topText:
          state === 'startSelected'
            ? locale.value.calendarSelectedStartText
            : state === 'endSelected'
            ? locale.value.calendarSelectedEndText
            : '',
        state,
        bottomHighlight: false,
        bottomText: '',
        text: day.date().toString(),
        dateString,
        timestamp: day.valueOf()
      }

      if (props.dayHandler) {
        dayInfo.date = day.toDate()
        dayInfo = props.dayHandler(Object.assign(dayInfo, extend))
        delete dayInfo.date
      }

      if (dayInfo.state === 'disabled' && !extend.state) {
        extend.state = 'disabled'
      }

      return Object.assign(dayInfo, extend, {
        dateString,
        timestamp: day.valueOf()
      })
    }

    function getFirstDayOfWeek() {
      return isInNumberRange(props.firstDayOfWeek, 0, 6)
        ? Math.round(props.firstDayOfWeek)
        : 0
    }

    function getStartMonth(day: Dayjs) {
      const month: Month = {
        caption: day.format(locale.value.calendarMonthCaption),
        monthString: day.format('YYYY-MM'),
        days: [],
        startDay: day.date()
      }

      let day2 = day.startOf('month')

      // 头部周偏移占位
      for (let i = 0, len = day2.day() - getFirstDayOfWeek(); i < len; i++) {
        month.days.push({
          cover: true,
          text: '',
          state: 'disabled',
          dateString: '',
          timestamp: 0
        })
      }

      while (day2.date() < month.startDay) {
        month.days.push(getDayInfo(day2, { state: 'disabled' }))
        day2 = day2.add(1, 'day')
      }

      return month
    }

    function updateWeekDays() {
      let i = getFirstDayOfWeek()
      const newWeekDays: WeekDay[] = []

      let weekDay: WeekDay
      while (newWeekDays.length < 7) {
        weekDay = defaultWeekDays[i]
        newWeekDays.push(weekDay)
        i = (i + 1) % 7
      }

      weekDays.value = newWeekDays
    }

    let minTimestamp = 0
    let maxTimestamp = 0

    function updateOptions() {
      if (props.minDate instanceof Date) {
        minTimestamp = dayjs(props.minDate).startOf('day').valueOf()
      } else {
        minTimestamp = dayjs().startOf('day').valueOf()
      }

      if (props.maxDate instanceof Date) {
        if (props.maxDate.getTime() < minTimestamp) {
          printError(
            'The value of "maxDate" cannot be less than the value of "minDate".'
          )
          maxTimestamp = dayjs(minTimestamp)
            .add(DEFAULT_MONTH_RANGE, 'month')
            .valueOf()
        } else {
          maxTimestamp = dayjs(props.maxDate).startOf('day').valueOf()
        }
      } else {
        maxTimestamp = dayjs(minTimestamp)
          .add(DEFAULT_MONTH_RANGE, 'month')
          .valueOf()
      }

      updateWeekDays()

      const maxDay = dayjs(maxTimestamp)
      const _months = []

      let day = dayjs(minTimestamp)
      let monthKey = day.month()
      let month = getStartMonth(day)

      while (!day.isAfter(maxDay)) {
        if (day.month() !== monthKey) {
          monthKey = day.month()
          _months.push(month)
          month = getStartMonth(day)
        }

        const dayInfo = getDayInfo(day, {
          state: getState(day.valueOf())
        })

        // if (
        //   dayInfo.state === 'startSelected' ||
        //   (mode === 'single' && dayInfo.state === 'selected')
        // ) {
        //   setSelected('start', dayInfo, _months.length, month.days.length)
        // } else if (dayInfo.state === 'endSelected') {
        //   setSelected('end', dayInfo, _months.length, month.days.length)
        // }

        month.days.push(dayInfo)
        day = day.add(1, 'day')
      }

      // 补上最后一个月结尾的天数
      while (day.month() === monthKey) {
        month.days.push(
          getDayInfo(day, {
            state: 'disabled'
          })
        )

        day = day.add(1, 'day')
      }

      _months.push(month)

      months.splice(0, Infinity, ..._months)
    }

    function dayInfo2SelectDay(
      day: DayInfo,
      monthIndex: number,
      dayIndex: number
    ): SelectDay {
      return {
        dateString: day.dateString,
        timestamp: day.timestamp,
        state: day.state,
        monthIndex,
        dayIndex
      }
    }

    function onDaysClick(e: Event) {
      const target = e.target as HTMLElement
      let $day: HTMLElement | null = null

      if (target.tagName === 'SPAN') {
        $day = target.parentElement as HTMLElement
      } else if (target !== e.currentTarget) {
        $day = target
      }

      if (!$day) {
        return
      }

      const monthIndex = parseInt(
        (e.currentTarget as HTMLElement).dataset.index as string
      )
      const dayIndex = parseInt($day.dataset.index as string)
      const day = months[monthIndex].days[dayIndex]

      if (day.state === 'disabled') {
        return
      }

      if (mode === 'range') {
        // 范围
        if ((start.dateString && end.dateString) || !start.dateString) {
          setSelected('end', null)
        } else {
          if (
            day.timestamp > start.timestamp ||
            (props.allowSameDay && day.timestamp === start.timestamp)
          ) {
            // 范围
            const { rangeCount, hasDisabled } = getRangeInfo(start, {
              monthIndex,
              dayIndex
            })

            if (!hasDisabled) {
              if (rangeCount > props.maxRange) {
                showToast(
                  locale.value.calendarMaxRangeTips.replace(
                    '{{maxRange}}',
                    props.maxRange.toString()
                  )
                )
              } else {
                setSelected('end', dayInfo2SelectDay(day, monthIndex, dayIndex))
                // this.rangeCount = rangeCount
                updateStates()
                onSelect()
              }
              return
            }
          }
        }
      } else {
        // 单选
        setSelected('start', dayInfo2SelectDay(day, monthIndex, dayIndex))
        // this.rangeCount = 1
        updateStates()
        onSelect()
        return
      }

      // 设置开始时间
      setSelected('start', dayInfo2SelectDay(day, monthIndex, dayIndex))
      updateStates()
    }

    function updateStates() {
      for (let i = 0; i < months.length; i++) {
        for (let j = 0; j < months[i].days.length; j++) {
          const day = months[i].days[j]

          if (day.state !== 'disabled') {
            const newState = getState(day.timestamp)

            if (newState !== day.state) {
              months[i].days[j] = getDayInfo(dayjs(day.timestamp), {
                state: newState
              })
            }
          }
        }
      }
    }

    function onSelect() {
      emit('update:modelValue', getDetail().value)
      emit('change', getDetail().value)
      emit('select', getDetail())
    }

    function getDetail() {
      return formatter([start.timestamp, end.timestamp])
    }

    /**
     * 判断所选范围内有没有 disabled
     */
    function getRangeInfo(
      start: { monthIndex: number; dayIndex: number },
      end: { monthIndex: number; dayIndex: number }
    ) {
      let hasDisabled = false
      let rangeCount =
        start.monthIndex === end.monthIndex && start.dayIndex === end.dayIndex
          ? 1
          : 2

      for (let i = start.monthIndex; i <= end.monthIndex; i++) {
        for (
          let j = i === start.monthIndex ? start.dayIndex + 1 : 0,
            len = i === end.monthIndex ? end.dayIndex : months[i].days.length;
          j < len;
          j++
        ) {
          const day = months[i].days[j]

          if (!day.cover) {
            if (day.state === 'disabled') {
              hasDisabled = true
            } else {
              rangeCount++
            }
          }
        }
      }

      return {
        hasDisabled,
        rangeCount
      }
    }

    let updateOptionsTimer: number

    function reset() {
      clearTimeout(updateOptionsTimer)
      updateOptionsTimer = window.setTimeout(() => {
        setSelected('start', null)
        setSelected('end', null)
        updateOptions()
        const values = [start.timestamp, end.timestamp]

        updateOriginalValue(values)
      }, 17)
    }

    watch([() => props.minDate, () => props.maxDate], reset, {
      deep: true
    })

    watch(
      () => props.modelValue,
      val => updateValue(val)
    )

    watch(locale, () => updateOptions())

    updateOptions()
    !isEmpty(props.modelValue) && updateValue(props.modelValue)

    return {
      mode,
      weekDays,
      months,
      onDaysClick,
      getDetail,
      updateValue,
      locale
    }
  }
})
</script>
