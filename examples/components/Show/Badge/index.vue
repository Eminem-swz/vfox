<template>
  <div>
    <fx-group title="基础用法">
      <div class="badge-flex">
        <fx-row :gutter="[16, 16]">
          <fx-col :span="6">
            <fx-badge :content="1"> <div class="badge-slot"></div> </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-badge :content="99"> <div class="badge-slot"></div> </fx-badge>
          </fx-col>
        </fx-row>
      </div>
    </fx-group>
    <fx-group title="小红点">
      <div class="badge-flex">
        <fx-row :gutter="[16, 16]">
          <fx-col :span="6">
            <fx-badge :content="1" dot>
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
        </fx-row>
      </div>
    </fx-group>
    <fx-group title="图标（Slot）">
      <div class="badge-flex">
        <fx-row :gutter="[16, 16]">
          <fx-col :span="6">
            <fx-badge :content="1">
              <div class="badge-slot"></div>
              <template #badge>
                <fx-icon icon="CheckOutlined"></fx-icon>
              </template>
            </fx-badge>
          </fx-col>
        </fx-row>
      </div>
    </fx-group>
    <fx-group title="文本">
      <div class="badge-flex">
        <fx-row :gutter="[16, 16]">
          <fx-col :span="6">
            <fx-badge content="惠"> <div class="badge-slot"></div> </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-badge content="热"> <div class="badge-slot"></div> </fx-badge>
          </fx-col>
        </fx-row>
      </div>
    </fx-group>
    <fx-group title="自定义颜色">
      <div class="badge-flex">
        <fx-row :gutter="[16, 16]">
          <fx-col :span="6">
            <fx-badge :content="99" color="#6667AB">
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-badge :content="1" dot color="#6667AB">
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-badge :content="1" color="#E2C0BF">
              <div class="badge-slot"></div>
              <template #badge>
                <fx-icon icon="CheckOutlined"></fx-icon>
              </template>
            </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-badge content="惠" color="#E2C0BF">
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
        </fx-row>
      </div>
    </fx-group>
    <fx-group title="限制最大数">
      <div class="badge-flex">
        <fx-row :gutter="[16, 16]">
          <fx-col :span="6">
            <fx-badge :content="1000" :max-count="9">
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-badge :content="1000" :max-count="10">
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-badge :content="1000" :max-count="99">
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
        </fx-row>
      </div>
    </fx-group>
    <fx-group title="展示 0">
      <div class="badge-flex">
        <fx-row :gutter="[16, 16]">
          <fx-col :span="6">
            <fx-badge :content="0" show-zero>
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-badge :content="0" dot show-zero>
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
        </fx-row>
      </div>
    </fx-group>
    <fx-group title="偏移">
      <div class="badge-flex">
        <fx-row :gutter="[16, 16]">
          <fx-col :span="6">
            <fx-badge :content="1" :offset="[10, -10]">
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-badge :content="1" dot :offset="[-20, 20]">
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
        </fx-row>
      </div>
    </fx-group>
    <fx-group title="展示动画">
      <div class="badge-flex">
        <fx-row :gutter="[16, 16]">
          <fx-col :span="6">
            <fx-badge :content="count" show-zero animated>
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-switch @change="onSwitch"></fx-switch>
          </fx-col>
        </fx-row>
        <fx-row :gutter="[16, 16]">
          <fx-col :span="6">
            <fx-badge :content="count2" dot animated>
              <div class="badge-slot"></div>
            </fx-badge>
          </fx-col>
          <fx-col :span="6">
            <fx-switch @change="onSwitch2"></fx-switch>
          </fx-col>
        </fx-row>
      </div>
    </fx-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ExpBadge',
  setup() {
    const count = ref(0)
    const count2 = ref(0)

    function onSwitch(checked: boolean) {
      count.value = checked ? 1000 : 0
    }

    function onSwitch2(checked: boolean) {
      count2.value = checked ? 1000 : 0
    }

    return {
      count,
      count2,

      onSwitch,
      onSwitch2
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.badge {
  &-flex {
    padding: 16px 16px 0;
  }

  &-slot {
    width: 40px;
    height: 40px;
    background-color: $background-color;
  }
}
</style>
