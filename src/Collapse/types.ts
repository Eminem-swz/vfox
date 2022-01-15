export type ActiveName = string | number

export type OnChange = (payload: ActiveName[]) => void

export type ItemOnToggle = (payload: {
  name: ActiveName
  spread: boolean
}) => void
