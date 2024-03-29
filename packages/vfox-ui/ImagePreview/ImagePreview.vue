<template>
  <teleport to="body">
    <div
      class="fx-preview-image fx-popup"
      :class="{ visible: visible2 }"
      :style="{ zIndex }"
      v-bind="$attrs"
      v-show="isShow"
    >
      <div class="fx-mask"></div>
      <Swiper
        v-if="swiperInit"
        v-model:activeIndex="activeIndex"
        :navigation-buttons="navigationButtons"
        @click="onPreviewClick"
        @change="onSwiperChange"
        @animated="onSwiperAnimated"
      >
        <SwiperItem v-for="(item, index) in images" :key="index">
          <div class="fx-preview-image_image-container">
            <Image
              :src="item.src"
              :mode="'aspectFit'"
              @load="onImageLoad"
              :class="{ animated: zoomAnimated }"
              :style="{
                width: item.width + 'px',
                height: item.height + 'px',
                'margin-left': item.offsetLeft + 'px',
                'margin-top': item.offsetTop + 'px'
              }"
              @touchstart="onImageTouchStart($event, item)"
              @touchmove="onImageTouchMove($event, item)"
              @touchend="onImageTouchEnd($event, item)"
            />
          </div>
        </SwiperItem>
      </Swiper>
      <div class="fx-preview-image_pagination">
        {{ activeIndex + 1 }} / {{ urls.length }}
      </div>
      <div class="fx-preview-image_close">
        <slot name="close" :activeIndex="activeIndex">
          <Button
            v-if="showClose"
            @click.stop="onCloseClick"
            icon="CloseOutlined"
            size="large"
            pattern="borderless"
            shape="square"
            :ghost="true"
          ></Button>
        </slot>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { Button } from '../Button'
import { Image } from '../Image'
import { Swiper, SwiperItem } from '../Swiper'
import { isStringArray, rangeNumber } from '../helpers/util'
import { usePopup } from '../popup/use-popup'
import { popupEmits, popupProps } from '../popup/popup'
import type { OnLoad as ImageOnLoad } from '../Image/types'
import type { FnArgs } from '../helpers/types'
import type { OnChange, ImageObject } from './types'

type ImageCoordsImage = {
  width: number
  height: number
}

type ImageCoordsScroll = {
  top: number
  left: number
  maxTop: number
  maxLeft: number
}

interface ImageCoords {
  start: {
    pageX: number
    pageY: number
  }
  start2?: {
    pageX: number
    pageY: number
  }
  image?: ImageCoordsImage
  scroll?: ImageCoordsScroll
  inZoom?: boolean
  inZoomEnd?: boolean
  hasZoom?: boolean
  inMove?: boolean
}

interface DistanceOptions {
  pageX: number
  pageY: number
}

export default defineComponent({
  name: 'fx-image-preview',
  components: { Button, Swiper, SwiperItem, Image },
  props: {
    ...popupProps,
    urls: {
      type: Array as PropType<string[]>,
      validator: (val: string) => isStringArray(val),
      required: true
    },
    current: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: false
    },
    navigationButtons: {
      type: Boolean,
      default: false
    },
    imageHighRendering: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    ...popupEmits,
    'update:current': (current: string) => typeof current === 'string',
    change: (payload: FnArgs<OnChange>[0]) =>
      payload &&
      typeof payload.activeIndex === 'number' &&
      typeof payload.current === 'string'
  },
  setup(props, ctx) {
    const { emit } = ctx
    const activeIndex = ref(0)
    const images = reactive<ImageObject[]>([])
    const zoomAnimated = ref(false)
    const swiperInit = ref(false)

    const popup = usePopup(props, ctx, {})

    let coords: ImageCoords | null

    function onImageTouchStart(e: TouchEvent, item: ImageObject) {
      zoomAnimated.value = false

      if (e.touches.length >= 2) {
        e.preventDefault()
        e.stopPropagation()

        coords = {
          start: {
            pageX: e.touches[0].pageX,
            pageY: e.touches[0].pageY
          },
          start2: {
            pageX: e.touches[1].pageX,
            pageY: e.touches[1].pageY
          },
          image: {
            width: item.width,
            height: item.height
          },
          inZoom: true
        }
      } else {
        const { clientWidth, clientHeight } = document.documentElement

        if (item.width <= clientWidth && item.height <= clientHeight) {
          // 图片小于屏幕，不劫持滑动操作
        } else {
          coords = {
            start: {
              pageX: e.touches[0].pageX,
              pageY: e.touches[0].pageY
            },
            scroll: {
              top: (item.height - clientHeight) / 2 - item.offsetTop,
              left: (item.width - clientWidth) / 2 - item.offsetLeft,
              maxTop: item.height - clientHeight,
              maxLeft: item.width - clientWidth
            }
          }
        }
      }
    }

    function onImageTouchMove(e: TouchEvent, item: ImageObject) {
      if (!coords) {
        return
      }

      if (coords.inZoom) {
        if (!coords.inZoomEnd) {
          coords.hasZoom = true
          const scale =
            getDistance(e.touches[0], e.touches[1]) /
            getDistance(coords.start, coords.start2 as DistanceOptions)

          item.width = (coords.image as ImageCoordsImage).width * scale
          item.height = (coords.image as ImageCoordsImage).height * scale
        } else {
          // 放开一只手指就不执行缩放操作
        }
        e.preventDefault()
        e.stopPropagation()
      } else {
        const touch = e.touches[0]
        const scroll = coords.scroll as ImageCoordsScroll

        const offsetX = coords.start.pageX - touch.pageX
        const offsetY = coords.start.pageY - touch.pageY

        if (!coords.inMove) {
          const verticalMove = Math.abs(offsetY) > Math.abs(offsetX)

          if (
            (verticalMove && offsetY > 0 && scroll.top < scroll.maxTop) ||
            (verticalMove && offsetY < 0 && scroll.top > 0) ||
            (!verticalMove && offsetX > 0 && scroll.left < scroll.maxLeft) ||
            (!verticalMove && offsetX < 0 && scroll.left > 0)
          ) {
            coords.inMove = true
          }
        }

        if (coords.inMove) {
          const { offsetTop, offsetLeft } = getUpdateOffset(
            {
              top: Math.max(0, Math.min(scroll.maxTop, scroll.top + offsetY)),
              left: Math.max(
                0,
                Math.min(scroll.maxLeft, scroll.left + offsetX)
              ),
              isScrollValue: true
            },
            item
          )

          item.offsetTop = offsetTop
          item.offsetLeft = offsetLeft

          e.preventDefault()
          e.stopPropagation()
        } else {
          coords = null
        }
      }
    }

    function onImageTouchEnd(e: TouchEvent, item: ImageObject) {
      if (!coords) {
        return
      }

      e.preventDefault()
      e.stopPropagation()

      if (coords.hasZoom) {
        zoomAnimated.value = true
        if (item.width < item.initialWidth) {
          item.width = item.initialWidth
        } else if (item.width > item.naturalWidth) {
          item.width = item.naturalWidth
        }
        if (item.height < item.initialHeight) {
          item.height = item.initialHeight
        } else if (item.height > item.naturalHeight) {
          item.height = item.naturalHeight
        }

        const { offsetTop, offsetLeft } = getUpdateOffset(
          {
            top: item.offsetTop,
            left: item.offsetLeft,
            isScrollValue: false
          },
          item
        )
        item.offsetTop = offsetTop
        item.offsetLeft = offsetLeft
      }

      if (e.touches.length > 0) {
        // 放开一只手指
        coords.inZoomEnd = true
      } else {
        // 放开两只手指
        coords = null
      }
    }

    function getUpdateOffset(
      {
        top,
        left,
        isScrollValue
      }: { top: number; left: number; isScrollValue: boolean },
      item: ImageObject
    ) {
      const { clientHeight, clientWidth } = document.documentElement

      let offsetTop: number
      let offsetLeft: number

      if (item.height <= clientHeight) {
        offsetTop = 0
      } else {
        const diff = (item.height - clientHeight) / 2
        offsetTop = rangeNumber(isScrollValue ? diff - top : top, -diff, diff)
      }

      if (item.width <= clientWidth) {
        offsetLeft = 0
      } else {
        const diff = (item.width - clientWidth) / 2

        offsetLeft = rangeNumber(
          isScrollValue ? diff - left : left,
          -diff,
          diff
        )
      }

      return {
        offsetTop,
        offsetLeft
      }
    }

    function updateCurrent(val: string) {
      let hasUrl = false

      for (let i = 0, len = images.length; i < len; i++) {
        if (images[i].src === val) {
          if (activeIndex.value !== i) {
            activeIndex.value = i
          }
          hasUrl = true
          break
        }
      }

      if (!hasUrl && images[0]) {
        activeIndex.value = 0
        emit('update:current', images[0].src)
      }
    }

    function getDistance(p1: DistanceOptions, p2: DistanceOptions) {
      const x = p2.pageX - p1.pageX
      const y = p2.pageY - p1.pageY
      return Math.sqrt(x * x + y * y)
    }

    function onSwiperAnimated() {
      images.forEach((item, index) => {
        if (index !== activeIndex.value) {
          // 切走的图片恢复原有大小
          item.width = item.initialWidth
          item.height = item.initialHeight
          item.offsetTop = 0
          item.offsetLeft = 0
        }
      })
    }

    function onSwiperChange({ activeIndex }: { activeIndex: number }) {
      const current = props.urls[activeIndex]

      emit('update:current', current)

      emit('change', {
        activeIndex,
        current
      })
    }

    function onPreviewClick() {
      popup.customCancel('previewClick')
    }

    const onImageLoad: ImageOnLoad = ({ width, height, src }) => {
      if (props.imageHighRendering) {
        const dpr = window.devicePixelRatio || 1
        width = width / dpr
        height = height / dpr
      }

      for (let i = 0; i < images.length; i++) {
        const image = images[i]

        if (image.src === src) {
          const { clientWidth } = document.documentElement

          if (width > clientWidth) {
            image.width = clientWidth
            image.height = height * (clientWidth / width)
            // image.width = width
            // image.height = height
          } else {
            image.width = width
            image.height = height
          }
          image.naturalWidth = width
          image.naturalHeight = height
          image.initialWidth = image.width
          image.initialHeight = image.height
          image.loaded = true
          break
        }
      }
    }

    watch(
      () => props.urls,
      () => {
        const map: Record<string, ImageObject> = {}

        images.forEach(v => {
          map[v.src] = v
        })

        images.length = 0

        props.urls.forEach(url => {
          if (map[url]) {
            images.push(map[url])
          } else {
            images.push({
              src: url,
              width: 0,
              height: 0,
              initialWidth: 0,
              initialHeight: 0,
              naturalWidth: 0,
              naturalHeight: 0,
              offsetTop: 0,
              offsetLeft: 0,
              loaded: false
            })
          }
        })

        // updateCurrent(props.current)
      },
      {
        immediate: true,
        deep: true
      }
    )

    watch(
      () => props.current,
      val => updateCurrent(val),
      {
        immediate: true
      }
    )

    watch(popup.isShow, () => {
      swiperInit.value = true
    })

    return {
      ...popup,
      swiperInit,
      activeIndex,
      images,
      zoomAnimated,
      updateCurrent,
      onImageTouchStart,
      onImageTouchMove,
      onImageTouchEnd,
      onSwiperAnimated,
      onSwiperChange,
      onPreviewClick,
      onImageLoad
    }
  }
})
</script>
