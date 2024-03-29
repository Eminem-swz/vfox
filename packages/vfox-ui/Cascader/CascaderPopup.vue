<template>
  <Drawer
    class="fx-cascader-popup"
    placement="bottom"
    :visible="visible"
    @visibleStateChange="onVisibleStateChange"
    @confirm="onConfirm"
    @cancel="onCancel"
    @update:visible="onUpdateVisible"
    ref="popup"
  >
    <template #header>
      <Tab
        class="fx-cascader_tabs"
        :options="tabs"
        :scrollThreshold="0"
        v-model:activeValue="tabIndex"
      />
    </template>
    <div class="fx-cascader_groups">
      <div
        class="fx-cascader_group fx-vertical-hairline"
        v-for="(list, listIndex) in cols"
        :key="listIndex"
        :style="{
          zIndex: tabIndex == listIndex ? 2 : 1
        }"
      >
        <ul class="fx-cascader_list" :data-index="listIndex">
          <li
            class="fx-cascader_item fx-horizontal-hairline"
            :class="{
              selected: item.selected,
              disabled: item.disabled
            }"
            v-for="(item, index) in list"
            :key="item.value"
            :data-index="index"
            @click="onItemClick($event, item)"
          >
            <span class="fx-cascader_item-text">
              {{ item.label }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </Drawer>
</template>

<script lang="ts">
import { defineComponent, ref, inject, watch, nextTick } from 'vue'
import { Drawer } from '../Drawer'
import { Tab } from '../Tab'
import { isSameArray } from '../helpers/util'
import { usePopupExtend } from '../popup/use-popup'
import { popupExtendProps } from '../popup/popup'
import type { ColRow, PickerHandlers } from '../Picker/types'
import type { SelectorValue, SelectorDetail } from '../SelectorField/types'
import type { OptionItem as TabOptionItem } from '../Tab/types'
import { pickerPopupEmits, commonProps, mergeHandlers } from '../Picker/picker'
import { usePickerView } from '../Picker/use-picker'
import { locale } from '../Locale'

interface SelectedTabs {
  label: string | null
  value: number | string
}

export default defineComponent({
  name: 'fx-cascader-popup',
  components: { Drawer, Tab },
  props: {
    ...popupExtendProps,
    ...commonProps
  },
  emits: {
    ...pickerPopupEmits
  },
  setup(props, ctx) {
    const selectedTabs = ref<SelectedTabs[]>([])
    const tabs = ref<TabOptionItem[]>([])
    const tabIndex = ref(0)
    let tempTabIndex = -1

    const popup = usePopupExtend<SelectorDetail>(ctx)

    function onItemClick(e: Event, item: ColRow) {
      if (item.disabled) {
        return
      }

      const selecteds = getValuesByRow(item)

      if (item.hasChildren) {
        update(selecteds)
      } else {
        if (!isSameArray(currentValues.value, selecteds)) {
          onSelect(selecteds)
          onChange()
        } else {
          onSelect(selecteds)
        }
      }
    }

    function onSelect(selecteds: SelectorValue[]) {
      const confirmDetail = updateOriginalValue(selecteds)
      popup.customConfirm(confirmDetail)
    }

    const {
      currentValues,
      getDetail,
      cols,
      update,
      getValuesByRow,
      updateValue,
      updateOriginalValue,
      onChange
    } = usePickerView(props, ctx, {
      name: 'cascader',
      afterUpdate(valueArray, labelArray, cols) {
        selectedTabs.value = []

        labelArray.forEach((v, k) => {
          selectedTabs.value.push({
            label: v,
            value: k
          })
        })

        if (labelArray.length < cols.length) {
          selectedTabs.value.push({
            label: null,
            value: selectedTabs.value.length
          })
        }

        tempTabIndex = selectedTabs.value.length - 1
      },
      handlers: mergeHandlers(
        {
          formatter: props.formatter,
          parser: props.parser
        },
        inject<Partial<PickerHandlers>>('fxPickerHandlers', {})
      )
    })

    watch(
      [locale, selectedTabs],
      ([newLocale, newOptions]) => {
        tabs.value = newOptions.map(v => {
          return {
            label: v.label == null ? newLocale.cascaderDefaultTitle : v.label,
            value: v.value
          }
        })

        nextTick(() => {
          if (tempTabIndex !== -1) {
            tabIndex.value = tempTabIndex
            tempTabIndex = -1
          }
        })
      },
      {
        deep: true,
        immediate: true
      }
    )

    return {
      tabIndex,
      tabs,
      ...popup,
      cols,
      getDetail,
      updateValue,
      onItemClick
    }
  }
})
</script>
