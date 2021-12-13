import dayjs from '@/helpers/day'
import type { PropType } from 'vue'
import { MODE_NAMES } from '@/DatePicker/date'
import type { ModeName, OptionFilter } from './types'
import type { ValueFormatter, ValueParser } from '../Picker/types'

export const commonProps = {
  modelValue: {
    type: [Date, String],
    default: null
  },
  // 格式化模板
  formatTemplate: {
    type: String,
    default: null
  },
  // 初始模式
  initialMode: {
    type: String as PropType<ModeName>,
    default: MODE_NAMES[0]
  },
  // 最小日期
  minDate: {
    type: Date,
    default: () => dayjs().startOf('day').subtract(9, 'year').toDate()
  },
  // 最大日期
  maxDate: {
    type: Date,
    default: () =>
      dayjs().add(1, 'day').startOf('day').subtract(1, 'second').toDate()
  },
  // 过滤器
  filter: {
    type: Function as PropType<OptionFilter>,
    default: () => true
  },
  formatter: {
    type: Function as PropType<ValueFormatter>
  },
  parser: {
    type: Function as PropType<ValueParser>
  }
}
