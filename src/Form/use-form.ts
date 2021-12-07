import {
  ref,
  computed,
  inject,
  getCurrentInstance,
  onMounted,
  ComponentInternalInstance,
  Ref,
  isRef
} from 'vue'
import { cloneData, isArray, isSameArray } from '@/helpers/util'
import type { UseProps, UseCtx } from '../hooks/types'
import type {
  FormValue,
  FormItemProvide,
  HookFormValue,
  FormInputElement
} from './types'

interface UseOptions<T extends FormValue> {
  hookFormValue?: HookFormValue<T>
  formValue: Ref<T> | Array<T>
  hookResetValue?: (input: HTMLInputElement) => T | T[]
}

export function useFormItem<T extends FormValue = string>(
  props: UseProps,
  { emit }: UseCtx,
  { hookFormValue, formValue, hookResetValue }: UseOptions<T>
) {
  const root = ref<HTMLElement>()
  const formItem = inject<FormItemProvide | null>('fxFormItem', null)
  let $input: FormInputElement

  const newHookFormValue = hookFormValue
    ? hookFormValue
    : function () {
        return isRef(formValue) ? formValue.value : cloneData(formValue)
      }

  const formName = computed<string>(() => {
    if (formItem) {
      return formItem.props.name || ''
    }
    return props.name || ''
  })

  function validateAfterEventTrigger(type: string, value: T | T[]) {
    formItem && formItem.validateAfterEventTrigger(type, value)
  }

  function formReset(value: T | T[]) {
    if (isRef(formValue)) {
      formValue.value = value as T
    } else {
      formValue.splice(0, Infinity, ...(value as T[]))
    }

    if (
      (isArray(formValue) &&
        !isSameArray(formValue as T[], props.modelValue)) ||
      (isRef(formValue) && formValue.value != props.modelValue)
    ) {
      emit('update:modelValue', newHookFormValue())
    }

    return cloneData(value)
  }

  function eventEmit(type: string) {
    const value = newHookFormValue()

    emit(type, {
      type,
      value
    })
    validateAfterEventTrigger(type, value)
  }

  function getInputEl() {
    return $input
  }

  function setItemOut($el: FormInputElement, uid: number) {
    $el._fxFormItemOut = {
      uid,
      getFormName() {
        return (formItem?.props.name as string) || ''
      },
      hookFormValue: newHookFormValue,
      reset() {
        return formReset(
          hookResetValue
            ? hookResetValue(getInputEl())
            : ((getInputEl()?.value || '') as T)
        )
      }
    }
  }

  onMounted(() => {
    const vm = getCurrentInstance() as ComponentInternalInstance

    $input = vm.refs.input as FormInputElement

    if (!$input) {
      const $inputs = (root.value as HTMLElement).querySelectorAll(
        '.fx-form-input'
      )

      for (let i = 0; i < $inputs.length; i++) {
        setItemOut($inputs[i] as FormInputElement, vm.uid)
      }
    } else {
      setItemOut($input, vm.uid)
    }
  })

  return {
    root,
    formName,
    validateAfterEventTrigger,
    getInputEl,
    hookFormValue: newHookFormValue,
    eventEmit
  }
}
