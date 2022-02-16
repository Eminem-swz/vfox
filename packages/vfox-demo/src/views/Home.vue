<template>
  <div class="index-wrapper">
    <div class="index-header">
      <img class="index-logo" src="../assets/logo.svg" />
      <h1 class="index-title">VFOX</h1>
    </div>
    <div class="index-body">
      <fx-group
        :title="group.name + ' ' + group.zhName"
        v-for="group in groups"
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

<script>
import { getScrollTop, scrollTo } from '@/helpers/dom'
import { navConfig } from './data'

export default {
  name: 'ExpHome',
  props: {},
  data() {
    return {
      groups: navConfig,
      scrollTop: 0
    }
  },
  activated() {
    scrollTo(document, this.scrollTop, false)
  },
  deactivated() {
    scrollTo(document, 0, false)
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = getScrollTop(document)

    next()
  },
  methods: {
    onItemClick({ name }) {
      this.$router.push({ name: 'Exp' + name })
    }
  }
}
</script>

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
