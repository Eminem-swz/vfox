export type Option = Partial<{
  color: string
  content: string | number
  offset: number[]
  animated: boolean
  dot: boolean
  maxCount: number
  showZero: boolean
}>

export type BadgeOption = number | string | Option
