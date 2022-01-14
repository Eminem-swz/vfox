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
import type { ButtonOption, OnButtonClick } from './types'
import { locale } from '@/Locale'
import { iconValidator } from '@/helpers/validator'

const buttonsValidator = (items: ButtonOption[]) => {
  return (
    Array.isArray(items) &&
    items.filter(item => {
      return !(
        item &&
        typeof item.text === 'string' &&
        iconValidator(item.icon)
      )
    }).length === 0
  )
}

const emitClickValidator: OnButtonClick = (payload, buttonEl) =>
  payload &&
  typeof payload.index === 'number' &&
  payload.item &&
  typeof payload.item.text === 'string' &&
  buttonEl instanceof HTMLElement

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
      type: Array as PropType<ButtonOption[]>,
      validator: buttonsValidator,
      default: () => [] as ButtonOption[]
    },
    rightButtons: {
      type: Array as PropType<ButtonOption[]>,
      validator: buttonsValidator,
      default: () => [] as ButtonOption[]
    },
    iconOnly: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    'back-click': emitClickValidator,
    'home-click': emitClickValidator,
    'title-dbclick': emitClickValidator,
    'left-button-click': emitClickValidator,
    'right-button-click': emitClickValidator
  },
  setup(props, { emit }) {
    function emitClick(
      type: string,
      item: {
        item: {
          text: string
        }
        index: number
      },
      $el: EventTarget | null
    ) {
      emit(type as 'back-click', item, $el as HTMLElement)
    }

    function onBack(e: Event) {
      emitClick(
        'back-click',
        {
          index: 0,
          item: {
            text: 'back'
          }
        },
        e.currentTarget
      )
    }

    function onBackHome(e: Event) {
      emitClick(
        'home-click',
        {
          item: {
            text: 'home'
          },
          index: props.showBack ? 1 : 0
        },
        e.currentTarget
      )
    }

    function onLeftIconClick(e: Event, item: ButtonOption, index: number) {
      emitClick(
        'left-button-click',
        {
          item: {
            text: item.text
          },
          index
        },
        e.currentTarget
      )
    }

    function onRightIconClick(e: Event, item: ButtonOption, index: number) {
      emitClick(
        'right-button-click',
        {
          item: {
            text: item.text
          },
          index
        },
        e.currentTarget
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
        emitClick(
          'title-dbclick',
          {
            item: {
              text: (e.currentTarget as HTMLElement).textContent ?? ''
            },
            index: 0
          },
          e.currentTarget
        )
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
