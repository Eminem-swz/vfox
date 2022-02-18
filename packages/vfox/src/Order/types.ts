export type OnDelete = (payload: {
  type: string
  index: number
  item: {
    id: string | number
  }
}) => void
