import { useFormItem } from '@/Form/use-form'
import {
  computed,
  onMounted,
  ref,
  watch,
  inject,
  getCurrentInstance,
  ComponentInternalInstance,
  provide,
  Ref,
  isRef
} from 'vue'
import { capitalize, cloneData, inArray } from '@/helpers/util'
import { useGroup, useGroupItem } from '@/hooks/use-group'
import type { UseProps, UseCtx } from '../hooks/types'
import type { HookFormValue } from '../Form/types'
import type { ModelValue } from './types'

interface Options {
  formName: string
  props: UseProps
  onChange: (uid: number) => void
}

interface GroupItem {
  uid: number
  getInputChecked: () => boolean
  getValue: () => number | string
  setChecked: (checked: boolean) => void
}

export function useCheckboxOrRadio(props: UseProps, ctx: UseCtx, name: string) {
  const instance = getCurrentInstance() as ComponentInternalInstance
  const options = inject<Options | null>(`fx${capitalize(name)}Options`, null)
  const input = ref<HTMLInputElement>()
  const { emit } = ctx

  const formName = computed(() => {
    return options?.formName || props.name || ''
  })

  const disabled2 = computed(() => {
    return options?.props.disabled ?? props.disabled
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
    if (options) {
      options.onChange(instance.uid)
    } else {
      const checked = !!(e.target as HTMLInputElement).checked
      emit('update:checked', checked)
      emit('change', {
        type: 'change',
        checked
      })
    }
  }

  watch(
    () => props.checked,
    val => {
      if (options) {
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
    if (options) {
      checked =
        name === 'checkbox'
          ? inArray(props.value, options.props.modelValue)
          : props.value === options.props.modelValue
    } else {
      checked = !!props.checked
    }

    if (checked !== $input.checked) {
      $input.checked = $input.defaultChecked = checked
    }
  })

  return {
    input,
    formName,
    disabled2,
    onChange
  }
}

interface UpdateValueOptions {
  isChange: boolean
  children: GroupItem[]
  uid: number | undefined
  hookFormValue: HookFormValue<ModelValue>
}

interface WatchValueOptions {
  children: GroupItem[]
  value: ModelValue | ModelValue[]
}

interface UseGroupOptions {
  name: string
  updateValue: (options: UpdateValueOptions) => ModelValue | ModelValue[]
  watchValue: (options: WatchValueOptions) => void
  formValue: Ref<ModelValue> | ModelValue[]
}

export function useCheckboxOrRadioGroup(
  props: UseProps,
  ctx: UseCtx,
  { name, updateValue, watchValue, formValue }: UseGroupOptions
) {
  const { children } = useGroup<GroupItem>(name)

  function hookFormValue() {
    return isRef(formValue) ? formValue.value : cloneData(formValue)
  }

  const { formName, validateAfterEventTrigger, eventEmit, root } =
    useFormItem<ModelValue>(props, ctx, {
      formValue,
      hookFormValue,
      hookResetValue: () => _updateValue(true)
    })

  function _updateValue(isChange: boolean, uid?: number) {
    return updateValue({ isChange, children, uid, hookFormValue })
  }

  function onChange(uid: number) {
    _updateValue(true, uid)

    eventEmit('change')
  }

  function reset() {
    _updateValue(true)
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

  onMounted(() => _updateValue(false))

  provide(`fx${capitalize(name)}Options`, {
    props,
    onChange
  })

  return {
    root,
    formName,
    formValue,
    validateAfterEventTrigger,
    hookFormValue,
    reset,
    onChange
  }
}
