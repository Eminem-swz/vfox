import {
  computed,
  onMounted,
  ref,
  watch,
  inject,
  getCurrentInstance,
  ComponentInternalInstance,
  provide
} from 'vue'
import type { SetupContext, ExtractPropTypes } from 'vue'
import { capitalize, inArray, isStringNumberMix } from '@/helpers/util'
import { useGroup, useGroupItem } from '@/hooks/use-group'
import type { ModelValue, OptionItem } from './types'
import type { StyleObject } from '../helpers/types'
import {
  checkboxOrRadioEmits,
  checkboxOrRadioGroupProps,
  checkboxOrRadioProps
} from '@/Checkbox/checkbox-radio'

type GroupProps = ExtractPropTypes<typeof checkboxOrRadioGroupProps> & {
  modelValue: ModelValue | ModelValue[]
}

interface GroupOptions {
  props: GroupProps
  onChange: (uid: number) => void
}

interface GroupItem {
  uid: number
  getInputChecked: () => boolean
  getValue: () => number | string
  setChecked: (checked: boolean) => void
}

export function useCheckboxOrRadio(
  props: ExtractPropTypes<typeof checkboxOrRadioProps>,
  { emit }: SetupContext<typeof checkboxOrRadioEmits>,
  name: string
) {
  const instance = getCurrentInstance() as ComponentInternalInstance
  const groupOptions = inject<GroupOptions | null>(
    `fx${capitalize(name)}Options`,
    null
  )
  const input = ref<HTMLInputElement>()

  const name2 = computed(() => {
    return groupOptions?.props.name || props.name || ''
  })
  const disabled2 = computed(() => {
    return groupOptions?.props.disabled ?? props.disabled
  })

  function getValue() {
    return props.value
  }

  function getInputEl() {
    return input.value as HTMLInputElement
  }

  function getInputChecked() {
    return !!getInputEl().checked
  }

  function setChecked(checked = true) {
    getInputEl().checked = checked
  }

  function onChange(e: Event) {
    if (groupOptions) {
      groupOptions.onChange(instance.uid)
    } else {
      const checked = !!(e.target as HTMLInputElement).checked
      emit('update:checked', checked)
      emit('change', checked)
    }
  }

  watch(
    () => props.checked,
    val => {
      if (groupOptions) {
        return
      }

      const $input = getInputEl()
      const checked = !!val

      if (checked !== $input.checked) {
        $input.checked = checked
      }
    }
  )

  useGroupItem<GroupItem>(name, {
    uid: instance.uid,
    getInputChecked,
    getValue,
    setChecked
  })

  onMounted(() => {
    const $input = getInputEl()

    let checked: boolean
    if (groupOptions) {
      checked =
        name === 'checkbox'
          ? Array.isArray(groupOptions.props.modelValue) &&
            inArray(props.value, groupOptions.props.modelValue)
          : props.value === groupOptions.props.modelValue
    } else {
      checked = !!props.checked
    }

    if (checked !== $input.checked) {
      $input.checked = $input.defaultChecked = checked
    }
  })

  const styles = computed(() => {
    const { activeColor } = groupOptions?.props || props
    const obj: StyleObject = {}

    activeColor && (obj['--fx-active-color'] = activeColor)
    // size != null &&
    //   size > 0 &&
    //   (obj['--fx-size'] = parseFloat(size as string) + 'px')

    return obj
  })

  return {
    input,
    name2,
    disabled2,
    onChange,
    styles
  }
}

interface UpdateValueOptions {
  isChange: boolean
  children: GroupItem[]
  uid: number | undefined
}

interface WatchValueOptions {
  children: GroupItem[]
  value: ModelValue | ModelValue[]
}

interface UseGroupOptions {
  name: string
  updateValue: (options: UpdateValueOptions) => ModelValue | ModelValue[]
  watchValue: (options: WatchValueOptions) => void
}

export function useCheckboxOrRadioGroup(
  props: GroupProps,
  { name, updateValue, watchValue }: UseGroupOptions
) {
  const root = ref<HTMLElement>()
  const { children } = useGroup<GroupItem>(name)

  function _updateValue(isChange: boolean, uid?: number) {
    return updateValue({ isChange, children, uid })
  }

  function onChange(uid: number) {
    _updateValue(true, uid)
  }

  watch(
    () => props.modelValue,
    value => {
      watchValue({ children, value })
    },
    {
      deep: true
    }
  )

  const options2 = computed(() => {
    const ret: OptionItem[] = []

    if (Array.isArray(props.options)) {
      props.options.forEach(v => {
        if (isStringNumberMix(v)) {
          ret.push({
            value: v as string,
            label: v.toString()
          })
        } else {
          ret.push({
            value: (v as OptionItem).value,
            label: (v as OptionItem).label.toString()
          })
        }
      })
    }

    return ret
  })

  onMounted(() => _updateValue(false))

  provide(`fx${capitalize(name)}Options`, {
    props,
    onChange
  } as GroupOptions)

  return {
    root,
    onChange,
    options2
  }
}
