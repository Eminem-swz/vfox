<template>
  <div>
    <fx-group title="基础用法">
      <fx-cell
        label="基础"
        isLink
        id="dropdownCell"
        @click=";(selector = '#dropdownCell'), (visible = true)"
      />
    </fx-group>
    <fx-group title="事件监听">
      <fx-cell
        label="visible-state-change"
        id="dropdownCellEvent"
        @click="
          ;(selector = '#dropdownCellEvent'),
            (visibleEvent = true),
            (visible = true)
        "
      />
    </fx-group>
    <fx-dropdown
      v-model:visible="visible"
      :selector="selector"
      @visible-state-change="onVisibleStateChange"
    >
    </fx-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { PopupOnVisibleStateChange, showToast } from '@/index'

export default defineComponent({
  name: 'ExpDropdown',
  setup() {
    const visible = ref(false)
    const selector = ref('')
    const visibleEvent = ref(false)

    const onVisibleStateChange: PopupOnVisibleStateChange = ({ state }) => {
      if (visibleEvent.value) {
        showToast(`${state} 事件触发`)
        console.log('visible-state-change', state)
      }
      if (state === 'hidden') {
        visibleEvent.value = false
      }
    }

    return {
      visible,
      selector,
      visibleEvent,

      onVisibleStateChange
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.popover {
  &-box {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
  }

  &-box2 {
    padding: 8px 16px;

    > div {
      display: flex;
      justify-content: center;
    }

    .fx-button + .fx-button {
      margin-left: 32px;
    }
  }

  &-content {
    padding: 50px 12px;
    font-size: 17px;
    color: $title-color;
    line-height: 24px;
  }
}
</style>
