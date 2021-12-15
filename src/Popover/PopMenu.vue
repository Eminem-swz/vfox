<template>
  <teleport to="body">
    <div
      class="fx-popover fx-popup fx-pop-menu"
      :class="{ visible: visible2, 'no--mask': !showMask }"
      :style="popupStyles"
      v-bind="$attrs"
      v-show="isShow"
    >
      <div class="fx-mask" @click="onMaskClick"></div>
      <div class="fx-popover_inner" ref="inner" :style="innerStyles">
        <i class="fx-popover_arrow" :style="arrowStyles"></i>
        <div class="fx-popover_content">
          <ul
            class="fx-pop-menu_list fx-pop-menu_list"
            v-if="options2 && options2.length > 0"
          >
            <li
              class="fx-pop-menu_item fx-horizontal-hairline"
              :class="{ disabled: item.disabled }"
              v-for="(item, index) in options2"
              :key="index"
              @click="onItemClick(index)"
            >
              <div
                class="fx-pop-menu_item-inner"
                :class="{ 'has--icon': item.icon }"
              >
                <Icon v-if="item.icon" :icon="item.icon" />
                <span>{{ item.name }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { usePopover } from '@/Popover/use-popover'
import { popoverProps, popoverEmits } from '@/Popover/popover'
import { Icon } from '@/Icon'
import { isArray, isObject } from '@/helpers/util'
import type { PopMenuOption } from './types'

export default defineComponent({
  name: 'fx-pop-menu',
  components: { Icon },
  props: {
    ...popoverProps,
    options: {
      type: Array as PropType<PopMenuOption[]>
    }
  },
  emits: [...popoverEmits, 'select'],
  setup(props, ctx) {
    const popoverHook = usePopover(props, ctx)

    function onItemClick(index: number) {
      const item = props.options?.[index]

      if (!item || item.disabled) {
        return
      }

      popoverHook.customConfirm({
        item: {
          name: item.name
        },
        index
      })
    }

    const options2 = computed(() => {
      const options: PopMenuOption[] = []

      if (isArray(props.options)) {
        props.options?.forEach((v: PopMenuOption) => {
          isObject(v)
            ? options.push({
                icon: v.icon || null,
                name: v.name,
                disabled: !!v.disabled
              })
            : options.push({
                icon: null,
                name: v.toString(),
                disabled: false
              })
        })
      }
      return options
    })

    return {
      ...popoverHook,
      onItemClick,
      options2
    }
  }
})
</script>
