import { SetupContext } from 'vue'
import { AnyObject } from '../helpers/types'

export type PlacementType = 'bottom' | 'top' | 'left' | 'right'
export type StateType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
export type SizeType = 'large' | 'middle' | 'small'
export type ButtonShapeType = 'rectangle' | 'round' | 'circle' | 'square'
export type ButtonPatternType =
  | 'default'
  | 'solid'
  | 'dashed'
  | 'borderless'
  | 'gradient'
export type TagPatternType = 'light' | 'dark' | 'plain'
export type AvatarShapeType = 'circle' | 'square'
export type ColorStyle =
  | 'DustRed'
  | 'Volcano'
  | 'SunsetOrange'
  | 'CalendulaGold'
  | 'SunriseYellow'
  | 'Lime'
  | 'PolarGreen'
  | 'Cyan'
  | 'DaybreakBlue'
  | 'GeekBlue'
  | 'GoldenPurple'
  | 'Magenta'

export interface OnScrollCallback {
  (
    e: Event,
    res: {
      scrollTop: number
    }
  ): void
}

export interface CountTime {
  time: number
  days: string
  fullHours: string
  thousandsFullHours: string
  hours: string
  minutes: string
  seconds: string
  milliseconds: string
}

/**
 * form
 */
export type FormValue = string | number | boolean | Date
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

/**
 * popup
 */
export interface PopupCustomCancel {
  (key: string, focus?: boolean): void
}
export interface PopupCustomConfirm {
  (detail: AnyObject): void
}
export interface PopupPublicInstance {
  customCancel: PopupCustomCancel
  customConfirm: PopupCustomConfirm
}
export type PopupStyles = Partial<{
  zIndex: number
  top: string
  position: 'absolute'
}>
export type PopupVisibleState = 'show' | 'shown' | 'hide' | 'hidden'
export interface PopupVisibleStateChangeArgs {
  type: string
  state: PopupVisibleState
}

export type UseProps = Readonly<AnyObject>
export type UseCtx = SetupContext<string[]>

export interface UseEmit {
  (event: string, ...args: any[]): void
}

export interface EmitObject {
  [propName: string]:
    | boolean
    | number
    | string
    | Date
    | (boolean | number | string | Date)[]
}
