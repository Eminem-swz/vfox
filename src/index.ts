import type { App } from 'vue'
import * as ComponentPlugins from './components/install'
// export * from './types'
// import './style/index'

const Vfox = {
  install(app: App) {
    Object.values(ComponentPlugins).forEach(plugin => {
      app.use(plugin)
    })
  }
}

export * from './components/api'
export * from './components'
export default Vfox

export type { FnArgs } from './helpers/types'
export type { StateType, PlacementType, SizeType } from './helpers/types'

export type {
  VisibleStateChangeArgs as PopupVisibleStateChangeArgs,
  CancelArgs as PopupCancelArgs,
  OnVisibleStateChange as PopupOnVisibleStateChange,
  OnCancel as PopupOnCancel
} from './popup/types'
export type {
  SelectorValueParser,
  SelectorValueFormatter,
  SelectorModelValue,
  SelectorDetail,
  SelectorOnChange,
  SelectorOnConfirm
} from './SelectorField/types'
export type { OnConfirm as PickerOnConfirm } from './Picker/types'
export type { OnConfirm as CascaderOnConfirm } from './Cascader/types'
export type {
  OptionFilter as DatePickerOptionFilter,
  OnConfirm as DatePickerOnConfirm
} from './DatePicker/types'
export type {
  ValueFormatter as CalendarValueFormatter,
  ValueParser as CalendarValueParser,
  OnSelect as CalendarOnSelect,
  OnConfirm as CalendarOnConfirm,
  DayHandler as CalendarDayHandler,
  Mode as CalendarMode,
  CalendarDetail
} from './Calendar/types'
export type {
  Option as ActionSheetOption,
  OnConfirm as ActionSheetOnConfirm
} from './ActionSheet/types'
export type {
  MenuOption as PopMenuOption,
  MenuOnConfirm as PopMenuOnConfirm
} from './Popover/types'
export type { OnChange as ImagePreviewOnChange } from './ImagePreview/types'
export type {
  SetSuggestList as SearchBarSetSuggestList,
  OnInput as SearchBarOnInput
} from './SearchBar/types'
export type {
  OnRefreshing as ScrollViewOnRefreshing,
  OnScroll as ScrollViewOnScroll
} from './ScrollView/types'
export type {
  OnChange as TabOnChange,
  OptionList as TabOptions,
  OptionItem as TabOption
} from './Tab/types'
export type {
  OnChange as SwiperOnChange,
  OnAnimated as SwiperOnAnimated
} from './Swiper/types'
export type { StateType as ToastType } from './Toast/types'
export type {
  ButtonOption as SwipeCellButtonOption,
  OnButtonClick as SwipeCellOnButtonClick
} from './SwipeCell/types'
export type {
  OnChange as StickyViewOnChange,
  OnChange as IndexViewOnChange,
  OnChange as ScrollTabOnChange
} from './StickyView/types'
export type {
  ButtonOption as NavBarButtonOption,
  OnButtonClick as NavBarOnButtonClick
} from './NavBar/types'
export type { OnChange as PaginationOnChange } from './Pagination/types'
