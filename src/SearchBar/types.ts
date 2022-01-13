export interface SuggestItem {
  text: string | number
  tags?: string[]
}

export type SuggestList = (string | number | SuggestItem)[]

export type SetSuggestList = (res: SuggestList) => void

export type OnInput = (
  payload: {
    type: string
    text: string
  },
  setSuggestList: SetSuggestList
) => void
