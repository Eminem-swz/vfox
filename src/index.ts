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
  OnScrollToUpper as ScrollViewOnScrollToUpper,
  OnScrollToLower as ScrollViewOnScrollToLower,
  OnRefreshing as ScrollViewOnRefreshing,
  OnScroll as ScrollViewOnScroll,
  OnRefreshing as FlatListOnRefreshing,
  OnScroll as FlatListOnScroll
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
  OnButtonClick as NavBarOnButtonClick,
  OnTitleDbClick as NavBarOnTitleDbClick
} from './NavBar/types'
export type { OnChange as PaginationOnChange } from './Pagination/types'
export type {
  AvatarShape as SkeletonAvatarShape,
  ButtonShape as SkeletonButtonShape
} from './Skeleton/types'
export type {
  ActiveName as CollapseActiveName,
  OnChange as CollapseOnChange,
  ItemOnToggle as CollapseItemOnToggle
} from './Collapse/types'
export type {
  CountTime,
  OnEnd as CountDownOnEnd,
  OnPauseOrResume as CountDownOnPause,
  OnPauseOrResume as CountDownOnResume
} from './CountDown/types'
export type {
  OnCancel as CountUpOnCancel,
  OnCancel as CountUpOnAnimated
} from './CountUp/types'
export type { OnStop as StopwatchOnStop } from './Stopwatch/types'
export type {
  OnEndReached as FlatListOnEndReached,
  OnRecycleChange as FlatListOnRecycleChange
} from './FlatList/types'
export type {
  OnDelete as NumberKeyboardOnDelete,
  OnClose as NumberKeyboardOnClose
} from './NumberKeyboard/types'
export type {
  Accept as ImageUploaderAccept,
  BeforeUpload as ImageUploaderBeforeUpload,
  UploadReady as ImageUploaderUploadReady,
  OnDelete as ImageUploaderOnDelete
} from './ImageUploader/types'
export type { ImageMode } from './Image/types'
export type { ViewPosition } from './helpers/types'
