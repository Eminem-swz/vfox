import { computed, ref, nextTick, watch } from 'vue'
import type { SetupContext } from 'vue'
import { cloneData } from '../helpers/util'
import { getEnumsValue } from '../helpers/validator'
import { querySelector } from '../helpers/dom'
import { PLACEMENT_TYPES } from '../helpers/constants'
import type { UseProps } from '../hooks/types'
import { useResize } from '../hooks/use-resize'
import { usePopup } from '../popup/use-popup'
import type { StyleObject } from '../helpers/types'
import { popoverEmits, popoverProps } from '../Popover/popover'

type PopoverPos = {
  t: number | null
  r: number | null
  b: number | null
  l: number | null
  at: number | null
  ar: number | null
  ab: number | null
  al: number | null
}

const DEFAULT_POS: PopoverPos = {
  t: null,
  r: null,
  b: null,
  l: null,
  at: null,
  ar: null,
  ab: null,
  al: null
}

export function usePopover(
  props: UseProps<typeof popoverProps>,
  ctx: SetupContext<typeof popoverEmits>
) {
  const padding = 8
  const innerEl = ref<HTMLElement>()
  const isShow = ref(false)
  let pos = cloneData<PopoverPos>(DEFAULT_POS)

  const popupOptions = {
    afterShow() {
      nextTick(() => {
        updatePos()
      })
    },
    afterHidden() {
      pos = cloneData(DEFAULT_POS)
      isShow.value = false
    },
    forbidScroll: true,
    enableUseBlur: false
  }

  const popup = usePopup(props, ctx, popupOptions)

  const { client } = useResize()

  function updatePos() {
    const $target = querySelector(props.selector)

    if (!$target) {
      return
    }

    const placement = getEnumsValue(PLACEMENT_TYPES, props.placement)

    const rect = $target.getBoundingClientRect()
    const { clientWidth: iw, clientHeight: ih } = innerEl.value as HTMLElement
    const { width: dw, height: dh } = client.value

    pos = cloneData(DEFAULT_POS)

    if (placement === 'top' || placement === 'bottom') {
      pos.al = rect.left + rect.width / 2 - 5
      pos.l = rect.left + rect.width / 2 - iw / 2

      if (pos.l < padding) {
        pos.l = padding
      } else if (pos.l + iw > dw - padding) {
        pos.l -= pos.l + iw - (dw - padding)
      }
      pos.al = pos.al - pos.l

      if (placement === 'bottom') {
        pos.at = -4
        pos.t = rect.bottom + 7
      } else {
        pos.ab = -4
        pos.b = dh - rect.top + 7
      }
    } else {
      pos.at = rect.top + rect.height / 2 - 5
      pos.t = rect.top + rect.height / 2 - ih / 2

      if (pos.t < padding) {
        pos.t = padding
      } else if (pos.t + ih > dh - padding) {
        pos.t -= pos.t + ih - (dh - padding)
      }
      pos.at = pos.at - pos.t

      if (placement === 'right') {
        pos.al = -4
        pos.l = rect.right + 7
      } else {
        pos.ar = -4
        pos.r = dw - rect.left + 7
      }
    }

    isShow.value = true
  }

  const arrowStyles = computed(() => {
    if (!isShow.value) {
      return { left: '200vw', top: '200vh' } as StyleObject
    }

    const styles: StyleObject = {}

    pos.at != null && (styles.top = pos.at + 'px')
    pos.ar != null && (styles.right = pos.ar + 'px')
    pos.ab != null && (styles.bottom = pos.ab + 'px')
    pos.al != null && (styles.left = pos.al + 'px')

    return styles
  })

  const innerStyles = computed(() => {
    const { width, height } = client.value

    const styles: StyleObject = {
      maxWidth: width - padding * 2 + 'px',
      maxHeight: height - padding * 2 + 'px'
    }

    if (!isShow.value) {
      return styles
    }

    // updatePos()
    pos.t != null && (styles.top = pos.t + 'px')
    pos.r != null && (styles.right = pos.r + 'px')
    pos.b != null && (styles.bottom = pos.b + 'px')
    pos.l != null && (styles.left = pos.l + 'px')

    return styles
  })

  watch(
    () => props.showMask,
    val => {
      popupOptions.forbidScroll = !!val
      popupOptions.enableUseBlur = !val
    },
    {
      immediate: true
    }
  )

  return {
    ...popup,
    innerEl,
    arrowStyles,
    innerStyles
  }
}
