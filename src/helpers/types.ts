import { App } from 'vue'

export type SFCWithInstall<T> = T & { install(app: App): void }

export type AnyObject = Record<string, any>
export type EmptyObject = Record<string, never>
export type StyleObject = Record<string, string>

export type DataValue = Date | null | string | number | boolean | never

export type DataObject = {
  [propName: string]:
    | DataValue
    | DataObject
    | (DataObject | DataValue)[]
    | EmptyObject
}

/**
 * Scroll
 */
export interface ScrollToOptions {
  offset: number
}
export interface ScrollToIndexOptions {
  index: number
  animated?: boolean
  viewPosition?: string | number
}
export interface ScrollToOffsetOptions {
  offset: number
  animated?: boolean
}

export interface Validator {
  (value: unknown): boolean
  _type: string
}

export type DomSelector = HTMLElement | string | Document

/**
 * 事件
 */
export type FxEventElement = HTMLElement | Document
export interface FxEventCallback {
  (e: Event, $el: HTMLElement): void
}
export interface FxCustomEventCallback {
  (res: { type: string } & DataObject): void
}

export type EasingType = 'linear' | 'swing'

export interface Noop {
  (): void
}

export type PlacementType = 'bottom' | 'top' | 'left' | 'right'
export type StateType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
export type SizeType = 'large' | 'middle' | 'small'
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
