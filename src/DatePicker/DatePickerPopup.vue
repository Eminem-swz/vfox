<template>
  <Drawer
    class="fx-picker-popup fx-date-picker-popup"
    placement="bottom"
    :visible="visible"
    @visibleStateChange="onVisibleStateChange"
    @cancel="onCancel"
    @confirm="onConfirm"
    @update:visible="onUpdateVisible"
    ref="popup"
  >
    <template #header>
      <NavBar
        class="fx-drawer_header"
        :title="title"
        :leftButtons="[{ text: '取消', type: 'primary' }]"
        :rightButtons="[{ text: '确定', type: 'primary' }]"
        :iconOnly="false"
        @leftButtonClick="onHeaderLeftClick"
        @rightButtonClick="onHeaderRightClick"
      >
      </NavBar>
    </template>
    <PickerView ref="view" :handlers="handlers" />
  </Drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PickerView from '@/PickerView'
import Drawer from '@/Drawer'
import NavBar from '@/NavBar'
import { usePopupExtend } from '@/popup/use-popup'
import { popupExtendEmits, popupExtendProps } from '@/popup/popup'
import { pickerPopupProps, pickerViewEmits } from '@/Picker/picker'
import { usePickerPopup } from '@/Picker/use-picker'
import { datePickerProps } from '@/DatePicker/date-picker'
import { useDatePicker } from '@/DatePicker/use-date-picker'

export default defineComponent({
  name: 'fx-date-picker-popup',
  components: { PickerView, Drawer, NavBar },
  props: {
    ...popupExtendProps,
    ...datePickerProps,
    ...pickerPopupProps
  },
  emits: [...pickerViewEmits, ...popupExtendEmits],
  setup(props, ctx) {
    const { handlers } = useDatePicker(props)
    const popup = usePopupExtend(ctx)
    const pickerPopup = usePickerPopup(props, popup, handlers)

    return {
      ...popup,
      ...pickerPopup,
      handlers
    }
  }
})
</script>
