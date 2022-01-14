import type { IconData } from '../Icon/types'
import type { StateType } from '../helpers/types'

export type ButtonOption = {
  text: string
  icon: IconData
  type?: StateType
}

export type OnButtonClick = (
  payload: {
    item: {
      text: string
    }
    index: number
  },
  buttonEl: HTMLElement
) => void
