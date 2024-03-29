import type { StateType } from '../helpers/types'

export type ButtonOption = {
  text: string
  type?: StateType
}

export type OnButtonClick = (payload: {
  item: Required<ButtonOption>
  index: number
}) => void
