<script lang="ts" setup>
import { getScrollTop, scrollTo } from '@/helpers/dom'
import { onActivated, onDeactivated } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import { navConfig } from './data'
import logo from '../../public/logo.svg?vueComponent'

let scrollTop = 0

onActivated(() => scrollTo(document, scrollTop, false))

onDeactivated(() => scrollTo(document, 0, false))

onBeforeRouteLeave((to, from, next) => {
  scrollTop = getScrollTop(document)
  next()
})

const $router = useRouter()

function onItemClick({ name }: { name: string }) {
  $router.push({ name: 'Exp' + name })
}
</script>

<template>
  <div class="index-wrapper">
    <div class="index-header">
      <logo class="index-logo" />
      <h1 class="index-title">VFOX</h1>
    </div>
    <div class="index-body">
      <fx-group
        :title="group.name + ' ' + group.zhName"
        v-for="group in navConfig"
        :key="group.name"
        card
      >
        <fx-cell
          :clickable="true"
          :label="item.name + ' ' + item.zhName"
          v-for="item in group.list"
          :key="item.name"
          @click="onItemClick(item)"
        ></fx-cell>
      </fx-group>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.index {
  &-header {
    padding: 32px 0 8px;
    position: relative;
  }

  &-title {
    height: 30px;
    line-height: 30px;
    font-weight: 700;
    font-size: 24px;
    margin: 0;
    padding: 0;
    color: #463a2f;
    text-align: center;
  }

  &-logo {
    display: block;
    width: 48px;
    height: 48px;
    border: 0;
    margin: 0 auto 2px;
  }
}

.index-body {
  overflow: hidden;
}
</style>
