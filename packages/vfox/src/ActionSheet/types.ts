export interface Option {
  name: string
  highlight?: boolean
  description?: string
  disabled?: boolean
}

export interface Detail {
  item: {
    name: string
  }
  index: number
}

export type OnConfirm = (payload: Detail) => void
