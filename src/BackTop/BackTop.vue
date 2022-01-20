<template>
  <button v-show="isShow" class="fx-back-top" :style="styles" @click="onClick">
    <slot>
      <Icon icon="UpCircleOutlined" />
    </slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, toRef, ref } from 'vue'
import type { PropType } from 'vue'
import { Icon } from '../Icon'
import { getScrollTop, scrollTo } from '../helpers/dom'
import { useSafeAreaInsets } from '../hooks/use-safe-area-insets'
import { isNumber, isNumberArray } from '../helpers/util'
import { useScrollEvent } from '../hooks/use-scroll'
import { emitEventValidator } from '../helpers/validator'

export default defineComponent({
  name: 'fx-back-top',
  components: { Icon },
  props: {
    visibleHeight: {
      type: Number,
      default: 200
    },
    animated: {
      type: Boolean,
      default: true
    },
    offset: {
      type: [Number, Array] as PropType<number | number[]>,
      default: 0
    },
    enableSafeAreaInsets: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    click: emitEventValidator
  },
  setup(props, { emit }) {
    const isShow = ref(getScrollTop() >= props.visibleHeight)

    function toTop() {
      scrollTo(document, 0, props.animated)
    }

    function onClick(e: Event) {
      toTop()

      emit('click', e)
    }

    const safeAreaInsets = useSafeAreaInsets(
      toRef(props, 'enableSafeAreaInsets')
    )

    const styles = computed(() => {
      let offset = [0, 0]
      if (isNumber(props.offset)) {
        offset = [props.offset as number, props.offset as number]
      } else if (
        isNumberArray(props.offset) &&
        (props.offset as number[]).length > 1
      ) {
        offset = props.offset as number[]
      }

      return {
        transform: `translate3d(${offset[0]}px, ${
          offset[1] - safeAreaInsets.bottom
        }px, 0px)`
      }
    })

    useScrollEvent(document, (e: Event, { scrollTop }) => {
      isShow.value = scrollTop >= props.visibleHeight
    })

    return {
      toTop,
      onClick,
      isShow,
      styles
    }
  }
})
</script>
