<template>
  <fx-group title="基础用法">
    <fx-row class="exp-layout-row">
      <fx-col class="exp-layout-col">col-24</fx-col>
    </fx-row>
    <fx-row class="exp-layout-row">
      <fx-col class="exp-layout-col" :span="12">col-12</fx-col>
      <fx-col class="exp-layout-col" :span="12">col-12</fx-col>
    </fx-row>
    <fx-row class="exp-layout-row">
      <fx-col class="exp-layout-col" :span="8">col-8</fx-col>
      <fx-col class="exp-layout-col" :span="8">col-8</fx-col>
      <fx-col class="exp-layout-col" :span="8">col-8</fx-col>
    </fx-row>
    <fx-row class="exp-layout-row">
      <fx-col class="exp-layout-col" :span="6">col-6</fx-col>
      <fx-col class="exp-layout-col" :span="6">col-6</fx-col>
      <fx-col class="exp-layout-col" :span="6">col-6</fx-col>
      <fx-col class="exp-layout-col" :span="6">col-6</fx-col>
    </fx-row>
  </fx-group>
  <fx-group title="区块间隔">
    <fx-row class="exp-layout-row" :gutter="10">
      <fx-col class="exp-layout-col" :span="8">col-8</fx-col>
      <fx-col class="exp-layout-col" :span="8">col-8</fx-col>
      <fx-col class="exp-layout-col" :span="8">col-8</fx-col>
    </fx-row>
  </fx-group>
  <fx-group title="左右偏移">
    <fx-row class="exp-layout-row">
      <fx-col class="exp-layout-col" :span="8">col-8</fx-col>
      <fx-col class="exp-layout-col" :span="8" :offset="8"
        >col-8 offset-8</fx-col
      >
    </fx-row>
    <fx-row class="exp-layout-row">
      <fx-col class="exp-layout-col" :span="6" :offset="6"
        >col-6 offset-6</fx-col
      >
      <fx-col class="exp-layout-col" :span="6" :offset="6"
        >col-6 offset-6</fx-col
      >
    </fx-row>
    <fx-row class="exp-layout-row">
      <fx-col class="exp-layout-col" :span="12" :offset="6"
        >col-12 offset-6</fx-col
      >
    </fx-row>
  </fx-group>
  <fx-group title="栅格排序">
    <fx-row class="exp-layout-row">
      <fx-col class="exp-layout-col" :span="18" :push="6">col-18 push-6</fx-col>
      <fx-col class="exp-layout-col" :span="6" :pull="18">col-6 pull-18</fx-col>
    </fx-row>
  </fx-group>
  <fx-group title="水平对齐方式">
    <div class="exp-layout-title">justify: start</div>
    <fx-row class="exp-layout-row" justify="start">
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
    </fx-row>
    <div class="exp-layout-title">justify: center</div>
    <fx-row class="exp-layout-row" justify="center">
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
    </fx-row>
    <div class="exp-layout-title">justify: end</div>
    <fx-row class="exp-layout-row" justify="end">
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
    </fx-row>
    <div class="exp-layout-title">justify: space-around</div>
    <fx-row class="exp-layout-row" justify="space-around">
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
    </fx-row>
    <div class="exp-layout-title">justify: space-between</div>
    <fx-row class="exp-layout-row" justify="space-between">
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col" :span="4">col-4</fx-col>
    </fx-row>
  </fx-group>
  <fx-group title="垂直对齐方式">
    <div class="exp-layout-title">align: top</div>
    <fx-row class="exp-layout-row" justify="space-around" align="top">
      <fx-col class="exp-layout-col exp-layout-h-80" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col exp-layout-h-40" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col exp-layout-h-100" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col exp-layout-h-60" :span="4">col-4</fx-col>
    </fx-row>
    <div class="exp-layout-title">align: middle</div>
    <fx-row class="exp-layout-row" justify="space-around" align="middle">
      <fx-col class="exp-layout-col exp-layout-h-80" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col exp-layout-h-40" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col exp-layout-h-100" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col exp-layout-h-60" :span="4">col-4</fx-col>
    </fx-row>
    <div class="exp-layout-title">align: bottom</div>
    <fx-row class="exp-layout-row" justify="space-around" align="bottom">
      <fx-col class="exp-layout-col exp-layout-h-80" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col exp-layout-h-40" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col exp-layout-h-100" :span="4">col-4</fx-col>
      <fx-col class="exp-layout-col exp-layout-h-60" :span="4">col-4</fx-col>
    </fx-row>
  </fx-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExpLayout'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-layout {
  &-title {
    font-size: 14px;
    line-height: 32px;
    color: $font-color;
    padding: 0 16px;
  }

  &-h-40 {
    height: 40px !important;
  }

  &-h-60 {
    height: 60px !important;
  }

  &-h-80 {
    height: 80px !important;
  }

  &-h-100 {
    height: 100px !important;
  }

  &-row {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-col {
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
    background-color: $primary-color;
    color: #fff;
    background-clip: content-box;

    &:nth-child(even) {
      background-color: $primary-color-5;
    }
  }
}
</style>
