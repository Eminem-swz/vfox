<template>
  <Drawer
    class="fx-calendar-popup"
    placement="bottom"
    :visible="visible"
    :title="title"
    :showClose="showClose"
    @visibleStateChange="onVisibleStateChange"
    @confirm="onConfirm"
    @cancel="onCancel"
    @update:visible="onUpdateVisible"
    ref="popup"
  >
    <CalendarView
      :modelValue="modelValue"
      :minDate="minDate"
      :maxDate="maxDate"
      :initialMode="initialMode"
      :allowSameDay="allowSameDay"
      :maxRange="maxRange"
      :dayHandler="dayHandler"
      :firstDayOfWeek="firstDayOfWeek"
      :formatter="formatter"
      :parser="parser"
      ref="calendarView"
      @select="onSelect"
    />
    <div class="fx-calendar-popup_confirm" v-if="showConfirm">
      <Button type="primary" @click="onConfirmClick" :disabled="valueSize == 0"
        >确定
      </Button>
    </div>
  </Drawer>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { CalendarView } from '@/CalendarView'
import { Drawer } from '@/Drawer'
import { Button } from '@/Button'
import { getDefaultDetail, commonProps } from '@/Calendar/calendar'
import { usePopupExtend } from '@/popup/use-popup'
import { popupExtendEmits, popupExtendProps } from '@/popup/popup'
import { pickerPopupEmits } from '@/Picker/picker'
import { cloneDetail } from '@/Picker/util'
import type { CalendarDetail } from './types'

export default defineComponent({
  name: 'fx-calendar-popup',
  components: { CalendarView, Drawer, Button },
  props: {
    ...commonProps,
    ...popupExtendProps,
    title: {
      type: String,
      default: null
    },
    showConfirm: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  emits: [...popupExtendEmits, ...pickerPopupEmits],
  setup(props, ctx) {
    const calendarView = ref()
    const valueSize = ref(0)

    let detail: CalendarDetail = getDefaultDetail()

    const popup = usePopupExtend(ctx)

    function onSelect(_detail: CalendarDetail) {
      updateDetail(_detail)

      if (!props.showConfirm) {
        confirm()
      }
    }

    function onConfirmClick() {
      confirm()
    }

    function confirm() {
      if (!calendarView.value) {
        return
      }

      updateDetail(calendarView.value.getDetail())

      popup.emit('update:modelValue', getDetail().value)
      popup.emit('change', getDetail().value)
      popup.customConfirm(getDetail())
    }

    function getDetail() {
      return cloneDetail(detail)
    }

    function updateDetail(_detail: CalendarDetail) {
      detail = _detail
      valueSize.value = detail.valueArray.length
    }

    function updateValue(val: unknown): CalendarDetail {
      return calendarView.value
        ? calendarView.value.updateValue(val)
        : getDefaultDetail()
    }

    onMounted(
      () => calendarView.value && updateDetail(calendarView.value.getDetail())
    )

    return {
      ...popup,
      valueSize,
      calendarView,
      onSelect,
      onConfirmClick,
      updateValue
    }
  }
})
</script>
