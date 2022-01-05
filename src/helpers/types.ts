import { App } from 'vue'

export type { default as TypeException } from '../helpers/exception'

export type SFCWithInstall<T> = T & { install(app: App): void }

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
  (res: { type: string } & AnyObject): void
}

export type EasingType = 'linear' | 'swing'

export interface Noop {
  (): void
}

export type PlacementType = 'bottom' | 'top' | 'left' | 'right'
export type StateType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
export type SizeType = 'large' | 'middle' | 'small'
