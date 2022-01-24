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
import { inject, defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import { Icon } from '../Icon'
import { Badge } from '../Badge'
import { Image } from '../Image'
import {
  colorValidator,
  createEnumsValidator,
  getEnumsValue
} from '../helpers/validator'
import {
  AVATAR_SHAPE_TYPES,
  getAvatarSize,
  avatarProps
} from '../Avatar/avatar'
import type { ShapeType, UserSizeType } from './types'
import { useGroupItem } from '../hooks/use-group'
import { isNumber } from '../helpers/util'
import type { StyleObject } from '../helpers/types'
import { handleBadge } from '../Badge/badge'
import type { BadgeOption, Option as HandleBadgeOption } from '../Badge/types'
import { getColorObject } from '../helpers/color'

type Gender = 'man' | 'woman'
const GenderNames = ['woman', 'man']

export default defineComponent({
  name: 'fx-avatar',
  components: { Badge, Image, Icon },
  props: {
    ...avatarProps,
    shape: {
      type: String as PropType<ShapeType>,
      validator: createEnumsValidator(AVATAR_SHAPE_TYPES),
      default: null
    },
    src: {
      type: String,
      default: null
    },
    badge: {
      type: [Number, String, Object] as PropType<BadgeOption>
    },
    gender: {
      type: String as PropType<Gender>
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup(props) {
    const groupOptions = inject<{ size: UserSizeType } | null>(
      'fxAvatarGroupOptions',
      null
    )

    useGroupItem('avatar', Symbol('uid'))

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
      let badge: HandleBadgeOption

      if (props.gender && GenderNames.includes(props.gender)) {
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
