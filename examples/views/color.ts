import Color from 'colorfuls'

const hueStep = 2
const saturationStep = 0.16
const saturationStep2 = 0.05
const brightnessStep1 = 0.05
const brightnessStep2 = 0.15
const lightColorCount = 5
const darkColorCount = 4

export function getColor(color: any, index: number) {
  const isLight = index <= 6
  const hsv = Color(color).hsv().toRawObject()

  const i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1
  // i 为index与6的相对距离

  return Color({
    h: getHue(hsv.h * 360, i, isLight),
    s: getSaturation(hsv.s, i, isLight) * 100 + '%',
    v: getValue(hsv.v, i, isLight) * 100 + '%'
  })
    .hex()
    .toHex()
}

// getHue 获取色相渐变

function getHue(h: number, i: number, isLight: boolean) {
  let hue: number
  if (h >= 60 && h <= 240) {
    // 冷色调
    // 减淡变亮 色相顺时针旋转 更暖
    // 加深变暗 色相逆时针旋转 更冷
    hue = isLight ? h - hueStep * i : h + hueStep * i
  } else {
    // 暖色调
    // 减淡变亮 色相逆时针旋转 更暖
    // 加深变暗 色相顺时针旋转 更冷
    hue = isLight ? h + hueStep * i : h - hueStep * i
  }
  if (hue < 0) {
    hue += 360
  } else if (hue >= 360) {
    hue -= 360
  }
  return hue
}

// getSaturation 获取饱和度渐变
function getSaturation(s: number, i: number, isLight: boolean) {
  let saturation: number
  if (isLight) {
    // 减淡变亮 饱和度迅速降低
    saturation = s - saturationStep * i
  } else if (i == darkColorCount) {
    // 加深变暗-最暗 饱和度提高
    saturation = s + saturationStep
  } else {
    // 加深变暗 饱和度缓慢提高
    saturation = s + saturationStep2 * i
  }
  if (saturation > 1) {
    saturation = 1
  }
  if (isLight && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1
  }
  if (saturation < 0.06) {
    saturation = 0.06
  }
  return saturation
}

// getValue 获取明度渐变
function getValue(v: number, i: number, isLight: boolean) {
  let value: number
  if (isLight) {
    // 减淡变亮
    value = v + brightnessStep1 * i
  } else {
    // 加深变暗幅度更大
    return v - brightnessStep2 * i
  }

  if (value > 1) {
    value = 1
  }

  return value
}
