import { onMounted, ref, watch } from 'vue'
import type { ExtractPropTypes, SetupContext } from 'vue'
import { cloneData, isSameArray, isEmpty } from '@/helpers/util'
import type {
  ColRow,
  OptionItem,
  PickerOptionsHandler,
  PickerHandlers
} from './types'
import type {
  SelectorValue,
  SelectorModelValue,
  SelectorDetail
} from '../SelectorField/types'
import { cloneDetail, isSameDetail, isSameValue } from '@/Picker/util'
import {
  getDefaultDetail,
  validateValues,
  getColRows,
  getFormatOptions,
  commonProps,
  pickerEmits,
  pickerPopupEmits
} from '@/Picker/picker'
import type { UseProps } from '../hooks/types'
import type { PopupCustomConfirm } from '../popup/types'

interface UseOptions {
  name: string
  handlers: PickerHandlers
}

export function usePicker(
  props: UseProps,
  ctx: SetupContext<typeof pickerEmits>,
  { name, handlers }: UseOptions
) {
  const root = ref<HTMLElement>()
  const { emit } = ctx
  const isInitPopup = ref(false)
  const popupVisible = ref(true)
  const fieldValue = ref('')
  const fieldLabel = ref('')
  const popup = ref()

  let detail = getDefaultDetail()

  function updateValue(val: unknown) {
    if (val == null) {
      // 解决 formily 强制null的问题
      return getDetail()
    }

    if (isEmpty(val) && val !== 0) {
      return updateDetail(getDefaultDetail())
    }

    if (popup.value) {
      return updateDetail(popup.value.updateValue(val))
    }

    if (!isSameValue(val, detail.value)) {
      // 如果value不同
      const { options, isCascade } = getFormatOptions(
        props.options || [],
        props.fieldNames || {},
        handlers.optionsHandler,
        name === 'cascader'
      )

      const { value, label, valid } = validateValues(
        parser(val, handlers),
        options,
        isCascade,
        handlers.optionsHandler
      )

      if (valid) {
        return updateDetail(formatter(value, label, handlers))
      }
    }

    return getDetail()
  }

  function updateDetail(newDetail: SelectorDetail) {
    detail = newDetail

    fieldValue.value = detail.value != null ? detail.value.toString() : ''
    fieldLabel.value = detail.label
    return getDetail()
  }

  function onFieldClick() {
    if (!props.disabled) {
      if (!isInitPopup.value) {
        isInitPopup.value = true
      } else {
        popupVisible.value = true
      }
    }
  }

  function getDetail() {
    return cloneDetail(detail)
  }

  function onChange() {
    popup.value && updateDetail(popup.value.getDetail())

    emit('update:modelValue', getDetail().value)
    emit('change', getDetail().value)
  }

  function onConfirm(_detail: SelectorDetail) {
    updateDetail(_detail)

    emit('update:modelValue', getDetail().value)
    emit('change', getDetail().value)
  }

  watch(
    [() => props.modelValue, () => props.options],
    () => updateValue(props.modelValue),
    {
      immediate: true
    }
  )

  watch([isInitPopup, popupVisible], ([isInit, visible]) => {
    if (isInit && visible) {
      emit('focus', { type: 'focus' })
    } else if (!visible) {
      emit('blur', { type: 'blur' })
    }
  })

  return {
    root,
    popup,
    isInitPopup,
    popupVisible,
    fieldValue,
    fieldLabel,
    updateValue,
    onFieldClick,
    onChange,
    onConfirm
  }
}

export function usePickerPopup(
  props: UseProps,
  { emit }: SetupContext<typeof pickerPopupEmits>,
  {
    customConfirm,
    onCancelClick
  }: {
    customConfirm: PopupCustomConfirm<SelectorDetail>
    onCancelClick: () => void
  }
) {
  const view = ref()

  let detail = getDefaultDetail()

  function beforeConfirm() {
    const newDetail =
      (view.value?.getDetail() as SelectorDetail) || getDefaultDetail()

    if (!isSameDetail(newDetail, detail)) {
      detail = newDetail

      // 跟picker-view不一样，改变数值时机是确定按钮
      emit('update:modelValue', getDetail().value)
      emit('change', getDetail().value)
    }

    return getDetail()
  }

  function onHeaderLeftClick() {
    onCancelClick()
  }

  function onHeaderRightClick() {
    customConfirm(beforeConfirm())
  }

  function getDetail() {
    return cloneDetail(detail)
  }

  function updateValue(val: unknown) {
    view.value && (detail = view.value.updateValue(val))

    return getDetail()
  }

  watch(
    () => props.modelValue,
    val => updateValue(val),
    {
      immediate: true
    }
  )

  watch(
    () => props.visible,
    val => val && view.value?.updatePos()
  )

  onMounted(
    () =>
      (!isEmpty(props.modelValue) || props.modelValue === 0) &&
      updateValue(props.modelValue)
  )

  return {
    view,
    updateValue,
    getDetail,
    onHeaderLeftClick,
    onHeaderRightClick
  }
}

interface ViewUseOptions {
  name: 'cascader' | 'picker'
  afterUpdate: (
    valueArray: SelectorValue[],
    labelArray: string[],
    cols: ColRow[][]
  ) => void
  handlers: PickerHandlers
}

export function usePickerView(
  props: ExtractPropTypes<typeof commonProps>,
  { emit }: SetupContext<any>,
  { name, afterUpdate, handlers }: ViewUseOptions
) {
  const cols = ref<ColRow[][]>([])

  const options2 = ref<OptionItem[] | OptionItem[][]>([])
  const isCascade = ref(false)

  let selectedLabels: string[] = []
  let selectedValues: SelectorValue[] = []

  const currentLabels = ref<string[]>([])
  const currentValues = ref<SelectorValue[]>([])

  const isPicker = name === 'picker'

  const optionsHandler: PickerOptionsHandler | null =
    handlers.optionsHandler || null

  function updateOptions() {
    const { options, isCascade: isCascade2 } = getFormatOptions(
      props.options,
      props.fieldNames,
      optionsHandler,
      !isPicker
    )

    options2.value = options

    isCascade.value = isCascade2
  }

  function updateOriginalValue(val: SelectorValue[], forceUpdate = false) {
    const { valid, value: values } = validateValues(
      val,
      options2.value,
      isCascade.value,
      optionsHandler
    )

    if ((valid && !isSameArray(values, currentValues.value)) || forceUpdate) {
      update(values)

      currentLabels.value = values.length > 0 || isPicker ? selectedLabels : []
      currentValues.value = values.length > 0 || isPicker ? selectedValues : []
    }

    return getDetail()
  }

  function updateValue(val: unknown, forceUpdate = false) {
    return updateOriginalValue(parser(val, handlers), forceUpdate)
  }

  function getDetail() {
    return formatter(
      cloneData(currentValues.value),
      cloneData(currentLabels.value),
      handlers
    )
  }

  function addCache(item: { value: string | number; label: string }) {
    selectedValues.push(item.value)
    selectedLabels.push(item.label)
  }

  function update(selecteds: SelectorValue[]) {
    !isCascade.value ? updateCols(selecteds) : updateCascadeCols(selecteds)

    if (isPicker) {
      currentLabels.value = selectedLabels
      currentValues.value = selectedValues
    }

    afterUpdate(selectedValues, selectedLabels, cols.value)
  }

  function clearCache() {
    selectedLabels = []
    selectedValues = []
  }

  /**
   * 更新多列展示效果
   */
  function updateCols(selecteds: SelectorValue[]) {
    clearCache()

    cols.value = []

    if (options2.value.length === 0) {
      return []
    }

    const options = (
      Array.isArray(options2.value[0]) ? options2.value : [options2.value]
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

      cols.value.push(rows)
    })
  }

  /**
   * 日期等更新模式
   * @param selecteds 选择值
   */
  function updateVirtualOptionsCols(selecteds: SelectorValue[]) {
    clearCache()

    if (selecteds.length === 0) {
      // 如果没有默认值，尝试获取默认值
      selecteds = getCascadeDefaultSelecteds()
    }

    cols.value = []

    const getRows = optionsHandler as PickerOptionsHandler
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

        cols.value.push(rows)
      }

      if (!nextParent) {
        break
      } else {
        rows = getRows(colIndex, nextParent)
      }
    }

    if (isPicker && !lastGroupSelected) {
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
          cols.value.push(rows)

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
  function updateCascadeCols(selecteds: SelectorValue[]) {
    if (typeof optionsHandler === 'function') {
      updateVirtualOptionsCols(selecteds)
      return
    }

    clearCache()

    cols.value = []

    let optionList: OptionItem[] = options2.value as OptionItem[]
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

        cols.value.push(rows)
      }

      if (!nextParent) {
        break
      } else {
        optionList = nextParent.children
        rows = getColRows(optionList, [...nextParentIndexes])
      }
    }

    if (isPicker && !lastGroupSelected) {
      const index = 0

      let lastGroupFirstItem: OptionItem | null = optionList[index]

      while (lastGroupFirstItem) {
        const lastColFirstRow = rows[index]
        lastColFirstRow.selected = true
        addCache(lastGroupFirstItem)

        if (lastColFirstRow.hasChildren) {
          optionList = lastGroupFirstItem.children
          rows = getColRows(optionList, [...lastColFirstRow.indexes])

          cols.value.push(rows)

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
    ;(cols.value as ColRow[][])[colIndex].forEach((row, index) => {
      if (index === current) {
        currentValues.value[colIndex] = row.value
        currentLabels.value[colIndex] = row.label
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
    const selecteds = handlers.defaultValueGetter
      ? handlers.defaultValueGetter()
      : []

    if (selecteds.length > 0) {
      return selecteds
    }

    function getFirstSelected(
      values: SelectorValue[],
      optionList: OptionItem[]
    ): SelectorValue[] {
      const optionItem = optionList[0]

      if (optionItem) {
        values.push(optionItem.value)

        if (optionItem.children.length > 0) {
          return getFirstSelected(values, optionItem.children)
        }
      }

      return values
    }

    return !isPicker ? [] : getFirstSelected([], options2.value as OptionItem[])
  }

  function getValuesByRow(row: ColRow) {
    if (row.values) {
      return row.values as SelectorValue[]
    }

    const values: SelectorValue[] = []
    const indexes = row.indexes
    let i = 0
    let options = options2.value as OptionItem[]
    let optionItem = options[indexes[i]]

    while (options.length > 0 && i < indexes.length && optionItem) {
      values.push(optionItem.value)
      options = optionItem.children
      i++
      optionItem = options[indexes[i]]
    }

    return values
  }

  function emitValue() {
    emit('update:modelValue', getDetail().value)
  }

  function onChange() {
    emitValue()
    emit('change', getDetail().value)
  }

  watch(
    [() => props.options, () => props.fieldNames],
    () => {
      updateOptions()
      updateOriginalValue(currentValues.value, true)
    },
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

  updateOptions()
  updateValue(props.modelValue, true)

  // picker 要默认数据
  if (isPicker) {
    emitValue()
  }

  return {
    cols,
    currentLabels,
    currentValues,
    isCascade,
    getDetail,
    update,
    updateColSelected,
    getValuesByRow,
    updateValue,
    updateOriginalValue,
    onChange
  }
}

type PickerFormatter = (
  valueArray: SelectorValue[],
  labelArray: string[],
  handlers: PickerHandlers
) => SelectorDetail

type PickerParser = (
  value: unknown,
  handlers: PickerHandlers
) => SelectorValue[]

const formatter: PickerFormatter = (valueArray, labelArray, handlers) => {
  const defaultLabel = handlers.labelFormatter(labelArray)
  const ret = handlers.formatter(valueArray, labelArray)

  if ((ret as SelectorDetail)?.value) {
    return {
      value: (ret as SelectorDetail).value,
      label: (ret as SelectorDetail).label ?? ''
    }
  }

  return {
    value: ret as SelectorModelValue,
    label: defaultLabel
  }
}

const parser: PickerParser = (val, handlers) => {
  return handlers.parser(val)
}
