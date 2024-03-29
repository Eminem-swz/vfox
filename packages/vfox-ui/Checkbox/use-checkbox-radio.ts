import { computed, onMounted, ref, watch, inject, provide } from 'vue'
import type { SetupContext, ExtractPropTypes } from 'vue'
import { capitalize, isStringNumberMix } from '../helpers/util'
import { useGroup, useGroupItem } from '../hooks/use-group'
import type { ModelValue, OptionItem } from './types'
import type { StyleObject } from '../helpers/types'
import {
  checkboxOrRadioEmits,
  checkboxOrRadioGroupProps,
  checkboxOrRadioProps
} from '../Checkbox/checkbox-radio'

interface GroupOptions {
  props: ExtractPropTypes<typeof checkboxOrRadioGroupProps> & {
    modelValue: ModelValue | ModelValue[]
  }
  onChange: (uid: symbol) => void
}

interface GroupItem {
  uid: symbol
  getInputChecked: () => boolean
  getValue: () => number | string
  setChecked: (checked: boolean) => void
}

export function useCheckboxOrRadio(
  props: ExtractPropTypes<typeof checkboxOrRadioProps>,
  { emit }: SetupContext<typeof checkboxOrRadioEmits>,
  name: string
) {
  const uid = Symbol()
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
      groupOptions.onChange(uid)
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
    uid,
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
            groupOptions.props.modelValue.includes(props.value)
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

export function useCheckboxOrRadioGroup<T>(
  props: ExtractPropTypes<typeof checkboxOrRadioGroupProps> & {
    modelValue: T
  },
  {
    name,
    updateValue,
    watchValue
  }: {
    name: string
    updateValue: (options: {
      isChange: boolean
      children: GroupItem[]
      uid: symbol | undefined
    }) => T
    watchValue: (options: { children: GroupItem[]; value: T }) => void
  }
) {
  const root = ref<HTMLElement>()
  const { children } = useGroup<GroupItem>(name)

  function _updateValue(isChange: boolean, uid?: symbol) {
    return updateValue({ isChange, children, uid })
  }

  function onChange(uid: symbol) {
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
  })

  return {
    root,
    onChange,
    options2
  }
}
