import { FormValue } from '../hooks/types'
import { RuleItem, RuleType } from 'async-validator'

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
