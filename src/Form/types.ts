import type { RuleItem, RuleType } from 'async-validator'
import type { UseProps } from '../hooks/types'

export type FormValue = string | number | boolean | Date

export interface FormRuleValidate {
  (value: FormValue | FormValue[], rules?: FormRuleItem[]): Promise<
    boolean | void
  >
}

export interface FormGroupItemOut {
  getFormName: () => string
  validate: FormRuleValidate
}

export interface FormRuleItem extends RuleItem {
  trigger?: string
}

export interface FormRules {
  [propName: string]: FormRuleItem[]
}

export type FormRuleType = RuleType

export type HookFormValue<T extends FormValue> = () => T | T[]
export interface FormItemOut<T extends FormValue> {
  uid: number
  getFormName: () => string
  hookFormValue: HookFormValue<T>
  reset?: () => T | T[]
}
export interface FormInputElement extends HTMLInputElement {
  _fxFormItemOut: FormItemOut<FormValue>
}
export interface FormItemProvide {
  props: UseProps
  validateAfterEventTrigger: (
    type: string,
    value: FormValue | FormValue[]
  ) => void
}
