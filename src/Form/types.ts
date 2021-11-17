import { RuleItem, RuleType } from 'async-validator'

export interface FormRuleValidate {
  (value: any, rules?: FormRuleItem[]): Promise<any>
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
