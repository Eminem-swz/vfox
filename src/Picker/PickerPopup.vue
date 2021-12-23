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
        :leftButtons="[{ text: '取消', type: 'primary' }]"
        :rightButtons="[{ text: '确定', type: 'primary' }]"
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
import { PickerView } from '@/PickerView'
import { Drawer } from '@/Drawer'
import { NavBar } from '@/NavBar'
import { usePopupExtend } from '@/popup/use-popup'
import { popupExtendEmits, popupExtendProps } from '@/popup/popup'
import {
  pickerPopupProps,
  pickerPopupEmits,
  commonProps
} from '@/Picker/picker'
import { usePickerPopup } from '@/Picker/use-picker'

export default defineComponent({
  name: 'fx-picker-popup',
  components: { PickerView, Drawer, NavBar },
  props: {
    ...popupExtendProps,
    ...commonProps,
    ...pickerPopupProps
  },
  emits: [...popupExtendEmits, ...pickerPopupEmits],
  setup(props, ctx) {
    const popup = usePopupExtend(ctx)
    const pickerPopup = usePickerPopup(props, popup)

    return {
      ...popup,
      ...pickerPopup
    }
  }
})
</script>
