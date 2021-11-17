import { App } from 'vue'

export type SFCWithInstall<T> = T & { install(app: App): void }

export type DataValue =
  | Date
  | null
  | string
  | number
  | boolean
  | string[]
  | number[]
  | Record<string, never>
  | never

export type DataObject = {
  [propName: string]:
    | DataValue
    | DataValue[]
    | DataObject
    | DataObject[]
    | number[][]
    | string[][]
}

export type AnyObject = Record<string, any>
export type EmptyObject = Record<string, never>
export type StyleObject = Record<string, string>

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
