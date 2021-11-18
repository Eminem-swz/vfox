<template>
  <Drawer
    class="fx-picker-popup"
    placement="bottom"
    :visible="visible"
    @visible-state-change="onVisibleStateChange"
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
      :formatString="formatString"
      :initialSeparator="initialSeparator"
      :options="options"
      :fieldNames="fieldNames"
      :handlers="handlers"
    />
  </Drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PickerView from '@/PickerView'
import Drawer from '@/Drawer'
import NavBar from '@/NavBar'
import { viewEmits } from '@/Picker/view'
import { commonProps } from '@/Picker/props'
import {
  usePopupExtend,
  popupExtendEmits,
  popupExtendProps
} from '@/hooks/popup'
import { usePickerPopup, pickerPopupProps } from '@/Picker/popup'

export default defineComponent({
  name: 'fx-picker-popup',
  components: { PickerView, Drawer, NavBar },
  props: {
    ...popupExtendProps,
    ...commonProps,
    ...pickerPopupProps
  },
  emits: [...viewEmits, ...popupExtendEmits],
  setup(props, ctx) {
    const popup = usePopupExtend(ctx)
    const pickerPopup = usePickerPopup(props, popup, {})

    return {
      ...popup,
      ...pickerPopup
    }
  }
})
</script>
