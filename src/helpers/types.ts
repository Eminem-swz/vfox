import { App } from 'vue'

export type SFCWithInstall<T> = T & { install(app: App): void }

export interface DataObject<T = any> {
  [propName: string]: T
}

export type StyleObject = DataObject<string>

export type UseProps = Readonly<DataObject>

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
