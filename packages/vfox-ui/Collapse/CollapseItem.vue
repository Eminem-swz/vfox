<template>
  <div class="fx-collapse-item fx-horizontal-hairline" :class="{ active }">
    <Cell
      class="fx-collapse-item_header"
      :label="title"
      :icon="icon"
      :disabled="disabled"
      isLink
      arrow-direction="down"
      @click="onClick"
    />
    <div
      class="fx-collapse-item_body fx-horizontal-hairline"
      style="display: none"
      ref="bodyEl"
    >
      <div class="fx-collapse-item_content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue'
import { Cell } from '../Cell'
import { iconValidator } from '../helpers/validator'
import { useGroupItem } from '../hooks/use-group'
import Exception from '../helpers/exception'
import type { ItemOnToggle } from './types'
import type { FnArgs } from '../helpers/types'

export default defineComponent({
  name: 'fx-collapse-item',
  components: { Cell },
  props: {
    icon: {
      type: [String, Object],
      validator: iconValidator
    },
    title: {
      type: String,
      default: ''
    },
    name: {
      type: [Number, String],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    toggle: (payload: FnArgs<ItemOnToggle>[0]) =>
      payload && typeof payload.spread === 'boolean'
  },
  setup(props, { emit }) {
    const active = ref(false)
    const bodyEl = ref<HTMLElement>()
    const onChange = inject('fxCollapseChange', collapseItemChange)
    const uid = Symbol()

    function collapseItemChange(uid: symbol) {
      new Exception(
        `CollapseItem is not in Collapse`,
        Exception.TYPE.DEFAULT,
        'CollapseItem'
      )
    }

    let visibleTimer: number

    function show(isClick = false) {
      if (active.value) {
        return
      }
      active.value = true

      clearTimeout(visibleTimer)

      const $body = bodyEl.value as HTMLElement

      $body.style.cssText = 'position: absolute; opacity: 0;'
      const contentHeight = $body.getBoundingClientRect().height
      $body.style.cssText = 'height: 0px;'

      visibleTimer = window.setTimeout(() => {
        $body.style.cssText = `height: ${contentHeight}px;`

        visibleTimer = window.setTimeout(() => {
          $body.style.cssText = ''
        }, 210)
      }, 17)

      emitToggle(true)

      isClick && onChange(uid)
    }

    function hide(isClick = false) {
      if (!active.value) {
        return
      }
      active.value = false

      clearTimeout(visibleTimer)

      const $body = bodyEl.value as HTMLElement
      $body.style.cssText = `height: ${$body.getBoundingClientRect().height}px;`

      visibleTimer = window.setTimeout(() => {
        $body.style.cssText = 'height: 0px;'

        visibleTimer = window.setTimeout(() => {
          $body.style.cssText = 'display: none;'
        }, 210)
      }, 17)

      emitToggle(false)

      isClick && onChange(uid)
    }

    function emitToggle(spread: boolean) {
      emit('toggle', {
        name: props.name,
        spread
      })
    }

    function onClick() {
      active.value ? hide(true) : show(true)
    }

    useGroupItem('collapse', {
      uid,
      getName: () => props.name,
      getActive: () => active.value,
      show,
      hide
    })

    return {
      active,
      bodyEl,
      onClick
    }
  }
})
</script>
