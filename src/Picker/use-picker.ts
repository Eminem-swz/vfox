import { onMounted, reactive, ref, watch, computed } from 'vue'
import {
  isArray,
  cloneData,
  isSameArray,
  isEmpty,
  isFunction
} from '@/helpers/util'
import type {
  ColRow,
  Labels,
  OptionItem,
  Values,
  ExtraData,
  OptionsHandler,
  DetailObject,
  PickerHandlers,
  ValueFormatter,
  HandleType,
  DetailHook
} from './types'
import type { AnyObject, Noop } from '../helpers/types'
import {
  cloneDetail,
  getDefaultDetail,
  getHookValue,
  validateValues,
  getFormatOptions,
  getColRows,
  updateArray,
  defaultValueParser
} from '@/Picker/util'
import type { UseProps, UseCtx, UseEmit } from '../hooks/types'
import type { PopupCustomConfirm } from '../popup/types'
import { useFormItem } from '@/Form/use-form'

interface UseOptions {
  name: string
}

export function usePicker(
  props: UseProps,
  ctx: UseCtx,
  { name }: UseOptions,
  handlers: PickerHandlers
) {
  const { emit } = ctx
  const isInitPopup = ref(false)
  const popupVisible = ref(true)
  const formValueString = ref('')
  const formLabelString = ref('')
  const formLabel = reactive<Labels>([])
  const formValue = reactive<Values>([])
  const popup = ref()

  let detail = getDefaultDetail()
  const separator: string = props.initialSeparator
  // const defaultDetail = getDefaultDetail()
  const optionsHandler: OptionsHandler | null = handlers.optionsHandler || null

  const { formName, validateAfterEventTrigger, hookFormValue, root } =
    useFormItem(props, ctx, {
      formValue,
      hookFormValue: () =>
        handlers.valueHook
          ? handlers.valueHook(cloneData(formValue))
          : props.formatString
          ? formValueString.value
          : cloneData(formValue),
      hookResetValue: () => updateValue(cloneData(defaultValue)).value
    })

  const format2String = (array: Values, type: HandleType = 'value') => {
    return handlers.valueFormatter
      ? handlers.valueFormatter(array, type)
      : array.join(separator)
  }

  function updateValue(val: unknown) {
    if (popup.value) {
      const popupDetail: DetailObject = popup.value.updateValue(val)

      return updateDetail(
        isEmpty(val) && val !== 0 ? getDefaultDetail() : popupDetail
      )
    }

    const values = handlers.valueParser
      ? handlers.valueParser(val, 'value')
      : defaultValueParser(val, separator)

    if (!(values instanceof Error)) {
      const { options, isCascade } = getFormatOptions(
        props.options || [],
        props.fieldNames || {},
        optionsHandler,
        name === 'cascader'
      )

      if (!isSameArray(values, formValue)) {
        const { value, label, valid, extraData } = validateValues(
          values,
          options,
          isCascade,
          optionsHandler
        )

        if (valid) {
          return updateDetail({
            value,
            label,
            extraData,
            valueString: format2String(value, 'value'),
            labelString: format2String(label, 'label')
          })
        }
      }
    }

    return getDetail()
  }

  function updateDetail(newDetail: DetailObject) {
    if (!isSameArray(newDetail.value, formValue)) {
      emit('value-change', detailHook(newDetail), detailHook(detail))
    }

    detail = newDetail
    updateArray(formValue, newDetail.value)
    updateArray(formLabel, newDetail.label)
    formValueString.value = newDetail.valueString
    formLabelString.value = newDetail.labelString

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

  const detailHook: DetailHook = detail => {
    return handlers.detailHook ? handlers.detailHook(detail) : cloneData(detail)
  }

  function getDetail(): DetailObject {
    return cloneData(detail)
  }

  function onChange(detail: DetailObject) {
    updateDetail(detail)

    emit('update:modelValue', hookFormValue())
    emit('change', detailHook(detail))

    validateAfterEventTrigger('change', hookFormValue())
  }

  watch(
    [() => props.modelValue, () => props.options],
    () => updateValue(props.modelValue),
    {
      immediate: true
    }
  )

  const defaultValue = getDetail().value

  return {
    root,
    popup,
    formName,
    isInitPopup,
    popupVisible,
    formValueString,
    formLabelString,
    updateValue,
    onFieldClick,
    onChange,
    hookFormValue,
    validateAfterEventTrigger,
    defaultValue
  }
}

export function usePickerPopup(
  props: UseProps,
  {
    emit,
    customConfirm,
    onCancelClick
  }: {
    emit: UseEmit
    customConfirm: PopupCustomConfirm
    onCancelClick: Noop
  },
  handlers: PickerHandlers
) {
  const view = ref()

  let detail = getDefaultDetail()

  function beforeConfirm() {
    const newDetail = view.value?.getDetail() || getDefaultDetail()

    if (!isSameArray(newDetail.value, detail.value)) {
      detail = newDetail

      // 跟picker-view不一样，改变数值时机是确定按钮
      emit(
        'update:modelValue',
        getHookValue(detail, props.formatString || false, handlers.valueHook)
      )
      emit('change', detailHook(detail))
    }

    return detailHook(detail)
  }

  function onHeaderLeftClick() {
    onCancelClick()
  }

  function onHeaderRightClick() {
    customConfirm(beforeConfirm())
  }

  function detailHook(detail: DetailObject): AnyObject {
    const newDetail = cloneDetail(detail)

    return handlers.detailHook ? handlers.detailHook(newDetail) : newDetail
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
  afterUpdate: Noop
}

export function usePickerView(
  props: UseProps,
  { emit }: UseCtx,
  { name, afterUpdate }: ViewUseOptions,
  handlers: PickerHandlers
) {
  const separator: string = props.initialSeparator

  const cols = reactive<ColRow[][]>([])
  const formLabel = reactive<Labels>([])
  const formValue = reactive<Values>([])
  const options2 = reactive<OptionItem[] | OptionItem[][]>([])
  const isCascade = ref(false)

  const cacheLabel = reactive<Labels>([])
  const cacheValue = reactive<Values>([])

  const optionsHandler: OptionsHandler | null = handlers.optionsHandler || null
  let extraData: any = []

  function updateOptions(val: Values) {
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
    const values = handlers.valueParser
      ? handlers.valueParser(val, 'value')
      : defaultValueParser(val, separator)

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

  const format2String: ValueFormatter = (
    array: Values,
    type: HandleType = 'label'
  ) => {
    return handlers.valueFormatter
      ? handlers.valueFormatter(array, type)
      : array.join(separator as string)
  }

  function getDetail() {
    const detail: DetailObject = {
      valueString: format2String(formValue, 'value'),
      labelString: format2String(formLabel, 'label'),
      value: cloneData(formValue),
      label: cloneData(formLabel),
      extraData
    }

    return detail
  }

  function detailHook(detail: DetailObject): any {
    const newDetail = cloneDetail(detail)

    return handlers.detailHook ? handlers.detailHook(newDetail) : newDetail
  }

  function addCache(item: {
    value: string | number
    label: string
    extraData: ExtraData
  }) {
    cacheValue.push(item.value)
    cacheLabel.push(item.label)
    extraData.push(item.extraData)
  }

  function update(selecteds: Values) {
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
    extraData = []
  }

  /**
   * 更新多列展示效果
   */
  function updateCols(selecteds: Values) {
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
  function updateVirtualOptionsCols(selecteds: Values) {
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
              value: row.value,
              extraData: {}
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
          value: lastColFirstRow.value,
          extraData: {}
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
  function updateCascadeCols(selecteds: Values) {
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
      values: Values,
      optionList: OptionItem[]
    ): Values {
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
      return row.values as Values
    }

    const values: Values = []
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

  const formLabelString = computed(() => format2String(formLabel, 'label'))
  const formValueString = computed(() => format2String(formValue, 'value'))

  function emitValue() {
    emit(
      'update:modelValue',
      getHookValue(getDetail(), props.formatString || false, handlers.valueHook)
    )
  }

  function onChange() {
    emitValue()
    emit('change', detailHook(getDetail()))
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
    format2String,
    cols,
    cacheLabel,
    cacheValue,
    formLabel,
    formValue,
    formLabelString,
    formValueString,
    isCascade,
    getDetail,
    update,
    updateColSelected,
    getValuesByRow,
    updateValue,
    onChange
  }
}
