export type OnChange = (payload: {
  activeIndex: number
  current: string
}) => void

export interface ImageObject {
  src: string
  width: number
  height: number
  initialWidth: number
  initialHeight: number
  naturalWidth: number
  naturalHeight: number
  offsetTop: number
  offsetLeft: number
  loaded: boolean
}
