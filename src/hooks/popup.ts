import { computed, onMounted, ref, watch, inject, provide } from 'vue'
import { isFunction, noop } from '@/helpers/util'
import { addClassName, getScrollDom, removeClassName } from '@/helpers/dom'
import { popupZIndex } from '@/helpers/layer'
import { Noop } from '../helpers/types'
import { useBlur } from '@/hooks/blur'
import {
  PopupVisibleStateChangeArgs,
  PopupVisibleState,
  PopupCustomCancel,
  PopupCustomConfirm,
  UseEmit,
  PopupStyles,
  UseProps,
  UseCtx
} from './types'
import { PopupBridge } from '../apis/types'

type LifeName = 'afterConfirm' | 'afterCancel' | 'afterShow' | 'afterHidden'

type UseOptions = {
  forbidScroll?: boolean
  useBlur?: boolean
} & Partial<Record<LifeName, Noop>>

let zIndex = popupZIndex

export function getNewZIndex() {
  return zIndex++
}

export const popupProps = {
  visible: {
    type: Boolean,
    default: false
  },
  maskClosable: {
    type: Boolean,
    default: true
  }
}

export const popupEmits = [
  'visible-state-change',
  'update:visible',
  'cancel',
  'confirm'
]

export function usePopup(props: UseProps, ctx: UseCtx, useOptions: UseOptions) {
  const apis = inject<PopupBridge>('fxApis', {})
  const isParent = inject<boolean>('fxPopupExtend', false)

  const isShow = ref(false)
  const zIndex = ref(popupZIndex)
  const visible2 = ref(false)
  const top = ref<string | null>(null)
  const position = ref<'absolute' | null>(null)

  let isShowing = false
  let isHiding = false
  let visibleTimer: number

  const visibleBlur = useBlur(onBlur)

  function emit(event: string, res: any) {
    if (isParent || !apis.in) {
      ctx.emit(event, res)
    } else {
      apis.in(event, res)
    }
  }

  function doShow(callback: Noop) {
    if (isShowing) {
      return false
    }
    isHiding = false
    isShowing = true

    clearTimeout(visibleTimer)

    // 如果禁止滚动
    if (useOptions.forbidScroll !== false) {
      addClassName(document.body, 'fx-overflow-hidden')
    } else {
      position.value = 'absolute'
      top.value = getScrollDom().scrollTop + 'px'
    }
    if (useOptions.useBlur) {
      visibleBlur.addEvent()
    }

    zIndex.value = getNewZIndex()
    isShow.value = true

    visibleTimer = window.setTimeout(() => {
      visible2.value = true

      visibleTimer = window.setTimeout(() => {
        isShowing = false
        callback()
      }, 210)
    }, 17)

    if (!props.visible) {
      emit('update:visible', true)
    }

    return true
  }

  function show() {
    const isSuccess = doShow(() => {
      emitVisibleState('shown')
    })

    if (isSuccess) {
      emitVisibleState('show')
      afterCall('afterShow')
    }
  }

  function _doHide(callback?: Noop) {
    if (isHiding) {
      return false
    }
    isHiding = true
    isShowing = false
    removeClassName(document.body, 'fx-overflow-hidden')
    visible2.value = false

    clearTimeout(visibleTimer)
    visibleTimer = window.setTimeout(() => {
      isShow.value = false
      isHiding = false

      position.value = null
      top.value = null

      isFunction(callback) && (callback as Noop)()
    }, 210)

    if (props.visible) {
      emit('update:visible', false)
    }

    return true
  }

  function hide(lifeName?: LifeName) {
    const isSuccess = _doHide(() => {
      emitVisibleState('hidden')
      afterCall('afterHidden')
    })

    if (isSuccess) {
      lifeName && afterCall(lifeName)
      emitVisibleState('hide')
    }

    visibleBlur.removeEvent()
  }

  function afterCall(lifeName: LifeName) {
    if (isFunction(useOptions[lifeName])) {
      ;(useOptions[lifeName] as Noop)()
    }
  }

  function emitVisibleState(state: PopupVisibleState) {
    emit('visible-state-change', {
      type: 'visible-state-change',
      state
    } as PopupVisibleStateChangeArgs)
  }

  function onBlur() {
    customCancel('blur')
  }

  function onMaskClick() {
    if (!props.maskClosable) {
      return
    }
    customCancel('maskClick')
  }

  function onCloseClick() {
    customCancel('closeClick')
  }

  function onCancelClick() {
    customCancel('cancelClick')
  }

  const customCancel: PopupCustomCancel = (key, focus = false) => {
    if (isShowing && !focus) {
      return
    }

    const res = { [key]: true, source: key }

    emit('cancel', res)
    hide('afterCancel')
  }

  const customConfirm: PopupCustomConfirm = detail => {
    emit('confirm', detail)
    hide('afterConfirm')
  }

  onMounted(() => {
    // 兼容devtools
    props.visible && show()
  })

  const popupStyles = computed(() => {
    const styles: PopupStyles = {
      zIndex: zIndex.value
    }

    if (top.value != null) {
      styles.top = top.value
    }

    if (position.value != null) {
      styles.position = position.value
    }

    return styles
  })

  watch(
    () => props.visible,
    (val: boolean) => {
      val ? show() : hide()
    }
  )

  apis.out && apis.out('customCancel', customCancel)

  return {
    emit,
    isShow,
    visible2,
    zIndex,
    popupStyles,
    show,
    hide,
    customConfirm,
    customCancel,
    noop,
    onMaskClick,
    onCloseClick,
    onCancelClick
  }
}

export const popupExtendEmits = [
  'confirm',
  'cancel',
  'visible-state-change',
  'update:visible'
]

export const popupExtendProps = {
  visible: {
    type: Boolean,
    default: false
  }
}

export function usePopupExtend(ctx: UseCtx) {
  const popup = ref()
  const apis = inject<PopupBridge>('fxApis', {})

  const emit: UseEmit = (event, res) => {
    if (!apis.in) {
      ctx.emit(event, res)
    } else {
      apis.in(event, res)
    }
  }

  const customCancel: PopupCustomCancel = (key, focus = false) => {
    popup.value && popup.value.customCancel(key, focus)
  }

  const customConfirm: PopupCustomConfirm = detail => {
    popup.value && popup.value.customConfirm(detail)
  }

  function onVisibleStateChange(e: PopupVisibleStateChangeArgs) {
    emit('visible-state-change', e)
  }

  function onCancelClick() {
    customCancel('cancelClick')
  }

  function onCancel(res: Record<string, boolean>) {
    emit('cancel', res)
  }

  function onConfirm(res: any) {
    emit('confirm', res)
  }

  function onUpdateVisible(value: boolean) {
    emit('update:visible', value)
  }

  provide('fxPopupExtend', true)

  return {
    emit,
    popup,
    customCancel,
    customConfirm,
    onUpdateVisible,
    onVisibleStateChange,
    onCancelClick,
    onCancel,
    onConfirm
  }
}
