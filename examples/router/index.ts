import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/Button',
    name: 'Button',
    component: () =>
      import(
        /* webpackChunkName: "Button" */ '@/../examples/components/Basic/Button/index.vue'
      )
  },
  {
    path: '/Skeleton',
    name: 'Skeleton',
    component: () =>
      import(
        /* webpackChunkName: "Skeleton" */ '@/../examples/components/Show/Skeleton/index.vue'
      )
  },
  {
    path: '/Cell',
    name: 'Cell',
    component: () =>
      import(
        /* webpackChunkName: "Cell" */ '@/../examples/components/Show/Cell/index.vue'
      )
  },
  {
    path: '/Tab',
    name: 'Tab',
    component: () =>
      import(
        /* webpackChunkName: "Tab" */ '@/../examples/components/Navigation/Tab/index.vue'
      )
  },
  {
    path: '/Form',
    name: 'Form',
    component: () =>
      import(
        /* webpackChunkName: "Form" */ '@/../examples/components/Form/Form/index.vue'
      )
  },
  {
    path: '/Stepper',
    name: 'Stepper',
    component: () =>
      import(
        /* webpackChunkName: "Stepper" */ '@/../examples/components/Form/Stepper/index.vue'
      )
  },
  {
    path: '/Input',
    name: 'Input',
    component: () =>
      import(
        /* webpackChunkName: "Input" */ '@/../examples/components/Form/Input/index.vue'
      )
  },
  {
    path: '/NavBar',
    name: 'NavBar',
    component: () =>
      import(
        /* webpackChunkName: "NavBar" */ '@/../examples/components/Navigation/NavBar/index.vue'
      )
  },
  {
    path: '/Toast',
    name: 'Toast',
    component: () =>
      import(
        /* webpackChunkName: "Toast" */ '@/../examples/components/Feedback/Toast/index.vue'
      )
  },
  {
    path: '/Dialog',
    name: 'Dialog',
    component: () =>
      import(
        /* webpackChunkName: "Dialog" */ '@/../examples/components/Feedback/Dialog/index.vue'
      )
  },
  {
    path: '/Notify',
    name: 'Notify',
    component: () =>
      import(
        /* webpackChunkName: "Notify" */ '@/../examples/components/Feedback/Notify/index.vue'
      )
  },
  {
    path: '/Layout',
    name: 'Layout',
    component: () =>
      import(
        /* webpackChunkName: "Layout" */ '@/../examples/components/Show/Layout/index.vue'
      )
  },
  {
    path: '/Drawer',
    name: 'Drawer',
    component: () =>
      import(
        /* webpackChunkName: "Drawer" */ '@/../examples/components/Basic/Drawer/index.vue'
      )
  },
  {
    path: '/ImagePreview',
    name: 'ImagePreview',
    component: () =>
      import(
        /* webpackChunkName: "ImagePreview" */ '@/../examples/components/Show/ImagePreview/index.vue'
      )
  },
  {
    path: '/Swiper',
    name: 'Swiper',
    component: () =>
      import(
        /* webpackChunkName: "Swiper" */ '@/../examples/components/Show/Swiper/index.vue'
      )
  },
  {
    path: '/Image',
    name: 'DemoImage',
    component: () =>
      import(
        /* webpackChunkName: "Image" */ '@/../examples/components/Basic/Image/index.vue'
      )
  },
  {
    path: '/BackTop',
    name: 'BackTop',
    component: () =>
      import(
        /* webpackChunkName: "BackTop" */ '@/../examples/components/Navigation/BackTop/index.vue'
      )
  },
  {
    path: '/Badge',
    name: 'Badge',
    component: () =>
      import(
        /* webpackChunkName: "Badge" */ '@/../examples/components/Show/Badge/index.vue'
      )
  },
  {
    path: '/Copy',
    name: 'Copy',
    component: () =>
      import(
        /* webpackChunkName: "Copy" */ '@/../examples/components/Other/Copy/index.vue'
      )
  },
  {
    path: '/ScrollView',
    name: 'ScrollView',
    component: () =>
      import(
        /* webpackChunkName: "ScrollView" */ '@/../examples/components/Basic/ScrollView/index.vue'
      )
  },
  {
    path: '/FlatList',
    name: 'FlatList',
    component: () =>
      import(
        /* webpackChunkName: "FlatList" */ '@/../examples/components/Show/FlatList/index.vue'
      )
  },
  {
    path: '/Empty',
    name: 'Empty',
    component: () =>
      import(
        /* webpackChunkName: "Empty" */ '@/../examples/components/Show/Empty/index.vue'
      )
  },
  {
    path: '/Group',
    name: 'Group',
    component: () =>
      import(
        /* webpackChunkName: "Group" */ '@/../examples/components/Show/Group/index.vue'
      )
  },
  {
    path: '/PickerView',
    name: 'PickerView',
    component: () =>
      import(
        /* webpackChunkName: "PickerView" */ '@/../examples/components/Form/PickerView/index.vue'
      )
  },
  {
    path: '/Picker',
    name: 'Picker',
    component: () =>
      import(
        /* webpackChunkName: "Picker" */ '@/../examples/components/Form/Picker/index.vue'
      )
  },
  {
    path: '/NoticeBar',
    name: 'NoticeBar',
    component: () =>
      import(
        /* webpackChunkName: "NoticeBar" */ '@/../examples/components/Show/NoticeBar/index.vue'
      )
  },
  {
    path: '/Divider',
    name: 'Divider',
    component: () =>
      import(
        /* webpackChunkName: "Divider" */ '@/../examples/components/Show/Divider/index.vue'
      )
  },
  {
    path: '/Slider',
    name: 'Slider',
    component: () =>
      import(
        /* webpackChunkName: "Slider" */ '@/../examples/components/Form/Slider/index.vue'
      )
  },
  {
    path: '/Switch',
    name: 'DemoSwitch',
    component: () =>
      import(
        /* webpackChunkName: "Switch" */ '@/../examples/components/Form/Switch/index.vue'
      )
  },
  {
    path: '/Rate',
    name: 'Rate',
    component: () =>
      import(
        /* webpackChunkName: "Rate" */ '@/../examples/components/Form/Rate/index.vue'
      )
  },
  {
    path: '/Cascader',
    name: 'Cascader',
    component: () =>
      import(
        /* webpackChunkName: "Cascader" */ '@/../examples/components/Form/Cascader/index.vue'
      )
  },
  {
    path: '/Radio',
    name: 'Radio',
    component: () =>
      import(
        /* webpackChunkName: "Radio" */ '@/../examples/components/Form/Radio/index.vue'
      )
  },
  {
    path: '/Checkbox',
    name: 'Checkbox',
    component: () =>
      import(
        /* webpackChunkName: "Checkbox" */ '@/../examples/components/Form/Checkbox/index.vue'
      )
  },
  {
    path: '/Modal',
    name: 'Modal',
    component: () =>
      import(
        /* webpackChunkName: "Modal" */ '@/../examples/components/Basic/Modal/index.vue'
      )
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: () =>
      import(
        /* webpackChunkName: "Calendar" */ '@/../examples/components/Form/Calendar/index.vue'
      )
  },
  {
    path: '/ActionSheet',
    name: 'ActionSheet',
    component: () =>
      import(
        /* webpackChunkName: "ActionSheet" */ '@/../examples/components/Feedback/ActionSheet/index.vue'
      )
  },
  {
    path: '/Popover',
    name: 'Popover',
    component: () =>
      import(
        /* webpackChunkName: "Popover" */ '@/../examples/components/Basic/Popover/index.vue'
      )
  },
  {
    path: '/PopDialog',
    name: 'PopDialog',
    component: () =>
      import(
        /* webpackChunkName: "PopDialog" */ '@/../examples/components/Feedback/PopDialog/index.vue'
      )
  },
  {
    path: '/PopMenu',
    name: 'PopMenu',
    component: () =>
      import(
        /* webpackChunkName: "PopMenu" */ '@/../examples/components/Navigation/PopMenu/index.vue'
      )
  },
  {
    path: '/Collapse',
    name: 'Collapse',
    component: () =>
      import(
        /* webpackChunkName: "Collapse" */ '@/../examples/components/Show/Collapse/index.vue'
      )
  },
  {
    path: '/Dropdown',
    name: 'Dropdown',
    component: () =>
      import(
        /* webpackChunkName: "Dropdown" */ '@/../examples/components/Basic/Dropdown/index.vue'
      )
  },
  {
    path: '/Icon',
    name: 'Icon',
    component: () =>
      import(
        /* webpackChunkName: "Icon" */ '@/../examples/components/Basic/Icon/index.vue'
      )
  },
  {
    path: '/TabView',
    name: 'TabView',
    component: () =>
      import(
        /* webpackChunkName: "TabView" */ '@/../examples/components/Navigation/TabView/index.vue'
      )
  },
  {
    path: '/Sticky',
    name: 'Sticky',
    component: () =>
      import(
        /* webpackChunkName: "Sticky" */ '@/../examples/components/Navigation/Sticky/index.vue'
      )
  },
  {
    path: '/ScrollTab',
    name: 'ScrollTab',
    component: () =>
      import(
        /* webpackChunkName: "ScrollTab" */ '@/../examples/components/Navigation/ScrollTab/index.vue'
      )
  },
  {
    path: '/IndexView',
    name: 'IndexView',
    component: () =>
      import(
        /* webpackChunkName: "IndexView" */ '@/../examples/components/Navigation/IndexView/index.vue'
      )
  },
  {
    path: '/TabBar',
    name: 'TabBar',
    component: () =>
      import(
        /* webpackChunkName: "TabBar" */ '@/../examples/components/Navigation/TabBar/index.vue'
      )
  },
  {
    path: '/SearchBar',
    name: 'SearchBar',
    component: () =>
      import(
        /* webpackChunkName: "SearchBar" */ '@/../examples/components/Form/SearchBar/index.vue'
      )
  },
  {
    path: '/SideTab',
    name: 'SideTab',
    component: () =>
      import(
        /* webpackChunkName: "SideTab" */ '@/../examples/components/Navigation/SideTab/index.vue'
      )
  },
  {
    path: '/SwipeCell',
    name: 'SwipeCell',
    component: () =>
      import(
        /* webpackChunkName: "SwipeCell" */ '@/../examples/components/Feedback/SwipeCell/index.vue'
      )
  },
  {
    path: '/Progress',
    name: 'Progress',
    component: () =>
      import(
        /* webpackChunkName: "Progress" */ '@/../examples/components/Show/Progress/index.vue'
      )
  },
  {
    path: '/Tag',
    name: 'Tag',
    component: () =>
      import(
        /* webpackChunkName: "Tag" */ '@/../examples/components/Show/Tag/index.vue'
      )
  },
  {
    path: '/Fixed',
    name: 'Fixed',
    component: () =>
      import(
        /* webpackChunkName: "Fixed" */ '@/../examples/components/Navigation/Fixed/index.vue'
      )
  },
  {
    path: '/Order',
    name: 'Order',
    component: () =>
      import(
        /* webpackChunkName: "Order" */ '@/../examples/components/Show/Order/index.vue'
      )
  },
  {
    path: '/NumberKeyboard',

    name: 'NumberKeyboard',
    component: () =>
      import(
        /* webpackChunkName: "NumberKeyboard" */ '@/../examples/components/Form/NumberKeyboard/index.vue'
      )
  },
  {
    path: '/ImageUploader',

    name: 'ImageUploader',
    component: () =>
      import(
        /* webpackChunkName: "ImageUploader" */ '@/../examples/components/Form/ImageUploader/index.vue'
      )
  },
  {
    path: '/CountDown',
    name: 'CountDown',
    component: () =>
      import(
        /* webpackChunkName: "CountDown" */ '@/../examples/components/Show/CountDown/index.vue'
      )
  },
  {
    path: '/Steps',
    name: 'Steps',
    component: () =>
      import(
        /* webpackChunkName: "Steps" */ '@/../examples/components/Show/Steps/index.vue'
      )
  },
  {
    path: '/Price',
    name: 'Price',
    component: () =>
      import(
        /* webpackChunkName: "Price" */ '@/../examples/components/Show/Price/index.vue'
      )
  },
  {
    path: '/Avatar',
    name: 'Avatar',
    component: () =>
      import(
        /* webpackChunkName: "Avatar" */ '@/../examples/components/Show/Avatar/index.vue'
      )
  },
  {
    path: '/Timeline',
    name: 'Timeline',
    component: () =>
      import(
        /* webpackChunkName: "Timeline" */ '@/../examples/components/Show/Timeline/index.vue'
      )
  },
  {
    path: '/Stopwatch',
    name: 'Stopwatch',
    component: () =>
      import(
        /* webpackChunkName: "Stopwatch" */ '@/../examples/components/Show/Stopwatch/index.vue'
      )
  },
  {
    path: '/Result',
    name: 'Result',
    component: () =>
      import(
        /* webpackChunkName: "Result" */ '@/../examples/components/Show/Result/index.vue'
      )
  },
  {
    path: '/LoadMore',
    name: 'LoadMore',
    component: () =>
      import(
        /* webpackChunkName: "LoadMore" */ '@/../examples/components/Show/LoadMore/index.vue'
      )
  },
  {
    path: '/DatePicker',
    name: 'DatePicker',
    component: () =>
      import(
        /* webpackChunkName: "DatePicker" */ '@/../examples/components/Form/DatePicker/index.vue'
      )
  },
  {
    path: '/DatePickerView',
    name: 'DatePickerView',
    component: () =>
      import(
        /* webpackChunkName: "DatePickerView" */ '@/../examples/components/Form/DatePickerView/index.vue'
      )
  },
  {
    path: '/Range',
    name: 'Range',
    component: () =>
      import(
        /* webpackChunkName: "Range" */ '@/../examples/components/Form/Range/index.vue'
      )
  },
  {
    path: '/TimeAgo',
    name: 'TimeAgo',
    component: () =>
      import(
        /* webpackChunkName: "TimeAgo" */ '@/../examples/components/Show/TimeAgo/index.vue'
      )
  },
  {
    path: '/CountUp',
    name: 'CountUp',
    component: () =>
      import(
        /* webpackChunkName: "CountUp" */ '@/../examples/components/Show/CountUp/index.vue'
      )
  },
  {
    path: '/Pagination',
    name: 'Pagination',
    component: () =>
      import(
        /* webpackChunkName: "Pagination" */ '@/../examples/components/Navigation/Pagination/index.vue'
      )
  },
  {
    path: '/CircleProgress',
    name: 'CircleProgress',
    component: () =>
      import(
        /* webpackChunkName: "CircleProgress" */ '@/../examples/components/Show/CircleProgress/index.vue'
      )
  },
  {
    path: '/ActivityIndicator',
    name: 'ActivityIndicator',
    component: () =>
      import(
        /* webpackChunkName: "ActivityIndicator" */ '@/../examples/components/Show/ActivityIndicator/index.vue'
      )
  }

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
