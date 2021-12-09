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
      ref="calendarView"
      @select="onSelect"
    />
    <div class="fx-calendar-popup_confirm" v-if="showConfirm">
      <Button
        type="primary"
        @click="onConfirmClick"
        :disabled="detail.value.length == 0"
        >确定
      </Button>
    </div>
  </Drawer>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { CalendarView } from '@/CalendarView'
import { Drawer } from '@/Drawer'
import { Button } from '@/Button'
import { getDefaultDetail, cloneDetail, commonProps } from '@/Calendar/calendar'
import { usePopupExtend } from '@/popup/use-popup'
import { popupExtendEmits, popupExtendProps } from '@/popup/popup'
import type { DetailObject } from './types'

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
  emits: [...popupExtendEmits, 'update:modelValue'],
  setup(props, ctx) {
    const calendarView = ref()
    const detail = reactive<DetailObject>(getDefaultDetail())

    const popup = usePopupExtend(ctx)

    function onSelect(_detail: DetailObject) {
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

      const confirmDetail = getDetail()

      popup.customConfirm(confirmDetail)
    }

    function getDetail() {
      return cloneDetail(detail)
    }

    function updateDetail(_detail: DetailObject) {
      detail.value.splice(0, Infinity, ..._detail.value)
      detail.valueArray.splice(0, Infinity, ..._detail.valueArray)
      detail.formatted = _detail.formatted
      detail.rangeCount = _detail.rangeCount
    }

    function updateValue(val: unknown): DetailObject {
      return calendarView.value
        ? calendarView.value.updateValue(val)
        : getDefaultDetail()
    }

    onMounted(
      () => calendarView.value && updateDetail(calendarView.value.getDetail())
    )

    return {
      ...popup,
      detail,
      calendarView,
      onSelect,
      onConfirmClick,
      updateValue
    }
  }
})
</script>
