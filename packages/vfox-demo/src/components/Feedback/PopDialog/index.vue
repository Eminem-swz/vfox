<template>
  <fx-group title="基础用法">
    <fx-cell label="基础">
      <fx-button
        size="small"
        id="popDialog"
        shape="circle"
        icon="DeleteOutlined"
        @click=";(selector = '#popDialog'), (visible = true)"
      >
      </fx-button>
    </fx-cell>
    <fx-cell label="不展示取消按钮">
      <fx-button
        size="small"
        id="popDialogNoCancel"
        shape="circle"
        icon="DeleteOutlined"
        @click="
          ;(selector = '#popDialogNoCancel'),
            (showCancel = false),
            (visible = true)
        "
      >
      </fx-button>
    </fx-cell>
    <fx-cell label="设置按钮文案">
      <fx-button
        size="small"
        id="popDialogButtonText"
        shape="circle"
        icon="DeleteOutlined"
        @click="
          ;(selector = '#popDialogButtonText'),
            (confirmText = '接受'),
            (cancelText = '拒绝'),
            (visible = true)
        "
      >
      </fx-button>
    </fx-cell>
    <fx-cell label="不展示蒙层">
      <fx-button
        size="small"
        id="popDialogNoMask"
        shape="circle"
        icon="DeleteOutlined"
        @click="visible3 = true"
      >
      </fx-button>
    </fx-cell>
  </fx-group>
  <fx-group title="方向 placement=top/bottom/left/right">
    <div class="exp-popDialog-box2">
      <div>
        <fx-button
          size="small"
          id="popDialogTop2"
          shape="circle"
          icon="UpOutlined"
          @click="
            ;(placement2 = 'top'),
              (selector2 = '#popDialogTop2'),
              (visible2 = true)
          "
        >
          上
        </fx-button>
      </div>
      <div>
        <fx-button
          size="small"
          id="popDialogLeft2"
          shape="circle"
          icon="LeftOutlined"
          @click="
            ;(placement2 = 'left'),
              (selector2 = '#popDialogLeft2'),
              (visible2 = true)
          "
        >
          左
        </fx-button>
        <fx-button
          size="small"
          id="popDialogRight2"
          shape="circle"
          icon="RightOutlined"
          @click="
            ;(placement2 = 'right'),
              (selector2 = '#popDialogRight2'),
              (visible2 = true)
          "
        >
          右
        </fx-button>
      </div>
      <div>
        <fx-button
          size="small"
          id="popDialogBottom2"
          shape="circle"
          icon="DownOutlined"
          @click="
            ;(placement2 = 'bottom'),
              (selector2 = '#popDialogBottom2'),
              (visible2 = true)
          "
        >
          下
        </fx-button>
      </div>
    </div>
  </fx-group>
  <fx-group title="事件监听">
    <fx-cell label="confirm/cancel">
      <fx-button
        size="small"
        id="popDialogEvent"
        shape="circle"
        icon="DeleteOutlined"
        @click="
          ;(selector = '#popDialogEvent'), (showEvent = true), (visible = true)
        "
      >
      </fx-button>
    </fx-cell>
    <fx-cell label="visible-state-change">
      <fx-button
        size="small"
        id="popDialogPopupEvent"
        shape="circle"
        icon="DeleteOutlined"
        @click="
          ;(selector = '#popDialogPopupEvent'),
            (visibleEvent = true),
            (visible = true)
        "
      >
      </fx-button>
    </fx-cell>
  </fx-group>
  <fx-group title="API">
    <fx-cell label="showPopDialog">
      <fx-button
        size="small"
        id="popDialogApi"
        shape="circle"
        icon="DeleteOutlined"
        @click="onCallApi('#popDialogApi')"
      >
      </fx-button>
    </fx-cell>
  </fx-group>
  <fx-pop-dialog
    v-model:visible="visible"
    :selector="selector"
    :content="content"
    :show-cancel="showCancel"
    :confirm-text="confirmText"
    :cancel-text="cancelText"
    @cancel="onCancel"
    @confirm="onConfirm"
    @visibleStateChange="onVisibleStateChange"
  >
  </fx-pop-dialog>
  <fx-pop-dialog
    v-model:visible="visible2"
    :selector="selector2"
    :placement="placement2"
    content="这是气泡内容"
    :show-cancel="false"
  >
  </fx-pop-dialog>
  <fx-pop-dialog
    v-model:visible="visible3"
    selector="#popDialogNoMask"
    content="这是气泡内容"
    :showCancel="false"
    :showMask="false"
  >
  </fx-pop-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  showToast,
  showPopDialog,
  PlacementType,
  PopupOnVisibleStateChange,
  PopupOnCancel
} from '@/index'

export default defineComponent({
  name: 'ExpPopDialog',
  setup() {
    const visible = ref(false)
    const content = ref('确定要删除该条数据？')
    const showCancel = ref(false)
    const selector = ref('')
    const confirmText = ref('确定')
    const cancelText = ref('取消')
    const placement2 = ref<PlacementType>('bottom')
    const selector2 = ref('')
    const visible2 = ref(false)
    const visible3 = ref(false)
    const showEvent = ref(false)
    const visibleEvent = ref(false)

    const onVisibleStateChange: PopupOnVisibleStateChange = res => {
      if (visibleEvent.value) {
        console.log('visible-state-change', res)
        showToast(`${res.state} 事件触发`)
      }
      if (res.state === 'hidden') {
        showCancel.value = true
        visibleEvent.value = false
        showEvent.value = false
        content.value = '确定要删除该条数据？'
        confirmText.value = '确定'
        cancelText.value = '取消'
      }
    }

    const onCancel: PopupOnCancel = res => {
      if (showEvent.value) {
        console.log('cancel', res)
        showToast(`取消事件触发`)
      }
    }

    const onConfirm = (res: any) => {
      if (showEvent.value) {
        console.log('confirm', res)
        showToast(`确定事件触发`)
      }
    }

    function onCallApi(selector: string) {
      showPopDialog({
        selector,
        placement: 'top',
        content: content.value,
        success: res => {
          console.log('success', res)
          showToast(res.confirm ? `点击了确定` : `点击了取消`)
        }
      })
    }

    return {
      visible,
      content,
      showCancel,
      selector,
      confirmText,
      cancelText,

      placement2,
      visible2,
      selector2,

      visible3,

      showEvent,
      visibleEvent,

      onVisibleStateChange,
      onConfirm,
      onCancel,
      onCallApi
    }
  }
})
</script>

<style lang="scss">
@import '@/style/var.scss';

.exp-popDialog {
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
}
</style>
