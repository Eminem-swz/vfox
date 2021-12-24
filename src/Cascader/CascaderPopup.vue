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
        :options="tabOptions"
        :scrollThreshold="0"
        v-model:activeValue="tabIndex"
      />
    </template>
    <div ref="dropdown" class="fx-cascader_groups">
      <div
        class="fx-cascader_group fx-vertical-hairline"
        v-for="(list, listIndex) in cols"
        :key="listIndex"
        :style="{
          zIndex: tabColIndex == listIndex ? 2 : 1
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
import { defineComponent, ref, computed, inject, reactive } from 'vue'
import { Drawer } from '@/Drawer'
import { Tab } from '@/Tab'
import { isSameArray } from '@/helpers/util'
import { usePopupExtend } from '@/popup/use-popup'
import { popupExtendEmits, popupExtendProps } from '@/popup/popup'
import type { ColRow, PickerHandlers, PickerValue } from '../Picker/types'
import type { TabOptionItem } from '../Tab/types'
import { pickerPopupEmits, commonProps, mergeHandlers } from '@/Picker/picker'
import { usePickerView } from '@/Picker/use-picker'

export default defineComponent({
  name: 'fx-cascader-popup',
  components: { Drawer, Tab },
  props: {
    ...popupExtendProps,
    ...commonProps,
    title: {
      type: String,
      default: ''
    }
  },
  emits: [...popupExtendEmits, ...pickerPopupEmits],
  setup(props, ctx) {
    const tabOptions = reactive<TabOptionItem[]>([])
    const tabIndex = ref(0)
    const dropdown = ref<HTMLElement>()

    const popup = usePopupExtend(ctx)

    function onItemClick(e: Event, item: ColRow) {
      if (item.disabled) {
        return
      }

      const selecteds = getValuesByRow(item)

      if (item.hasChildren) {
        update(selecteds)
      } else {
        if (!isSameArray(currentValues, selecteds)) {
          onSelect(selecteds)
          onChange()
        } else {
          onSelect(selecteds)
        }
      }
    }

    function onSelect(selecteds: PickerValue[]) {
      const confirmDetail = updateOriginalValue(selecteds)
      popup.customConfirm(confirmDetail)
    }

    const {
      currentValues,
      cacheLabel,
      getDetail,
      cols,
      update,
      getValuesByRow,
      updateValue,
      updateOriginalValue,
      onChange
    } = usePickerView(props, ctx, {
      name: 'cascader',
      afterUpdate(valueArray, labelArray) {
        tabOptions.splice(0, Infinity)

        if (labelArray.length > 0) {
          labelArray.forEach((v, k) => {
            tabOptions.push({
              label: v,
              value: k
            })
          })

          tabIndex.value = tabOptions.length - 1
        } else {
          tabOptions.push({
            value: 0,
            label: props.title
          })
          tabIndex.value = 0
        }
      },
      handlers: mergeHandlers(
        {
          formatter: props.formatter,
          parser: props.parser
        },
        inject<Partial<PickerHandlers>>('fxPickerHandlers', {})
      )
    })

    const tabColIndex = computed(() => {
      if (cols.length > tabOptions.length) {
        return tabIndex.value + 1
      }
      return tabIndex.value
    })

    return {
      tabIndex,
      tabOptions,
      tabColIndex,
      cacheLabel,
      ...popup,
      dropdown,
      cols,
      getDetail,
      updateValue,
      onItemClick
    }
  }
})
</script>
