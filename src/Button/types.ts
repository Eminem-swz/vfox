import { SizeType } from '../helpers/types'

export type ButtonShapeType = 'rectangle' | 'round' | 'circle' | 'square'
export type ButtonPatternType =
  | 'default'
  | 'solid'
  | 'dashed'
  | 'borderless'
  | 'gradient'

export interface ButtonGroupOptions {
  size: SizeType
  pattern: ButtonPatternType
  shape: ButtonShapeType
}
