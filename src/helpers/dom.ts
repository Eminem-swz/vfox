import { camelCase2KebabCase, isNumber, objectForEach } from '../helpers/util'
import type { ViewPosition } from './types'

const docEl = document.documentElement

export function appendToBody($el: Element) {
  document.body.appendChild($el)
}

export function removeEl($el: Element) {
  $el.parentNode && $el.parentNode.removeChild($el)
}

export function addClassName($el: Element, className: string) {
  $el.classList.add(className)
}

export function removeClassName($el: Element, className: string) {
  $el.classList.remove(className)
}

export function hasClassName($el: Element, className: string) {
  return ([].slice.call($el.classList, 0) as string[]).includes(className)
}

export function getRelativeOffset(
  $el: HTMLElement | Document,
  $relativeEl: Element | Document = document,
  viewPosition: ViewPosition = 0
) {
  if ($el === document) {
    return { offsetTop: 0, offsetLeft: 0 }
  }

  $el = $el as HTMLElement
  $relativeEl = ($relativeEl === document ? docEl : $relativeEl) as HTMLElement

  let offsetTop = $el.offsetTop
  let offsetLeft = $el.offsetLeft

  const transform = window.getComputedStyle($el).transform
  if (transform && transform !== 'none') {
    const transformMatrix = transform.slice(7, transform.length - 1).split(', ')
    offsetLeft += parseFloat(transformMatrix[4])
    offsetTop += parseFloat(transformMatrix[5])
  }

  if ($el.offsetParent && $el.offsetParent !== $relativeEl) {
    const parent = getRelativeOffset(
      $el.offsetParent as HTMLElement,
      $relativeEl
    )

    offsetTop += parent.offsetTop
    offsetLeft += parent.offsetLeft
  }

  const viewPositionMap = new Map<ViewPosition, number>([
    ['start', 0],
    ['center', 0.5],
    ['end', 1],
    [0, 0],
    [0.5, 0.5],
    [1, 1]
  ])

  const viewPosition2 = viewPositionMap.get(viewPosition) ?? 0

  if (viewPosition2) {
    if (viewPosition2 === 1) {
      offsetTop -= $relativeEl.clientHeight - $el.clientHeight
      offsetLeft -= $relativeEl.clientWidth - $el.clientWidth
    } else {
      offsetTop -= $relativeEl.clientHeight / 2 - $el.clientHeight / 2
      offsetLeft -= $relativeEl.clientWidth / 2 - $el.clientWidth / 2
    }
  }

  return { offsetTop, offsetLeft }
}

/**
 * 获取长度值
 * @param size eg: 10 10vw 10vh 10px
 * @param defaultValue
 */
export function getSizeValue(size: unknown, defaultValue = 0) {
  if (isNumber(size)) {
    return size as number
  } else if (typeof size === 'string') {
    const matches = size.match(/^([\d.]+)((px)|(vw)|(vh)|)$/)

    if (matches) {
      let sizeNum = parseFloat(matches[1])

      if (matches[2] === 'vw') {
        sizeNum *= docEl.clientWidth / 100
      } else if (matches[2] === 'vh') {
        sizeNum *= docEl.clientHeight / 100
      }

      return sizeNum
    }
  }

  return defaultValue
}

/**
 * 指定条件获取 HTMLElement
 * @param selector 选择参数
 */
export function querySelector(selector: unknown) {
  let $el: HTMLElement | null = null

  if (selector instanceof HTMLElement) {
    $el = selector
  } else if (typeof selector === 'string') {
    $el = document.querySelector(selector)
  } else if (selector === document) {
    $el = docEl
  }

  return $el ?? null
}

function isDocument($el: HTMLElement | Document) {
  return $el === document || $el === document.documentElement
}

/**
 * 获取兼容滚动DOM节点
 */
export function getScrollDom($el: HTMLElement | Document = document) {
  if (isDocument($el)) {
    if (
      typeof document.compatMode !== 'undefined' &&
      document.compatMode !== 'BackCompat'
    ) {
      return docEl
    } else {
      return document.body
    }
  }

  return $el as HTMLElement
}

export function getScrollTop($el: HTMLElement | Document = document) {
  if (isDocument($el)) {
    return document.documentElement.scrollTop || document.body.scrollTop
  }

  return ($el as HTMLElement).scrollTop
}

export function setScrollTop($el: HTMLElement | Document, scrollTop: number) {
  if (isDocument($el)) {
    document.documentElement.scrollTop = scrollTop
    document.body.scrollTop = scrollTop
  } else {
    ;($el as HTMLElement).scrollTop = scrollTop
  }
}

export function scrollTo(
  $el: HTMLElement | Document,
  scrollNumber: number | { top: number; left: number },
  animated = true
) {
  const options = Object.assign(
    {
      behavior: animated ? 'smooth' : 'auto'
    },
    typeof scrollNumber === 'number'
      ? {
          top: scrollNumber,
          left: 0
        }
      : scrollNumber
  ) as ScrollToOptions

  if (isDocument($el)) {
    document.documentElement.scrollTo(options)
    document.body.scrollTo(options)
  } else {
    ;($el as HTMLElement).scrollTo(options)
  }
}

interface StyleObject {
  [propName: string]: string
}

export function styleObject2CssText(object: StyleObject) {
  const arr: string[] = []

  objectForEach(object, (v, k) => {
    arr.push(`${camelCase2KebabCase(k)}: ${v}`)
  })

  return arr.join('; ')
}

export function getParentTarget($el: HTMLElement, className: string) {
  while ($el) {
    if (hasClassName($el, className)) {
      return $el
    }

    $el = $el.parentElement as HTMLElement
  }

  return null
}
