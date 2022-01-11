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
        :leftButtons="[{ text: locale.datePickerCancelText, type: 'primary' }]"
        :rightButtons="[
          { text: locale.datePickerConfirmText, type: 'primary' }
        ]"
        :iconOnly="false"
        @leftButtonClick="onHeaderLeftClick"
        @rightButtonClick="onHeaderRightClick"
      >
      </NavBar>
    </template>
    <PickerView ref="view" :formatter="formatter" :parser="parser" />
  </Drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PickerView } from '@/PickerView'
import { Drawer } from '@/Drawer'
import { NavBar } from '@/NavBar'
import { usePopupExtend } from '@/popup/use-popup'
import { popupExtendProps } from '@/popup/popup'
import { pickerPopupProps, pickerPopupEmits } from '@/Picker/picker'
import { usePickerPopup } from '@/Picker/use-picker'
import { commonProps } from '@/DatePicker/date-picker'
import { useHandlers } from './use-date-picker'
import { locale } from '@/Locale'
import type { PickerDetail } from '../Picker/types'

export default defineComponent({
  name: 'fx-date-picker-popup',
  components: { PickerView, Drawer, NavBar },
  props: {
    ...popupExtendProps,
    ...commonProps,
    ...pickerPopupProps
  },
  emits: {
    ...pickerPopupEmits
  },
  setup(props, ctx) {
    useHandlers(props)

    const popup = usePopupExtend<PickerDetail>(ctx)
    const pickerPopup = usePickerPopup(props, ctx, popup)

    return {
      ...popup,
      ...pickerPopup,
      locale
    }
  }
})
</script>
