import { computed, ComputedRef, inject } from 'vue'
import type { UseProps } from '../hooks/types'
import { isNumber } from '@/helpers/util'
import { getEnumsValue } from '@/helpers/validator'
import {
  AVATAR_SHAPE_NAMES,
  BUTTON_SHAPE_NAMES,
  paragraphDefaultRow
} from '@/Skeleton/skeleton'

interface SkeletonProps extends UseProps {
  animated: boolean
  avatarShape: string | null
  buttonShape: string | null
}

export function useSubSkeleton(props: UseProps, subName: string) {
  const skeletonProps = inject<SkeletonProps | null>('fxSkeletonProps', null)

  let shapeClassName: ComputedRef<string> | null = null
  let paragraphSize: ComputedRef<number> | null = null

  if (subName === 'avatar') {
    shapeClassName = computed(() => {
      return (
        'shape--' +
        getEnumsValue(
          AVATAR_SHAPE_NAMES,
          props.shape ?? skeletonProps?.avatarShape
        )
      )
    })
  } else if (subName === 'button') {
    shapeClassName = computed(() => {
      return (
        'shape--' +
        getEnumsValue(
          BUTTON_SHAPE_NAMES,
          props.shape ?? skeletonProps?.buttonShape
        )
      )
    })
  }

  if (subName === 'paragraph') {
    paragraphSize = computed(() => {
      const row = props.row ?? skeletonProps?.paragraphRow

      return isNumber(row) && row > 0 ? row : paragraphDefaultRow
    })
  }

  const useAnimation: ComputedRef<boolean> = computed(() => {
    return skeletonProps?.animated ?? props.animated
  })

  return {
    shapeClassName,
    useAnimation,
    paragraphSize
  }
}
