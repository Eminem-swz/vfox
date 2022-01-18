export interface SuggestItem {
  text: string | number
  tags?: string[]
}

export type SuggestList = (string | number | SuggestItem)[]

export type SetSuggestList = (res: SuggestList) => void

export type OnInput = (
  payload: {
    text: string
  },
  setSuggestList: SetSuggestList
) => void

export type OnSearch = (payload: { text: string; source: string }) => void

export type OnFieldClick = (payload: { text: string }) => void
