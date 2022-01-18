<template>
  <fx-fixed placement="top">
    <fx-nav-bar
      :title="navBarTitle"
      v-show="$route.path !== '/'"
      :show-back="true"
      :show-home="true"
      @back-click="onBack"
      @home-click="onBackHome"
      :rightButtons="[
        { icon: themeIcon, text: 'theme' },
        { icon: 'MenuOutlined', text: 'menu' }
      ]"
      @rightButtonClick="onRightButtonClick"
    ></fx-nav-bar>
  </fx-fixed>
  <router-view v-slot="{ Component }">
    <keep-alive include="ExpHome">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <fx-drawer
    ref="drawer"
    title="Menu"
    placement="right"
    v-model:visible="menuVisible"
  >
    <fx-side-tab
      :options="menuList"
      :value="$route.name"
      @change="onMenuChange"
    ></fx-side-tab>
  </fx-drawer>
</template>

<script>
import { markRaw } from 'vue'
import { getScrollDom } from '@/helpers/dom'
import { showPopMenu } from '@/PopMenu'
import { navConfig } from './views/data'
import { use as localeUse } from '@/Locale'
import LightSvg from './assets/icons/sun.svg'
import DarkSvg from './assets/icons/moon.svg'

export default {
  name: 'App',
  data() {
    return {
      menuVisible: false,
      menuList: [],
      isDarkTheme: false,
      themeIcon: markRaw(LightSvg)
    }
  },
  created() {
    this.updateMenuList()

    const mm =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

    if (mm) {
      mm.addEventListener('change', e => {
        this.switchTheme(e.matches)
      })

      this.switchTheme(mm.matches)
    }
  },
  computed: {
    navBarTitle() {
      return this.$route.name?.replace('Exp', '')
    }
  },
  methods: {
    updateMenuList() {
      const menuList = [
        {
          label: '首页',
          value: 'ExpHome'
        }
      ]

      navConfig.forEach(group => {
        group.list.forEach(item => {
          menuList.push({
            label: item.name,
            value: 'Exp' + item.name
          })
        })
      })

      this.menuList = menuList
    },
    onMenuChange({ value }) {
      if (value !== this.$route.name) {
        this.menuVisible = false

        getScrollDom().scrollTo({
          top: 0,
          behavior: 'auto'
        })

        this.$router.push({ name: value })
      }
    },
    onBack() {
      this.$router.go(-1)
    },
    onBackHome() {
      this.$router.replace({ name: 'ExpHome' })
    },
    onRightButtonClick(e, $target) {
      if (e.item.text === 'menu') {
        this.menuVisible = true
      } else if (e.item.text === 'lang') {
        showPopMenu({
          selector: $target,
          options: [
            { name: 'English', value: 'en-US' },
            { name: '中文', value: 'zh-CN' }
          ]
        }).then(({ detail, confirm }) => {
          confirm && localeUse(detail.index === 0 ? 'en-US' : 'zh-CN')
        })
      } else if (e.item.text === 'theme') {
        this.switchTheme(!this.isDarkTheme)
      }
    },
    switchTheme(isDark) {
      if (!isDark) {
        this.themeIcon = markRaw(LightSvg)
        document.body.removeAttribute('fx-theme', 'dark')
      } else {
        this.themeIcon = markRaw(DarkSvg)
        document.body.setAttribute('fx-theme', 'dark')
      }
      this.isDarkTheme = isDark
    }
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

body {
  margin: 0;
  background: $background-color;
}

::-webkit-scrollbar {
  display: none;
}
</style>
