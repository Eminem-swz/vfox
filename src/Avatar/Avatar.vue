<template>
  <Badge
    class="fx-avatar"
    :class="['size--' + size2, 'shape--' + shape2]"
    :style="styles"
    v-bind="{ ...$attrs, ...badge2 }"
  >
    <slot>
      <Image
        class="fx-avatar_image"
        :src="src"
        mode="aspectFill"
        loadingIcon="UserOutlined"
      />
    </slot>
    <template #badge>
      <Icon v-if="gender === 'man'" icon="ManOutlined" />
      <Icon v-else-if="gender === 'woman'" icon="WomanOutlined" />
    </template>
  </Badge>
</template>

<script lang="ts">
import { inject, defineComponent, computed, getCurrentInstance } from 'vue'
import type { PropType, ComponentInternalInstance } from 'vue'
import { Icon } from '@/Icon'
import { Badge } from '@/Badge'
import { Image } from '@/Image'
import { createEnumsValidator, getEnumsValue } from '@/helpers/validator'
import { AVATAR_SHAPE_TYPES, getAvatarSize, avatarProps } from '@/Avatar/avatar'
import type { AvatarShapeType } from './types'
import { useGroupItem } from '@/hooks/use-group'
import { isNumber, inArray } from '@/helpers/util'
import type { StyleObject } from '../helpers/types'
import { handleBadge } from '@/Badge/badge'
import type { BadgeOptions } from '../Badge/types'
import { getColorObject, isColorValue } from '@/helpers/color'

type Gender = 'man' | 'woman'
const GenderNames = ['woman', 'man']

export default defineComponent({
  name: 'fx-avatar',
  components: { Badge, Image, Icon },
  props: {
    ...avatarProps,
    shape: {
      type: String as PropType<AvatarShapeType>,
      validator: createEnumsValidator(AVATAR_SHAPE_TYPES),
      default: null
    },
    src: {
      type: String,
      default: null
    },
    badge: {
      type: [Number, String, Object],
      default: null
    },
    gender: {
      type: String as PropType<Gender>,
      default: null
    },
    color: {
      type: [String, Object],
      validator: isColorValue
    }
  },
  setup(props) {
    const uid = (getCurrentInstance() as ComponentInternalInstance).uid
    const groupOptions = inject<{ size: number | string } | null>(
      'fxAvatarGroupOptions',
      null
    )

    useGroupItem('avatar', uid)

    const size2 = computed(() => {
      const { size } = groupOptions || props

      return getAvatarSize(size)
    })

    const shape2 = computed(() => {
      return getEnumsValue(
        AVATAR_SHAPE_TYPES,
        groupOptions ? 'circle' : props.shape
      )
    })

    const styles = computed(() => {
      const obj: StyleObject = {}

      if (isNumber(size2.value)) {
        const size = size2.value as number

        obj.width = size + 'px'
        obj.height = size + 'px'
        obj.fontSize = size / 2 + 'px'
      }

      const colorObj = getColorObject(props.color as string)
      if (colorObj.hasColor) {
        obj[`--fx-color`] = colorObj.varBackgroundColor
        obj[`--fx-front-color`] = colorObj.varFrontColor
      }

      return obj
    })

    const badge2 = computed(() => {
      let badge: BadgeOptions

      if (inArray(props.gender, GenderNames)) {
        badge = {
          color: props.gender === 'man' ? '#1890FF' : '#F759AB',
          content: 1
        }
      } else {
        badge = handleBadge(props.badge)
      }

      badge.offset = props.shape === 'circle' ? [-5, 5] : [0, 0]

      return badge
    })

    return {
      size2,
      shape2,
      styles,
      badge2
    }
  }
})
</script>
