export const isMobile =
  /(iPhone|iPod|iPad|Android|ios)/i.test(navigator.userAgent) ||
  'ontouchstart' in document.documentElement

export const isIOS = /(iPhone|iPod|iPad|ios)/i.test(navigator.userAgent)
