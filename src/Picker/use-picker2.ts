import { reactive, ref, watch } from 'vue'
import { isArray, cloneData, isSameArray, isFunction } from '@/helpers/util'
import type {
  ColRow,
  Labels,
  OptionItem,
  PickerValue,
  OptionsHandler,
  PickerDetail,
  PickerHandlers,
  PickerFormatValue
} from './types'
import type { Noop } from '../helpers/types'
import {
  validateValues,
  getFormatOptions,
  getColRows,
  updateArray
} from '@/Picker/util'
import type { UseProps, UseCtx } from '../hooks/types'

interface ViewUseOptions {
  name: 'cascader' | 'picker'
  afterUpdate: Noop
}

type ViewFormatter = () => PickerDetail

export function usePickerView(
  props: UseProps,
  { emit }: UseCtx,
  { name, afterUpdate }: ViewUseOptions,
  handlers: PickerHandlers
) {
  const cols = reactive<ColRow[][]>([])
  const formLabel = reactive<Labels>([])
  const formValue = reactive<PickerValue[]>([])
  const options2 = reactive<OptionItem[] | OptionItem[][]>([])
  const isCascade = ref(false)

  const cacheLabel = reactive<Labels>([])
  const cacheValue = reactive<PickerValue[]>([])

  const optionsHandler: OptionsHandler | null = handlers.optionsHandler || null

  function updateOptions(val: PickerValue[]) {
    const { options, isCascade: isCascade2 } = getFormatOptions(
      props.options,
      props.fieldNames,
      optionsHandler,
      name === 'cascader'
    )

    updateArray(options2, options)

    isCascade.value = isCascade2

    // 顺便更新一下values
    updateValue(val, true)
  }

  function updateValue(val: unknown, forceUpdate = false) {
    const values = handlers.parser(val)

    const { valid, value } = validateValues(
      values,
      options2,
      isCascade.value,
      optionsHandler
    )

    if ((valid && !isSameArray(value, formValue)) || forceUpdate) {
      update(value)

      updateArray(
        formLabel,
        value.length > 0 || name === 'picker' ? cacheLabel : []
      )
      updateArray(
        formValue,
        value.length > 0 || name === 'picker' ? cacheValue : []
      )
    }

    return getDetail()
  }

  function getDetail() {
    return formatter()
  }

  function addCache(item: { value: string | number; label: string }) {
    cacheValue.push(item.value)
    cacheLabel.push(item.label)
  }

  function update(selecteds: PickerValue[]) {
    !isCascade.value ? updateCols(selecteds) : updateCascadeCols(selecteds)

    if (name === 'picker') {
      updateArray(formLabel, cacheLabel)
      updateArray(formValue, cacheValue)
    }

    afterUpdate()
  }

  function clearCache() {
    updateArray(cacheLabel, [])
    updateArray(cacheValue, [])
  }

  /**
   * 更新多列展示效果
   */
  function updateCols(selecteds: PickerValue[]) {
    clearCache()

    if (options2.length === 0) {
      updateArray(cols, [])
      return []
    }

    cols.length = 0

    const options = (
      isArray(options2[0]) ? options2 : [options2]
    ) as OptionItem[][]

    options.forEach((subOptions, index) => {
      let hasSelected = false

      const rows: ColRow[] = []

      for (let i = 0; i < subOptions.length; i++) {
        const optionItem = subOptions[i]
        const row: ColRow = {
          value: optionItem.value,
          label: optionItem.label,
          hasChildren: false,
          indexes: [i],
          selected: false
        }

        if (optionItem.value == selecteds[index]) {
          hasSelected = true
          row.selected = true
          addCache(optionItem)
        }

        rows.push(row)
      }

      if (!hasSelected) {
        if (subOptions[0]) {
          rows[0].selected = true
          addCache(subOptions[0])
        }
      }

      cols.push(rows)
    })
  }

  /**
   * 日期等更新模式
   * @param selecteds 选择值
   */
  function updateVirtualOptionsCols(selecteds: PickerValue[]) {
    clearCache()

    if (selecteds.length === 0) {
      // 如果没有默认值，尝试获取默认值
      selecteds = getCascadeDefaultSelecteds()
    }

    cols.length = 0

    const getRows = optionsHandler as OptionsHandler
    let colIndex = 0
    let rows = getRows(colIndex)
    let lastGroupSelected = false

    for (let i = 0; i <= selecteds.length; i++) {
      const selected = selecteds[i]

      let nextParent: ColRow | null = null
      lastGroupSelected = false

      if (rows) {
        for (let j = 0; j < rows.length; j++) {
          const row = rows[j]

          if (selected != null && row.value === selected) {
            // 找到
            row.selected = true
            lastGroupSelected = true

            if (row.hasChildren) {
              nextParent = row
              colIndex++
            }

            addCache({
              label: row.label,
              value: row.value
            })
          }
        }

        cols.push(rows)
      }

      if (!nextParent) {
        break
      } else {
        rows = getRows(colIndex, nextParent)
      }
    }

    if (!(name === 'cascader') && !lastGroupSelected) {
      const index = 0

      let lastColFirstRow: ColRow | null = rows[index]

      while (lastColFirstRow) {
        lastColFirstRow.selected = true
        addCache({
          label: lastColFirstRow.label,
          value: lastColFirstRow.value
        })

        if (lastColFirstRow.hasChildren) {
          colIndex++
          rows = getRows(colIndex, lastColFirstRow)
          cols.push(rows)

          lastColFirstRow = rows[0]
        } else {
          lastColFirstRow = null
        }
      }
    }
  }

  /**
   * 级联更新模式
   * @param selecteds 选择值
   */
  function updateCascadeCols(selecteds: PickerValue[]) {
    if (isFunction(optionsHandler)) {
      updateVirtualOptionsCols(selecteds)
      return
    }

    clearCache()

    cols.length = 0

    let optionList: OptionItem[] = options2 as OptionItem[]
    let rows = getColRows(optionList, [])

    if (selecteds.length === 0) {
      // 如果没有默认值，尝试获取默认值
      selecteds = getCascadeDefaultSelecteds()
    }

    let lastGroupSelected = false

    for (let i = 0; i <= selecteds.length; i++) {
      const selected = selecteds[i]

      let nextParent: OptionItem | null = null
      let nextParentIndexes: number[] = []
      lastGroupSelected = false

      if (rows) {
        for (let j = 0; j < rows.length; j++) {
          const optionItem = optionList[j]
          const row = rows[j]

          if (selected != null && row.value === selected) {
            // 找到
            row.selected = true
            lastGroupSelected = true

            if (row.hasChildren) {
              nextParent = optionItem
              nextParentIndexes = row.indexes
            }

            addCache(optionItem)
          }
        }

        cols.push(rows)
      }

      if (!nextParent) {
        break
      } else {
        optionList = nextParent.children
        rows = getColRows(optionList, [...nextParentIndexes])
      }
    }

    if (!(name === 'cascader') && !lastGroupSelected) {
      const index = 0

      let lastGroupFirstItem: OptionItem | null = optionList[index]

      while (lastGroupFirstItem) {
        const lastColFirstRow = rows[index]
        lastColFirstRow.selected = true
        addCache(lastGroupFirstItem)

        if (lastColFirstRow.hasChildren) {
          optionList = lastGroupFirstItem.children
          rows = getColRows(optionList, [...lastColFirstRow.indexes])

          cols.push(rows)

          lastGroupFirstItem = optionList[0]
        } else {
          lastGroupFirstItem = null
        }
      }
    }
  }

  /**
   * 非级联更新选择项
   */
  function updateColSelected(colIndex: number, current: number) {
    ;(cols as ColRow[][])[colIndex].forEach((row, index) => {
      if (index === current) {
        formValue[colIndex] = row.value
        formLabel[colIndex] = row.label
        row.selected = true
      } else {
        row.selected = false
      }
    })
  }

  /**
   * 获取默认选择数据
   * @summary 主要用于一些日期啥的，可以默认当天
   */
  function getCascadeDefaultSelecteds() {
    const selecteds = handlers.defaultValueHandler
      ? handlers.defaultValueHandler()
      : []

    if (selecteds.length > 0) {
      return selecteds
    }

    function getFirstSelected(
      values: PickerValue[],
      optionList: OptionItem[]
    ): PickerValue[] {
      const optionItem = optionList[0]

      if (optionItem) {
        values.push(optionItem.value)

        if (optionItem.children.length > 0) {
          return getFirstSelected(values, optionItem.children)
        }
      }

      return values
    }

    return name === 'cascader'
      ? []
      : getFirstSelected([], options2 as OptionItem[])
  }

  function getValuesByRow(row: ColRow) {
    if (row.values) {
      return row.values as PickerValue[]
    }

    const values: PickerValue[] = []
    const indexes = row.indexes
    let i = 0
    let options = options2 as OptionItem[]
    let optionItem = options[indexes[i]]

    while (options.length > 0 && i < indexes.length && optionItem) {
      values.push(optionItem.value)
      options = optionItem.children
      i++
      optionItem = options[indexes[i]]
    }

    return values
  }

  const formatter: ViewFormatter = () => {
    const ret = handlers.formatter(cloneData(formValue), cloneData(formLabel))

    if ((ret as PickerDetail)?.value) {
      return {
        value: (ret as PickerDetail).value,
        label: (ret as PickerDetail).label ?? ''
      }
    }

    return {
      value: ret as PickerFormatValue,
      label: handlers.labelFormatter(cloneData(formLabel))
    }
  }

  function emitValue() {
    emit('update:modelValue', formatter().value)
  }

  function onChange() {
    emitValue()
    emit('change', Object.assign({ type: 'change' }, getDetail()))
  }

  watch(
    [() => props.options, () => props.fieldNames],
    () => updateOptions(formValue),
    {
      deep: true
    }
  )

  watch(
    () => props.modelValue,
    val => updateValue(val),
    {
      deep: true
    }
  )

  updateOptions(props.modelValue)

  // picker 要默认数据
  if (name === 'picker') {
    emitValue()
  }

  return {
    cols,
    cacheLabel,
    cacheValue,
    formLabel,
    formValue,
    isCascade,
    getDetail,
    update,
    updateColSelected,
    getValuesByRow,
    updateValue,
    onChange
  }
}
