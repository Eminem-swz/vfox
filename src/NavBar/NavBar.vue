<template>
  <div class="fx-nav-bar fx-horizontal-hairline">
    <div class="fx-nav-bar_inner">
      <div class="fx-nav-bar_left">
        <slot name="left" v-if="$slots.left"></slot>
        <ButtonGroup
          v-else-if="leftButtons.length > 0 || showBack || showHome"
          class="fx-nav-bar_button-group"
          :shape="iconOnly ? 'square' : 'rectangle'"
          pattern="borderless"
        >
          <template v-if="leftButtons.length > 0">
            <Button
              class="fx-nav-bar_button"
              transparent
              :type="item.type || 'default'"
              :icon="item.icon"
              v-for="(item, index) in leftButtons"
              :key="index"
              @click="onLeftIconClick($event, item, index)"
              >{{ item.text }}</Button
            >
          </template>
          <template v-else>
            <Button
              class="fx-nav-bar_button"
              type="default"
              icon="LeftOutlined"
              transparent
              v-if="showBack"
              @click="onBack"
              >{{ locale.navBarBackButtonText }}</Button
            >
            <Button
              class="fx-nav-bar_button"
              type="default"
              icon="HomeOutlined"
              transparent
              v-if="showHome"
              @click="onBackHome"
              >{{ locale.navBarHomeButtonText }}</Button
            >
          </template>
        </ButtonGroup>
      </div>
      <div
        class="fx-nav-bar_title"
        @mousedown="onTitleStart"
        @touchstart="onTitleStart"
      >
        {{ title }}
      </div>
      <div class="fx-nav-bar_right">
        <slot name="right" v-if="$slots.right"></slot>
        <template v-else>
          <ButtonGroup
            class="fx-nav-bar_button-group"
            :shape="iconOnly ? 'square' : 'rectangle'"
            pattern="borderless"
            v-if="rightButtons.length > 0"
          >
            <Button
              class="fx-nav-bar_button"
              :type="item.type || 'default'"
              :icon="item.icon"
              v-for="(item, index) in rightButtons"
              :key="index"
              transparent
              @click="onRightIconClick($event, item, index)"
              >{{ item.text }}</Button
            >
          </ButtonGroup>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { Button, ButtonGroup } from '@/Button'
import { iconValidator } from '@/helpers/validator'
import type { StateType } from '../helpers/types'
import type { IconData } from '../Icon/types'
import { locale } from '@/Locale'

interface ButtonOptions {
  text: string
  icon?: IconData
  type?: StateType
}

const buttonsValidator = (items: ButtonOptions[]) => {
  return (
    Array.isArray(items) &&
    items.filter(item => {
      return !(
        item &&
        (typeof item.text === 'string' || iconValidator(item.icon))
      )
    }).length === 0
  )
}

const isButtonEl = (buttonEl?: HTMLElement) =>
  buttonEl == null || buttonEl instanceof HTMLElement

const emitClickValidator = (
  payload: {
    type: string
    index: number
    item: {
      text: string
    }
  },
  buttonEl?: HTMLElement
) =>
  payload &&
  typeof payload.index === 'number' &&
  payload.item &&
  typeof payload.item.text === 'string' &&
  isButtonEl(buttonEl)

export default defineComponent({
  name: 'fx-nav-bar',
  components: { Button, ButtonGroup },
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 是否展示返回按钮
    showBack: {
      type: Boolean,
      default: false
    },
    // 是否展示返回首页按钮
    showHome: {
      type: Boolean,
      default: false
    },
    leftButtons: {
      type: Array as PropType<ButtonOptions[]>,
      validator: buttonsValidator,
      default: () => [] as ButtonOptions[]
    },
    rightButtons: {
      type: Array as PropType<ButtonOptions[]>,
      validator: buttonsValidator,
      default: () => [] as ButtonOptions[]
    },
    iconOnly: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    'back-click': isButtonEl,
    'home-click': isButtonEl,
    'title-dbclick': isButtonEl,
    'left-button-click': emitClickValidator,
    'right-button-click': emitClickValidator
  },
  setup(props, { emit }) {
    function emitClick(type: string, $el: EventTarget | null) {
      emit(type as 'back-click', ($el as HTMLElement) || undefined)
    }

    function onBack(e: Event) {
      emitClick('back-click', e.currentTarget)
    }

    function onBackHome(e: Event) {
      emitClick('home-click', e.currentTarget)
    }

    function onLeftIconClick(e: Event, item: ButtonOptions, index: number) {
      emit(
        'left-button-click',
        {
          type: 'left-button-click',
          item: {
            text: item.text
          },
          index
        },
        (e.currentTarget as HTMLElement) || undefined
      )
    }

    function onRightIconClick(e: Event, item: ButtonOptions, index: number) {
      emit(
        'right-button-click',
        {
          type: 'right-button-click',
          item: {
            text: item.text
          },
          index
        },
        (e.currentTarget as HTMLElement) || undefined
      )
    }

    let dbClickTag: string | null = null
    let dbClickTimer: number
    function onTitleStart(e: Event) {
      if (!dbClickTag) {
        dbClickTag = e.type
        dbClickTimer = window.setTimeout(() => {
          dbClickTag = null
        }, 300)
      } else if (dbClickTag === e.type) {
        clearTimeout(dbClickTimer)
        dbClickTag = null
        emitClick('title-dbclick', e.currentTarget)
      }
    }

    return {
      onBack,
      onBackHome,
      onLeftIconClick,
      onRightIconClick,
      onTitleStart,
      locale
    }
  }
})
</script>
