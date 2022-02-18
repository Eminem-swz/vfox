import { SizeType } from '../helpers/types'

export type ShapeType = 'rectangle' | 'round' | 'circle' | 'square'
export type PatternType =
  | 'default'
  | 'solid'
  | 'dashed'
  | 'borderless'
  | 'gradient'

export interface ButtonGroupOptions {
  size: SizeType
  pattern: PatternType
  shape: ShapeType
}
