<template>
  <Drawer
    class="fx-picker-popup"
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
        :leftButtons="[{ text: locale.pickerCancelText, type: 'primary' }]"
        :rightButtons="[{ text: locale.pickerConfirmText, type: 'primary' }]"
        :iconOnly="false"
        @leftButtonClick="onHeaderLeftClick"
        @rightButtonClick="onHeaderRightClick"
      >
      </NavBar>
    </template>
    <PickerView
      ref="view"
      :options="options"
      :fieldNames="fieldNames"
      :formatter="formatter"
      :parser="parser"
    />
  </Drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PickerView } from '../PickerView'
import { Drawer } from '../Drawer'
import { NavBar } from '../NavBar'
import { usePopupExtend } from '../popup/use-popup'
import { popupExtendProps } from '../popup/popup'
import {
  pickerPopupProps,
  commonProps,
  pickerPopupEmits
} from '../Picker/picker'
import { usePickerPopup } from '../Picker/use-picker'
import { locale } from '../Locale'
import type { SelectorDetail } from '../SelectorField/types'

export default defineComponent({
  name: 'fx-picker-popup',
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
    const popup = usePopupExtend<SelectorDetail>(ctx)
    const pickerPopup = usePickerPopup(props, ctx, popup)

    return {
      ...popup,
      ...pickerPopup,
      locale
    }
  }
})
</script>
