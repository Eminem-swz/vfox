<template>
  <div class="fx-picker-view" ref="root">
    <div class="fx-picker-view_cols">
      <div
        class="fx-picker-view_col"
        v-for="(list, listIndex) in cols"
        :key="listIndex"
      >
        <ul
          class="fx-picker-view_list"
          :data-index="listIndex"
          @scroll.stop="onListScroll"
        >
          <li
            class="fx-picker-view_item"
            :class="{ selected: item.selected, disabled: item.disabled }"
            v-for="(item, index) in list"
            :key="item.value"
            :data-index="index"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      <Empty :description="locale.pickerEmptyText" v-if="cols.length === 0" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, inject } from 'vue'
import { Empty } from '../Empty'
import { frameTo } from '../helpers/animation'
import { hasClassName } from '../helpers/dom'
import { commonProps, pickerValueEmits, mergeHandlers } from '../Picker/picker'
import { usePickerView } from '../Picker/use-picker'
import type { PickerHandlers } from './types'
import { locale } from '../Locale'

interface ScrollElement extends HTMLElement {
  scrolling?: boolean
  scrollTimer?: number
}

export default defineComponent({
  name: 'fx-picker-view',
  components: { Empty },
  props: {
    ...commonProps
  },
  emits: { ...pickerValueEmits },
  setup(props, ctx) {
    const root = ref<HTMLElement>()

    const defaultItemHeight = 48

    const {
      getDetail,
      cols,
      isCascade,
      update,
      updateColSelected,
      getValuesByRow,
      updateValue,
      onChange
    } = usePickerView(props, ctx, {
      name: 'picker',
      afterUpdate: updatePos,
      handlers: mergeHandlers(
        {
          formatter: props.formatter,
          parser: props.parser
        },
        inject<Partial<PickerHandlers>>('fxPickerHandlers', {})
      )
    })

    function updatePos() {
      nextTick(() => {
        // 把选择数据展示在选择框内
        const $picker = root.value as HTMLElement

        if ($picker) {
          const $lists = $picker.querySelectorAll(`.fx-picker-view_list`)
          const $firstList = $lists[0]

          if ($firstList && $firstList.firstElementChild) {
            const itemHeight =
              $firstList.firstElementChild.clientHeight || defaultItemHeight

            const $selecteds = $picker.querySelectorAll('.selected')

            $selecteds.forEach(($selected, index) => {
              const itemIndex = parseInt(
                ($selected as HTMLElement).dataset.index as string
              )
              $lists[index].scrollTop = itemHeight * itemIndex
            })
          }
        }
      })
    }

    function onListScroll(e: Event) {
      const $list = e.currentTarget as ScrollElement

      if ($list.scrolling) {
        return
      }

      clearTimeout($list.scrollTimer)

      const $items = $list.children
      const itemHeight =
        $list.firstElementChild?.clientHeight || defaultItemHeight
      const groupIndex = parseInt($list.dataset.index as string)
      let current = Math.round($list.scrollTop / itemHeight)
      let oldSelectIndex = 0

      for (let i = 0; i < $items.length; i++) {
        if (hasClassName($items[i], 'selected')) {
          oldSelectIndex = i
          break
        }
      }

      let isChange = current !== oldSelectIndex

      if (isChange) {
        while (
          hasClassName($items[current], 'disabled') &&
          current !== oldSelectIndex
        ) {
          // 处理disabled 不能选的问题
          if (current > oldSelectIndex) {
            current--
          } else {
            current++
          }
        }
      }

      isChange = current !== oldSelectIndex

      const item = cols.value[groupIndex][current]

      if (current * itemHeight === $list.scrollTop && !isChange) {
        // 如果一致 就不需要修正了
      } else {
        $list.scrollTimer = window.setTimeout(() => {
          // $list.scrollTop = current * itemHeight
          $list.scrolling = true

          frameTo({
            from: $list.scrollTop,
            to: current * itemHeight,
            duration: 100,
            progress(res) {
              $list.scrollTop = res.current
            },
            complete() {
              $list.scrolling = false
            }
          })
          if (isChange) {
            if (isCascade.value) {
              update(getValuesByRow(item))
            } else {
              updateColSelected(groupIndex, current)
            }

            onChange()
          }
        }, 400)
      }
    }

    return {
      root,
      cols,
      getDetail,
      onListScroll,
      updateValue,
      updatePos,
      locale
    }
  }
})
</script>
