<template>
  <fx-fixed placement="top">
    <fx-nav-bar
      :title="navBarTitle"
      v-show="$route.path !== '/'"
      :show-back="true"
      :show-home="true"
      @back-click="onBack"
      @home-click="onBackHome"
      :right-buttons="[{ icon: 'MenuOutlined', text: '菜单' }]"
      @right-button-click="menuVisible = true"
    ></fx-nav-bar>
  </fx-fixed>
  <router-view v-slot="{ Component }">
    <keep-alive include="Home">
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
import { getScrollDom } from '@/helpers/dom'
import { navConfig } from './views/data'

export default {
  name: 'App',
  data() {
    return {
      menuVisible: false,
      menuList: []
    }
  },
  created() {
    this.updateMenuList()
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
    }
  }
}
</script>

<style>
html {
  background: #f5f5f5;
}

body {
  margin: 0;
}
</style>
