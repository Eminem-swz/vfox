<template>
  <Drawer
    class="fx-number-keyboard"
    placement="bottom"
    :visible="visible"
    :showMask="false"
    :title="title"
    :showClose="showHeaderConfirm"
    @visibleStateChange="onVisibleStateChange2"
    @cancel="onCancel"
    @confirm="onConfirm"
    @update:visible="onUpdateVisible"
    ref="popup"
  >
    <div @click.stop="noop">
      <div class="fx-number-keyboard_body" :class="bodyClasses">
        <ul class="fx-number-keyboard_list">
          <li
            class="fx-number-keyboard_item"
            :class="['span-' + (item.span || 1)]"
            v-for="(item, index) in numberList"
            :key="index"
          >
            <div class="fx-number-keyboard_button" @click="onNumberClick(item)">
              <Icon v-if="item.icon" :icon="item.icon" />
              <template v-else>{{ item.text }}</template>
            </div>
          </li>
        </ul>
        <div
          class="fx-number-keyboard_right-column"
          v-if="type === 'rightColumn'"
        >
          <div class="fx-number-keyboard_backspace">
            <div
              class="fx-number-keyboard_button"
              @click="onNumberClick(backspaceItem)"
            >
              <Icon icon="BackspaceOutlined" />
            </div>
          </div>
          <div class="fx-number-keyboard_confirm">
            <div
              class="fx-number-keyboard_confirm-button"
              @click="onConfirmClick"
            >
              {{ locale.numberKeyboardConfirmText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Drawer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
import { Icon } from '@/Icon'
import { Drawer } from '@/Drawer'
import { isStringArray, noop } from '@/helpers/util'
import { usePopupExtend } from '@/popup/use-popup'
import { popupEmits, popupExtendProps } from '@/popup/popup'
import type { PopupVisibleStateChangeArgs } from '../popup/types'
import { getEnumsValue } from '@/helpers/validator'
import { locale } from '@/Locale'
import { formStringValueEmits } from '@/Form/form'
import type { EmptyObject } from '../helpers/types'

const TYPE_NAMES = ['default', 'rightColumn']

interface NumberKeyboardItem {
  icon?: string
  text: string
  type: 'text' | 'confirm' | 'backspace'
  span?: number
}

interface PopupCancelArgs {
  source: string
}

export default defineComponent({
  name: 'fx-number-keyboard',
  components: { Drawer, Icon },
  props: {
    ...popupExtendProps,
    modelValue: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: null
    },
    // 键盘模式
    type: {
      type: String as PropType<'default' | 'rightColumn'>,
      default: 'default'
    },
    // 自定义键盘额外的键
    customKey: {
      type: [Array, String],
      default: () => [] as string[]
    }
  },
  emits: {
    ...popupEmits,
    ...formStringValueEmits,
    delete: (payload: { type: string; deleteKey: string }) =>
      payload && typeof payload.deleteKey === 'string',
    close: (payload: { type: string; source: string }) =>
      payload && typeof payload.source === 'string'
  },
  setup(props, ctx) {
    const { emit } = ctx
    let cacheValue = ''
    const backspaceItem: NumberKeyboardItem = {
      text: 'backspace',
      type: 'backspace',
      icon: 'BackspaceOutlined'
    }

    const popup = usePopupExtend<EmptyObject>(ctx)

    function onVisibleStateChange2(e: PopupVisibleStateChangeArgs) {
      popup.onVisibleStateChange(e)

      if (e.state === 'show') {
        cacheValue =
          (typeof props.modelValue === 'string' && props.modelValue) || ''
      }
    }

    const bodyClasses = computed(() => {
      return [
        `type--${getEnumsValue(TYPE_NAMES, props.type)}`,
        { 'has--header': showHeaderConfirm.value || props.title }
      ]
    })

    const showHeaderConfirm = computed(() => {
      return (
        props.type !== 'rightColumn' &&
        (typeof props.customKey === 'string' ||
          (isStringArray(props.customKey) && props.customKey.length > 0))
      )
    })

    const numberList = computed(() => {
      const list: NumberKeyboardItem[] = []

      for (let i = 1; i <= 9; i++) {
        list.push({
          text: i.toString(),
          type: 'text'
        })
      }

      const customKey =
        typeof props.customKey === 'string'
          ? [props.customKey]
          : isStringArray(props.customKey)
          ? (props.customKey as string[])
          : []

      if (props.type === 'rightColumn') {
        if (customKey.length > 1) {
          list.push(
            {
              text: customKey[0],
              type: 'text'
            },
            { text: '0', type: 'text' },
            {
              text: customKey[1],
              type: 'text'
            }
          )
        } else if (customKey.length > 0) {
          list.push(
            { text: '0', type: 'text', span: 2 },
            {
              text: customKey[0],
              type: 'text'
            }
          )
        } else {
          list.push({ text: '0', type: 'text', span: 3 })
        }
      } else {
        if (customKey.length > 0) {
          list.push(
            {
              text: customKey[0],
              type: 'text'
            },
            { text: '0', type: 'text' }
          )
        } else {
          list.push(
            {
              text: 'confirm',
              type: 'confirm',
              icon: 'KeyboardOutlined'
            },
            { text: '0', type: 'text' }
          )
        }

        list.push(backspaceItem)
      }

      return list
    })

    function onNumberClick(item: NumberKeyboardItem) {
      if (item.type === 'text') {
        cacheValue += item.text
        emit('input', item.text)
        emit('update:modelValue', cacheValue)
      } else if (item.type === 'backspace') {
        const deleteKey = cacheValue.substr(-1)
        cacheValue = cacheValue.substr(0, cacheValue.length - 1)
        emit('delete', {
          type: 'delete',
          deleteKey
        })
        emit('update:modelValue', cacheValue)
      } else if (item.type === 'confirm') {
        popup.customConfirm({})
      }
    }

    function onConfirmClick() {
      popup.customConfirm({})
    }

    function onConfirm() {
      close('confirm')
    }

    function onCancel(res: PopupCancelArgs) {
      close(res.source)
    }

    function close(source: string) {
      emit('change', cacheValue)
      cacheValue = ''

      emit('close', {
        type: 'close',
        source
      })
    }

    return {
      ...popup,
      noop,
      onVisibleStateChange2,
      showHeaderConfirm,
      bodyClasses,
      numberList,
      onNumberClick,
      onConfirmClick,
      onConfirm,
      onCancel,
      backspaceItem,
      locale
    }
  }
})
</script>
