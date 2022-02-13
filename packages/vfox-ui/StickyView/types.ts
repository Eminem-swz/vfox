export interface StickyViewItem {
  name: string
  index: number
}

export type OnChange = (payload: { activeIndex: number }) => void

export interface ScrollToOptions {
  offset: number
}

export interface ScrollToIndexOptions {
  index: number
}
