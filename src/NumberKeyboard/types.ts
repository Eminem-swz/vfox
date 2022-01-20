export type OnDelete = (payload: { deleteKey: string }) => void
export type OnClose = (payload: { source: string }) => void

export interface NumberKeyboardItem {
  icon?: string
  text: string
  type: 'text' | 'confirm' | 'backspace'
  span?: number
}
