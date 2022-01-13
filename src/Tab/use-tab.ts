import { getCurrentInstance, ref, watch, computed, nextTick } from 'vue'
import type {
  ComponentInternalInstance,
  SetupContext,
  ExtractPropTypes
} from 'vue'
import { isNumber, isObject, isStringNumberMix, isURL } from '@/helpers/util'
import { frameTo } from '@/helpers/animation'
import Exception from '@/helpers/exception'
import { handleBadge } from '@/Badge/badge'
import type { OptionItem, HandleOptionItem } from './types'
import type { StyleObject } from '../helpers/types'
import { tabEmits, tabProps } from '@/Tab/tab'

interface UseOptions {
  tabName: string
}

export function useTab(
  props: ExtractPropTypes<typeof tabProps>,
  { emit }: SetupContext<typeof tabEmits>,
  { tabName }: UseOptions
) {
  const instance = getCurrentInstance() as ComponentInternalInstance
  const list = ref<HTMLElement>()
  const underline = ref<HTMLElement>()
  const options2 = ref<HandleOptionItem[]>([])
  const activeIndex = ref(-1)
  const hasSub = ref(false)

  let value2 = props.activeValue

  function updateOptions() {
    const options: HandleOptionItem[] = []

    let hasActive = false
    hasSub.value = false

    if (Array.isArray(props.options)) {
      props.options.forEach((item, index) => {
        let option: OptionItem | null = null

        if (isNumber(item)) {
          option = {
            label: item.toString(),
            value: item as number
          }
        } else if (typeof item === 'string') {
          option = {
            label: item,
            value: item
          }
        } else if (isObject(item)) {
          item = item as OptionItem

          if (isStringNumberMix(item.value)) {
            option = {
              label:
                typeof item.label === 'string'
                  ? item.label
                  : item.value.toString(),
              subLabel: typeof item.subLabel === 'string' ? item.subLabel : '',
              value: item.value,
              icon: null
            }

            if (item.icon) {
              if (isURL(item.icon)) {
                option.iconLink = item.icon as string
                option.activeIconLink = isURL(item.activeIcon)
                  ? (item.activeIcon as string)
                  : option.iconLink
              } else {
                option.icon = item.icon
                option.activeIcon = item.activeIcon ?? option.icon
              }
            }

            if (option.subLabel) {
              hasSub.value = true
            }

            option.badge = handleBadge(item.badge)
          }
        }

        if (option) {
          option = option as OptionItem

          if (option.value === value2) {
            activeIndex.value = index
            hasActive = true
          }

          options.push(option as HandleOptionItem)
        }
      })
    }

    options2.value = options

    if (!hasActive && options[0]) {
      // this.onChange(options[0].value)
      updateActive(options[0].value)
    }

    updatePos()
  }

  function switchTo(value: number | string, isProp = false) {
    if (!updateActive(value)) {
      // emit('update:activeValue', value2)
      console.error(
        new Exception(
          'The value is not in "options".',
          isProp ? Exception.TYPE.PROP_ERROR : Exception.TYPE.PARAM_ERROR,
          tabName
        )
      )
    }
  }

  function switchToIndex(index: number) {
    if (options2.value[index]) {
      updateActive(options2.value[index].value)
    } else {
      console.error(
        new Exception(
          'The "options[index]" not found.',
          Exception.TYPE.PARAM_ERROR,
          tabName
        )
      )
    }
  }

  function updateActive(value: number | string) {
    if (value === value2) {
      return true
    }

    let hasValue = false

    options2.value.forEach((option, index) => {
      if (option.value === value) {
        value2 = option.value
        activeIndex.value = index
        hasValue = true
      }
    })

    if (!hasValue) {
      activeIndex.value = -1
    }

    afterUpdate({
      hasValue,
      activeIndex: activeIndex.value
    })

    return hasValue
  }

  function afterUpdate({
    hasValue
  }: {
    hasValue: boolean
    activeIndex: number
  }) {
    hasValue && instance.isMounted && updatePos()
  }

  function onChange(value: number | string) {
    if (value === value2) {
      return
    }

    updateActive(value)
    emit('update:activeValue', value)

    emit('change', {
      value,
      index: activeIndex.value
    })
  }

  function updatePos() {
    nextTick(() => {
      if (tabName === 'TabBar') {
        return
      }

      const $list = list.value as HTMLElement
      const $activeItem = $list?.children[activeIndex.value] as HTMLElement

      if (!$activeItem) {
        return
      }

      const vertical = tabName === 'SideTab'
      const sizeKey = !vertical ? 'Width' : 'Height'
      const directionKey = !vertical ? 'Left' : 'Top'
      const offsetSizeKey = ('offset' + sizeKey) as 'offsetWidth'
      const scrollSizeKey = ('scroll' + sizeKey) as 'scrollWidth'
      const offsetDirectionKey = ('offset' + directionKey) as 'offsetLeft'
      const scrollDirectionKey = ('scroll' + directionKey) as 'scrollLeft'

      const w = $list[offsetSizeKey]
      const ofs = $activeItem[offsetDirectionKey]
      const from = $list[scrollDirectionKey]
      const to =
        $activeItem[offsetSizeKey] > w
          ? ofs
          : Math.max(
              Math.min(
                ofs - (w - $activeItem[offsetSizeKey]) / 2,
                $list[scrollSizeKey] - w
              ),
              0
            )

      // console.log(from, to, w, ofs, ofs - to)

      frameTo({
        from,
        to,
        duration: 200,
        progress({ current }) {
          $list[scrollDirectionKey] = current
        },
        complete({ current }) {
          $list[scrollDirectionKey] = current
        }
      })

      if (tabName === 'Tab' && underline.value) {
        const $underline = underline.value
        const $inner = $activeItem.querySelector(
          '.fx-tab_item-inner'
        ) as HTMLElement

        $underline.style.width = $inner.offsetWidth + 'px'
        $underline.style.transform = `translate3d(${
          ofs - to + ($activeItem.offsetWidth - $inner.offsetWidth) / 2
        }px, 0, 0)`
      }
    })
  }

  watch(
    () => props.activeValue,
    val => val && switchTo(val, true)
  )

  watch(() => props.options, updateOptions, {
    deep: true,
    immediate: true
  })

  const styles = computed(() => {
    const obj: StyleObject = {}

    props.color && (obj['--fx-color'] = props.color)
    props.activeColor && (obj['--fx-active-color'] = props.activeColor)

    return obj
  })

  return {
    list,
    underline,
    activeIndex,
    hasSub,
    options2,
    switchTo,
    switchToIndex,
    onChange,
    styles
  }
}
