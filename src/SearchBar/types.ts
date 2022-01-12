export interface SearchBarSuggestItem {
  text: string | number
  tags?: string[]
}

export type SearchBarSuggestList = (string | number | SearchBarSuggestItem)[]

export type SearchBarSetSuggestList = (res: SearchBarSuggestList) => void

export type SearchBarOnInput = (
  payload: {
    type: string
    text: string
  },
  setSuggestList: SearchBarSetSuggestList
) => void
