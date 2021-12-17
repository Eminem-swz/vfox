import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Color from '../views/Color.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: Home.name, component: Home },
  { path: '/Color', name: Color.name, component: Color },
  {
    path: '/Button',
    name: 'ExpButton',
    component: () => import('@/../examples/components/Basic/Button/index.vue')
  },
  {
    path: '/Skeleton',
    name: 'ExpSkeleton',
    component: () => import('@/../examples/components/Show/Skeleton/index.vue')
  },
  {
    path: '/Cell',
    name: 'ExpCell',
    component: () => import('@/../examples/components/Show/Cell/index.vue')
  },
  {
    path: '/Tab',
    name: 'ExpTab',
    component: () => import('@/../examples/components/Navigation/Tab/index.vue')
  },
  {
    path: '/Form',
    name: 'ExpForm',
    component: () => import('@/../examples/components/Form/Form/index.vue')
  },
  {
    path: '/Stepper',
    name: 'ExpStepper',
    component: () => import('@/../examples/components/Form/Stepper/index.vue')
  },
  {
    path: '/Input',
    name: 'ExpInput',
    component: () => import('@/../examples/components/Form/Input/index.vue')
  },
  {
    path: '/NavBar',
    name: 'ExpNavBar',
    component: () =>
      import('@/../examples/components/Navigation/NavBar/index.vue')
  },
  {
    path: '/Toast',
    name: 'ExpToast',
    component: () => import('@/../examples/components/Feedback/Toast/index.vue')
  },
  {
    path: '/Dialog',
    name: 'ExpDialog',
    component: () =>
      import('@/../examples/components/Feedback/Dialog/index.vue')
  },
  {
    path: '/Notify',
    name: 'ExpNotify',
    component: () =>
      import('@/../examples/components/Feedback/Notify/index.vue')
  },
  {
    path: '/Layout',
    name: 'ExpLayout',
    component: () => import('@/../examples/components/Show/Layout/index.vue')
  },
  {
    path: '/Drawer',
    name: 'ExpDrawer',
    component: () => import('@/../examples/components/Basic/Drawer/index.vue')
  },
  {
    path: '/ImagePreview',
    name: 'ExpImagePreview',
    component: () =>
      import('@/../examples/components/Show/ImagePreview/index.vue')
  },
  {
    path: '/Swiper',
    name: 'ExpSwiper',
    component: () => import('@/../examples/components/Show/Swiper/index.vue')
  },
  {
    path: '/Image',
    name: 'ExpImage',
    component: () => import('@/../examples/components/Basic/Image/index.vue')
  },
  {
    path: '/BackTop',
    name: 'ExpBackTop',
    component: () =>
      import('@/../examples/components/Navigation/BackTop/index.vue')
  },
  {
    path: '/Badge',
    name: 'ExpBadge',
    component: () => import('@/../examples/components/Show/Badge/index.vue')
  },
  {
    path: '/Copy',
    name: 'ExpCopy',
    component: () => import('@/../examples/components/Other/Copy/index.vue')
  },
  {
    path: '/ScrollView',
    name: 'ExpScrollView',
    component: () =>
      import('@/../examples/components/Basic/ScrollView/index.vue')
  },
  {
    path: '/FlatList',
    name: 'ExpFlatList',
    component: () => import('@/../examples/components/Show/FlatList/index.vue')
  },
  {
    path: '/Empty',
    name: 'ExpEmpty',
    component: () => import('@/../examples/components/Show/Empty/index.vue')
  },
  {
    path: '/Group',
    name: 'ExpGroup',
    component: () => import('@/../examples/components/Show/Group/index.vue')
  },
  {
    path: '/PickerView',
    name: 'ExpPickerView',
    component: () =>
      import('@/../examples/components/Form/PickerView/index.vue')
  },
  {
    path: '/Picker',
    name: 'ExpPicker',
    component: () => import('@/../examples/components/Form/Picker/index.vue')
  },
  {
    path: '/NoticeBar',
    name: 'ExpNoticeBar',
    component: () => import('@/../examples/components/Show/NoticeBar/index.vue')
  },
  {
    path: '/Divider',
    name: 'ExpDivider',
    component: () => import('@/../examples/components/Show/Divider/index.vue')
  },
  {
    path: '/Slider',
    name: 'ExpSlider',
    component: () => import('@/../examples/components/Form/Slider/index.vue')
  },
  {
    path: '/Switch',
    name: 'ExpSwitch',
    component: () => import('@/../examples/components/Form/Switch/index.vue')
  },
  {
    path: '/Rate',
    name: 'ExpRate',
    component: () => import('@/../examples/components/Form/Rate/index.vue')
  },
  {
    path: '/Cascader',
    name: 'ExpCascader',
    component: () => import('@/../examples/components/Form/Cascader/index.vue')
  },
  {
    path: '/Radio',
    name: 'ExpRadio',
    component: () => import('@/../examples/components/Form/Radio/index.vue')
  },
  {
    path: '/Checkbox',
    name: 'ExpCheckbox',
    component: () => import('@/../examples/components/Form/Checkbox/index.vue')
  },
  {
    path: '/Modal',
    name: 'ExpModal',
    component: () => import('@/../examples/components/Basic/Modal/index.vue')
  },
  {
    path: '/Calendar',
    name: 'ExpCalendar',
    component: () => import('@/../examples/components/Form/Calendar/index.vue')
  },
  {
    path: '/ActionSheet',
    name: 'ExpActionSheet',
    component: () =>
      import('@/../examples/components/Feedback/ActionSheet/index.vue')
  },
  {
    path: '/Popover',
    name: 'ExpPopover',
    component: () => import('@/../examples/components/Basic/Popover/index.vue')
  },
  {
    path: '/PopDialog',
    name: 'ExpPopDialog',
    component: () =>
      import('@/../examples/components/Feedback/PopDialog/index.vue')
  },
  {
    path: '/PopMenu',
    name: 'ExpPopMenu',
    component: () =>
      import('@/../examples/components/Navigation/PopMenu/index.vue')
  },
  {
    path: '/Collapse',
    name: 'ExpCollapse',
    component: () => import('@/../examples/components/Show/Collapse/index.vue')
  },
  {
    path: '/Dropdown',
    name: 'ExpDropdown',
    component: () => import('@/../examples/components/Basic/Dropdown/index.vue')
  },
  {
    path: '/Icon',
    name: 'ExpIcon',
    component: () => import('@/../examples/components/Basic/Icon/index.vue')
  },
  {
    path: '/TabView',
    name: 'ExpTabView',
    component: () =>
      import('@/../examples/components/Navigation/TabView/index.vue')
  },
  {
    path: '/Sticky',
    name: 'ExpSticky',
    component: () =>
      import('@/../examples/components/Navigation/Sticky/index.vue')
  },
  {
    path: '/ScrollTab',
    name: 'ExpScrollTab',
    component: () =>
      import('@/../examples/components/Navigation/ScrollTab/index.vue')
  },
  {
    path: '/IndexView',
    name: 'ExpIndexView',
    component: () =>
      import('@/../examples/components/Navigation/IndexView/index.vue')
  },
  {
    path: '/TabBar',
    name: 'ExpTabBar',
    component: () =>
      import('@/../examples/components/Navigation/TabBar/index.vue')
  },
  {
    path: '/SearchBar',
    name: 'ExpSearchBar',
    component: () => import('@/../examples/components/Form/SearchBar/index.vue')
  },
  {
    path: '/SideTab',
    name: 'ExpSideTab',
    component: () =>
      import('@/../examples/components/Navigation/SideTab/index.vue')
  },
  {
    path: '/SwipeCell',
    name: 'ExpSwipeCell',
    component: () =>
      import('@/../examples/components/Feedback/SwipeCell/index.vue')
  },
  {
    path: '/Progress',
    name: 'ExpProgress',
    component: () => import('@/../examples/components/Show/Progress/index.vue')
  },
  {
    path: '/Tag',
    name: 'ExpTag',
    component: () => import('@/../examples/components/Show/Tag/index.vue')
  },
  {
    path: '/Fixed',
    name: 'ExpFixed',
    component: () =>
      import('@/../examples/components/Navigation/Fixed/index.vue')
  },
  {
    path: '/Order',
    name: 'ExpOrder',
    component: () => import('@/../examples/components/Show/Order/index.vue')
  },
  {
    path: '/NumberKeyboard',

    name: 'ExpNumberKeyboard',
    component: () =>
      import('@/../examples/components/Form/NumberKeyboard/index.vue')
  },
  {
    path: '/ImageUploader',

    name: 'ExpImageUploader',
    component: () =>
      import('@/../examples/components/Form/ImageUploader/index.vue')
  },
  {
    path: '/CountDown',
    name: 'ExpCountDown',
    component: () => import('@/../examples/components/Show/CountDown/index.vue')
  },
  {
    path: '/Steps',
    name: 'ExpSteps',
    component: () => import('@/../examples/components/Show/Steps/index.vue')
  },
  {
    path: '/Price',
    name: 'ExpPrice',
    component: () => import('@/../examples/components/Show/Price/index.vue')
  },
  {
    path: '/Avatar',
    name: 'ExpAvatar',
    component: () => import('@/../examples/components/Show/Avatar/index.vue')
  },
  {
    path: '/Timeline',
    name: 'ExpTimeline',
    component: () => import('@/../examples/components/Show/Timeline/index.vue')
  },
  {
    path: '/Stopwatch',
    name: 'ExpStopwatch',
    component: () => import('@/../examples/components/Show/Stopwatch/index.vue')
  },
  {
    path: '/Result',
    name: 'ExpResult',
    component: () => import('@/../examples/components/Show/Result/index.vue')
  },
  {
    path: '/LoadMore',
    name: 'ExpLoadMore',
    component: () => import('@/../examples/components/Show/LoadMore/index.vue')
  },
  {
    path: '/DatePicker',
    name: 'ExpDatePicker',
    component: () =>
      import('@/../examples/components/Form/DatePicker/index.vue')
  },
  {
    path: '/DatePickerView',
    name: 'ExpDatePickerView',
    component: () =>
      import('@/../examples/components/Form/DatePickerView/index.vue')
  },
  {
    path: '/Range',
    name: 'ExpRange',
    component: () => import('@/../examples/components/Form/Range/index.vue')
  },
  {
    path: '/TimeAgo',
    name: 'ExpTimeAgo',
    component: () => import('@/../examples/components/Show/TimeAgo/index.vue')
  },
  {
    path: '/CountUp',
    name: 'ExpCountUp',
    component: () => import('@/../examples/components/Show/CountUp/index.vue')
  },
  {
    path: '/Pagination',
    name: 'ExpPagination',
    component: () =>
      import('@/../examples/components/Navigation/Pagination/index.vue')
  },
  {
    path: '/CircleProgress',
    name: 'ExpCircleProgress',
    component: () =>
      import('@/../examples/components/Show/CircleProgress/index.vue')
  },
  {
    path: '/ActivityIndicator',
    name: 'ExpActivityIndicator',
    component: () =>
      import('@/../examples/components/Show/ActivityIndicator/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
