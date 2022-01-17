<template>
  <div>
    <fx-group title="基础用法">
      <fx-search-bar />
    </fx-group>
    <fx-group title="搜索建议">
      <fx-search-bar @input="onInput" />
    </fx-group>
    <fx-group title="显示取消按钮">
      <fx-search-bar show-cancel />
    </fx-group>
    <fx-group title="设置候选项">
      <fx-search-bar :placeholders="placeholders" />
    </fx-group>
    <fx-group title="深色适配">
      <fx-search-bar class="search-bar-dark-style" show-cancel ghost />
    </fx-group>
    <fx-group title="只读（readonly=true）">
      <fx-search-bar readonly :placeholders="placeholders" />
    </fx-group>
    <fx-group title="事件监听">
      <fx-search-bar
        show-cancel
        :placeholders="placeholders"
        @input="onInput2"
        @focus="onFocus"
        @blur="onBlur"
        @cancel="onCancel"
        @search="onSearch"
      >
      </fx-search-bar>
    </fx-group>
    <fx-group title="事件监听（readonly=true）">
      <fx-search-bar readonly :placeholders="placeholders" @click="onClick" />
    </fx-group>
  </div>
</template>

<script lang="ts">
import { placeholders } from './data'
import { SearchBarOnInput, showToast } from '@/index'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExpSearchBar',
  setup() {
    return {
      placeholders,
      showToast
    }
  },
  data() {
    const onCancel = () => {
      showToast('取消按钮点击')
    }

    const onInput: SearchBarOnInput = (e, fn) => {
      fn(
        e.text
          ? 'ABCD'.split('').map(v => {
              return {
                text: `${e.text} ${v}`,
                tags: ['tag1', 'tag2']
              }
            })
          : []
      )
    }

    const onInput2: SearchBarOnInput = (e, fn) => {
      showToast(`输入了 ${e.text}`)

      onInput(e, fn)
    }

    const onSearch = ({ text }: { text: string }) => {
      showToast(`搜索了 ${text}`)
    }

    const onClick = (e: { searchText: string }) => {
      console.log(e)
      showToast(`搜索词 ${e.searchText}`)
    }

    return {
      text: 1,
      placeholders,
      onFocus: () => showToast('focus'),
      onBlur: () => showToast('blur'),
      onCancel,
      onInput,
      onInput2,
      onSearch,
      onClick
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.search-bar {
  &-dark-style {
    background: $danger-color;
  }
}
</style>
