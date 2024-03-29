<template>
  <div
    class="fx-notice-bar"
    :class="[typeClassName]"
    :style="styles"
    v-show="visible2"
  >
    <div v-if="leftIcon" class="fx-notice-bar_left-icon">
      <Icon :icon="leftIcon" />
    </div>
    <div class="fx-notice-bar_content">
      <div
        ref="contentEl"
        class="fx-notice-bar_content-inner"
        :class="{ marquee: !!marquee }"
        :style="contentStyles"
      >
        <slot>
          {{ title }}
        </slot>
      </div>
    </div>
    <div
      v-if="rightIcon2"
      class="fx-notice-bar_right-icon"
      @click="onRightIconClick"
    >
      <Icon :icon="rightIcon2" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onBeforeUnmount,
  inject,
  ref,
  watch
} from 'vue'
import type { PropType } from 'vue'
import { Icon } from '../Icon'
import {
  colorValidator,
  createEnumsValidator,
  emitTypeValidator,
  getEnumsValue,
  iconValidator
} from '../helpers/validator'
import type { StyleObject, StateType } from '../helpers/types'
import { STATE_TYPES } from '../helpers/constants'
import { getColorObject } from '../helpers/color'
import type { Mode } from './types'

const modeMaps = new Map<Mode, string>([
  ['default', ''],
  ['clickable', 'RightOutlined'],
  ['closable', 'CloseOutlined']
])

export default defineComponent({
  name: 'fx-notice-bar',
  components: { Icon },
  props: {
    // 是否显示
    visible: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    // 通知栏模式
    mode: {
      type: String as PropType<Mode>,
      validator: (val: Mode) => modeMaps.get(val) != null,
      default: 'default' as Mode
    },
    // 左侧图标名称
    leftIcon: {
      type: [String, Object],
      validator: iconValidator
    },
    // 右边侧图标名称
    rightIcon: {
      type: [String, Object],
      validator: iconValidator
    },
    color: {
      type: String,
      validator: colorValidator
    },
    // 是否采用跑马灯显示
    marquee: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<StateType>,
      validator: createEnumsValidator(STATE_TYPES),
      default: null
    }
  },
  emits: {
    'update:visible': (visible: boolean) => typeof visible === 'boolean',
    show: emitTypeValidator,
    hide: emitTypeValidator,
    'close-click': emitTypeValidator
  },
  setup(props, ctx) {
    const { emit } = ctx
    const notifyExist = inject('fxNotifyExist', false)
    const visible2 = ref(!!props.visible)
    const marqueeX = ref(0)
    const marqueeDuration = ref(0)
    const contentEl = ref<HTMLElement>()
    let marqueeTimer: number

    function marqueeStep(x: number, pW: number) {
      marqueeX.value = pW
      marqueeDuration.value = 0

      marqueeTimer = window.setTimeout(() => {
        marqueeX.value = -x
        marqueeDuration.value = x / 30

        marqueeTimer = window.setTimeout(() => {
          marqueeStep(x, pW)
        }, (x / 28) * 1000)
      }, 17)
    }

    function stopMarquee() {
      clearTimeout(marqueeTimer)

      marqueeX.value = 0
      marqueeDuration.value = 0
    }

    function startMarquee() {
      stopMarquee()

      const $content = contentEl.value as HTMLElement

      const w = $content.offsetWidth
      const pW = ($content.parentElement as HTMLElement).offsetWidth

      if (w > pW) {
        marqueeStep(w, pW)
      }
    }

    function resetMarquee() {
      props.marquee ? startMarquee() : stopMarquee()
    }

    function show() {
      if (!visible2.value) {
        emit('update:visible', true)
        visible2.value = true

        emit('show', { type: 'show' })
      }
    }
    function hide() {
      if (visible2.value) {
        emit('update:visible', false)
        visible2.value = false

        emit('hide', { type: 'hide' })
      }
    }

    function onRightIconClick() {
      if (props.mode === 'closable') {
        if (!notifyExist) {
          hide()
        }

        emit('close-click', { type: 'close-click' })
      }
    }

    onMounted(() => props.marquee && startMarquee())

    onBeforeUnmount(() => stopMarquee())

    watch([() => props.marquee, () => props.title], () => {
      resetMarquee()
    })

    const rightIcon2 = computed(() => {
      return props.rightIcon || modeMaps.get(props.mode) || null
    })

    const styles = computed(() => {
      const obj: StyleObject = {}

      const colorObj = getColorObject(props.color as string)

      if (colorObj.hasColor) {
        obj[`--fx-color`] = colorObj.varBackgroundColor
        obj[`--fx-front-color`] = colorObj.varFrontColor
      }

      return obj
    })

    const contentStyles = computed(() => {
      const obj: StyleObject = {}

      marqueeX.value !== 0 &&
        (obj.transform = `translateX(${marqueeX.value}px)`)
      marqueeDuration.value > 0 &&
        (obj.transitionDuration = `${marqueeDuration.value}s`)

      return obj
    })

    // 计算属性的 getter
    const typeClassName = computed(() => {
      return 'type--' + getEnumsValue(STATE_TYPES, props.type)
    })

    watch(
      () => props.visible,
      val => {
        visible2.value = !!val
      }
    )

    return {
      show,
      hide,
      contentEl,
      visible2,
      rightIcon2,
      styles,
      contentStyles,
      typeClassName,
      onRightIconClick
    }
  }
})
</script>
