<template>
  <div class="fx-avatar-group" :class="['count--' + (children.length || 1)]">
    <slot></slot>
    <Avatar
      class="fx-avatar-group_count"
      v-if="totalCount != null"
      :color="countColor"
    >
      <span
        class="fx-avatar-group_count-number"
        :class="['size--' + totalCountStr.length]"
      >
        {{ totalCountStr }}
      </span>
    </Avatar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'
import Avatar from './Avatar.vue'
import { useGroup } from '@/hooks/use-group'
import { avatarProps } from '@/Avatar/avatar'
import { simpleNumber } from '@/helpers/util'

export default defineComponent({
  name: 'fx-avatar-group',
  components: { Avatar },
  props: {
    ...avatarProps,
    totalCount: {
      type: Number,
      default: null
    },
    countColor: {
      type: [String, Object]
    }
  },
  setup(props) {
    const { children } = useGroup('avatar')

    provide('fxAvatarGroupOptions', props)

    const totalCountStr = computed(() => {
      return simpleNumber(props.totalCount)
    })

    return { children, totalCountStr }
  }
})
</script>
