import { computed, onMounted, ref, watch, inject } from 'vue'
import type { SetupContext } from 'vue'
import { noop } from '../helpers/util'
import { addClassName, getScrollTop, removeClassName } from '../helpers/dom'
import { popupZIndex } from '../helpers/layer'
import { useBlur } from '../hooks/use-blur'
import type { UseEmitFn, UseProps } from '../hooks/types'
import type {
  VisibleState,
  PopupCustomCancel,
  PopupCustomConfirm,
  PopupStyles,
  PopupBridge,
  OnVisibleStateChange,
  OnCancel
} from './types'
import { popupEmits, popupProps } from '../popup/popup'

type LifeName = 'afterConfirm' | 'afterCancel' | 'afterShow' | 'afterHidden'

type UseOptions = Partial<
  Record<LifeName, () => void> & {
    forbidScroll: boolean
    enableUseBlur: boolean
  }
>

let zIndex = popupZIndex

export function getNewZIndex() {
  return zIndex++
}

function useApiHook(emit: any) {
  const apis = inject<PopupBridge>('fxApis', {})

  const emitHook: UseEmitFn<typeof popupEmits> = (event, res) => {
    apis.in ? apis.in(event, res) : emit(event, res)
  }

  function cancelHook(customCancel: PopupCustomCancel) {
    apis.out && apis.out('customCancel', customCancel)
  }

  return {
    emitHook,
    cancelHook
  }
}

export function usePopup(
  props: UseProps<typeof popupProps>,
  ctx: SetupContext<any>,
  useOptions: UseOptions
) {
  const { emitHook, cancelHook } = useApiHook(ctx.emit)
  // const isParent = inject<boolean>('fxPopupExtend', false)

  const isShow = ref(false)
  const zIndex = ref(popupZIndex)
  const visible2 = ref(false)
  const top = ref<string | null>(null)
  const position = ref<'absolute' | null>(null)

  let isShowing = false
  let isHiding = false
  let visibleTimer: number

  const visibleBlur = useBlur(onBlur)

  function doShow(callback: () => void) {
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
      top.value = getScrollTop() + 'px'
    }
    if (useOptions.enableUseBlur) {
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
      emitHook('update:visible', true)
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

  function _doHide(callback?: () => void) {
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
      callback && typeof callback === 'function' && callback()
    }, 210)

    if (props.visible) {
      emitHook('update:visible', false)
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
    if (typeof useOptions[lifeName] === 'function') {
      ;(useOptions[lifeName] as () => void)()
    }
  }

  function emitVisibleState(state: VisibleState) {
    emitHook('visible-state-change', {
      state
    })
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
    emitHook('cancel', { source: key })
    hide('afterCancel')
  }

  const customConfirm: PopupCustomConfirm = detail => {
    emitHook('confirm', detail)
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

  cancelHook(customCancel)

  return {
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

export function usePopupExtend<T>(ctx: SetupContext<any>) {
  const popup = ref()
  const { emitHook, cancelHook } = useApiHook(ctx.emit)

  const customCancel: PopupCustomCancel = (key, focus = false) => {
    popup.value && popup.value.customCancel(key, focus)
  }

  const customConfirm: PopupCustomConfirm<T> = detail => {
    popup.value && popup.value.customConfirm(detail)
  }

  const onVisibleStateChange: OnVisibleStateChange = e => {
    emitHook('visible-state-change', e)
  }

  function onCancelClick() {
    customCancel('cancelClick')
  }

  const onCancel: OnCancel = res => {
    emitHook('cancel', res)
  }

  function onConfirm(res: T) {
    emitHook('confirm', res)
  }

  function onUpdateVisible(value: boolean) {
    emitHook('update:visible', value)
  }

  // provide('fxPopupExtend', true)
  cancelHook(customCancel)

  return {
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
