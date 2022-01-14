export interface StickyViewItem {
  name: string
  index: number
}

export type OnChange = (payload: { activeIndex: number }) => void
