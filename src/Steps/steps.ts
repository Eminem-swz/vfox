import { computed, inject, provide, ref, toRef } from 'vue'
import { useList, useListItem } from '@/hooks/use-list'
import { capitalize } from '@/helpers/util'
import { UseProps, UseCtx } from '../hooks/types'

export const stepsEmits = ['update:activeIndex']

export function useStepList(props: UseProps, ctx: UseCtx, name: string) {
  const { list } = useList(name, $items => {
    if (props.activeIndex >= $items.length) {
      ctx.emit('update:activeIndex', $items.length - 1)
    }
  })

  provide(`fx${capitalize(name)}ActiveIndex`, toRef(props, 'activeIndex'))

  return { list }
}

export function useStepItem(name: string) {
  const activeIndex = inject(`fx${capitalize(name)}ActiveIndex`, ref(0))
  const root = ref<HTMLElement>()

  const { index } = useListItem(name, root)

  const active = computed(() => {
    return activeIndex.value === index.value
  })

  const finish = computed(() => {
    return index.value < activeIndex.value
  })

  return {
    root,
    index,
    active,
    finish
  }
}
