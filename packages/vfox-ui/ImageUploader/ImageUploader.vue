<template>
  <div
    class="fx-image-uploader"
    :class="['column-' + columnNumber]"
    v-bind="$attrs"
  >
    <Order
      :columnNumber="columnNumber"
      :deletable="deletable"
      :items="orderItems"
      @delete="onDelete"
      @update:items="onUpdateOptions"
    >
      <template #default="{ item }">
        <div
          class="fx-image-uploader_upload-button"
          :class="{ disabled: !!disabled }"
          v-if="item.isAdd"
          @contextmenu.prevent="noop"
        >
          <Icon icon="PlusOutlined" />
          <input
            type="file"
            name=""
            :accept="accept2"
            :disabled="disabled"
            :multiple="multiple"
            @change="onAddFiles"
          />
        </div>
        <div
          class="fx-image-uploader_item"
          v-else
          @contextmenu.prevent="noop"
          @click="onItemClick(item)"
        >
          <Image :src="item.url" :draggable="false" :mode="imageMode" />
          <div
            class="fx-image-uploader_item-status"
            v-if="item.status !== 'uploaded' && item.status !== 'reading'"
          >
            <ActivityIndicator
              v-if="item.status === 'uploading'"
              :size="40"
              color="#ffffff"
            />
            <Icon icon="DeleteOutlined" v-else-if="item.status === 'failed'" />
            <span>{{ item.message }}</span>
          </div>
        </div>
      </template>
    </Order>
    <input type="hidden" :name="name" :value="formValue" ref="input" />
  </div>
  <ImagePreview
    class="fx-image-uploader_preview"
    :urls="formValue"
    v-model:visible="previewVisible"
    v-model:current="previewCurrent"
    showClose
  >
    <template #close="{ activeIndex }">
      <Button
        @click.stop="onPreviewDelete(activeIndex)"
        icon="DeleteOutlined"
        size="large"
        pattern="borderless"
        shape="square"
        :ghost="true"
      ></Button>
    </template>
  </ImagePreview>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, ref } from 'vue'
import type { PropType } from 'vue'
import { Image } from '../Image'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Order } from '../Order'
import { ImagePreview } from '../ImagePreview'
import { showDialog } from '../Dialog'
import { ActivityIndicator } from '../ActivityIndicator'
import {
  isPromiseLike,
  isStringArray,
  isSameArray,
  cloneData,
  noop
} from '../helpers/util'
import { formatFileSize } from '../helpers/digital-conversion'
import { formItemProps } from '../Form/form'
import type { ImageMode } from '../Image/types'
import { locale } from '../Locale'
import type { OnDelete as OrderOnDelete } from '../Order/types'
import type {
  BeforeUpload,
  UploadReady,
  UploadHandlers,
  Accept,
  OnDelete,
  BeforeUploadReturn,
  FileItem,
  AddButton
} from './types'
import type { FnArgs } from '../helpers/types'

type Options = (FileItem | AddButton)[]

const ACCEPT_TYPES = new Map([
  ['all', 'image/*'],
  ['png', 'image/png'],
  ['jpeg', 'image/jpeg'],
  ['jpg', 'image/jpeg'],
  ['webp', 'image/webp']
])

function getAccepts(val: string | string[]) {
  const arr = isStringArray(val)
    ? (val as string[])
    : typeof val === 'string'
    ? val.split(',')
    : []
  let ret: string[] = []

  for (let i = 0; i < arr.length; i++) {
    const accept = ACCEPT_TYPES.get(arr[i])

    if (arr[i] === 'all') {
      ret = [accept as string]
      break
    } else if (accept) {
      ret.push(accept)
    }
  }

  return ret
}

const isValue = (val: string[]) => isStringArray(val)

export default defineComponent({
  name: 'fx-image-uploader',
  components: {
    Order,
    Icon,
    ImagePreview,
    Button,
    Image,
    ActivityIndicator
  },
  props: {
    ...formItemProps,
    modelValue: {
      type: Array as PropType<string[]>,
      validator: isValue,
      default: () => [] as string[]
    },
    // 允许上传的图片类型
    accept: {
      type: [String, Array] as PropType<string | Accept[]>,
      validator: (val: string | Accept[]) => getAccepts(val).length > 0,
      default: 'all'
    },
    // 多少列展示
    columnNumber: {
      type: Number,
      default: 3
    },
    maxCount: {
      type: Number,
      default: 9
    },
    // 点击图片预览全图
    preview: {
      type: Boolean,
      default: true
    },
    // 支持多图片上传
    multiple: {
      type: Boolean,
      default: false
    },
    // 允许删除
    deletable: {
      type: Boolean,
      default: true
    },
    // 图片填充模式
    imageMode: {
      type: String as PropType<ImageMode>,
      default: 'aspectFill'
    },
    // 上传前处理函数，主要是判断大小，压缩等
    beforeUpload: {
      type: Function as PropType<BeforeUpload>,
      default: () => true
    },
    // 上传函数，在该函数内处理上传过程
    uploadReady: {
      type: Function as PropType<UploadReady>,
      default: () => true
      // required: true
    }
  },
  emits: {
    'update:modelValue': isValue,
    change: isValue,
    delete: (payload: FnArgs<OnDelete>[0]) =>
      payload && typeof payload.index === 'number'
  },
  setup(props, ctx) {
    const { emit } = ctx
    let uid = 1

    const orderItems = reactive<Options>([])
    const formValue = ref<string[]>([])
    const previewVisible = ref(false)
    const previewCurrent = ref('')

    function onAddFiles(e: Event) {
      const files = (e.target as HTMLInputElement).files || []

      for (let i = 0; i < files.length; i++) {
        addFile(files[i])
      }
    }

    function addFile(file: File) {
      beforePromise(
        props.beforeUpload(file, {
          formatSize: formatFileSize
        })
      ).then(res => {
        if (res instanceof File) {
          file = res
          res = true
        }

        res && uploadFile(file)
      })
    }

    function uploadFile(file: File) {
      if (orderItems.length - (hasUploadButton() ? 1 : 0) >= props.maxCount) {
        return
      }

      const fileItem: FileItem = {
        id: ++uid,
        status: 'reading',
        message: 'Reading'
      }

      orderItems.splice(
        orderItems.length - (hasUploadButton() ? 1 : 0),
        0,
        fileItem
      )

      updateUploadButton()

      props.uploadReady(file, createUploadHandlers(fileItem.id))
    }

    function beforePromise(res: BeforeUploadReturn) {
      if (res == null) {
        return Promise.resolve(true)
      } else if (typeof res === 'boolean') {
        return Promise.resolve(res)
      } else if (isPromiseLike(res)) {
        return (res as Promise<boolean | File>)
          .then(res => {
            if (res instanceof File) {
              return res
            }

            return !!res
          })
          .catch(() => {
            return false
          })
      }

      return Promise.resolve(res instanceof File ? res : true)
    }

    function getFileItemById(id: number) {
      for (let i = 0; i < orderItems.length; i++) {
        if (orderItems[i].id === id) {
          return orderItems[i] as FileItem
        }
      }
      return null
    }

    /**
     * 是否完成上传
     */
    function isDone(fileItem: FileItem) {
      return fileItem.status === 'failed' || fileItem.status === 'uploaded'
    }

    function createUploadHandlers(id: number): UploadHandlers {
      return {
        getUploadId: () => id,
        formatSize: formatFileSize,
        setUploading(message) {
          const fileItem = getFileItemById(id)

          if (fileItem && !isDone(fileItem)) {
            fileItem.status = 'uploading'
            fileItem.message = message || 'Uploading'
          }
        },
        fail(e) {
          const fileItem = getFileItemById(id)

          if (fileItem && !isDone(fileItem)) {
            if (e instanceof Error) {
              fileItem.message = e.message
            } else if (e) {
              fileItem.message = e.toString()
            } else {
              fileItem.message = 'Failed'
            }
            fileItem.status = 'failed'
          }
        },
        success(url) {
          const fileItem = getFileItemById(id)

          if (fileItem && !isDone(fileItem)) {
            fileItem.url = url
            fileItem.status = 'uploaded'
            fileItem.message = 'Uploaded'
            urlId(url, id)

            updateValue()
          }
        }
      }
    }

    function updateValue() {
      const newVal: string[] = []

      orderItems.forEach(fileItem => {
        fileItem = fileItem as FileItem

        if (fileItem.status === 'uploaded' && fileItem.url) {
          newVal.push(fileItem.url)
        }
      })

      if (!isSameArray(newVal, formValue.value)) {
        formValue.value = newVal

        emit('update:modelValue', cloneData(newVal))
        emit('change', cloneData(newVal))
      }
    }

    /**
     * 是否存在添加按钮
     */
    function hasUploadButton() {
      if (orderItems.length === 0) {
        return false
      }

      return (orderItems[orderItems.length - 1] as AddButton).isAdd || false
    }

    function updateUploadButton() {
      if (hasUploadButton()) {
        if (orderItems.length > props.maxCount) {
          // 超过要删掉按钮
          orderItems.splice(orderItems.length - 1, 1)
        }
      } else {
        if (orderItems.length < props.maxCount) {
          orderItems.push({
            id: 1,
            isAdd: true,
            draggable: false
          })
        }
      }
    }

    function isSameUploadedList() {
      const value = cloneData(props.modelValue)

      for (let i = 0; i < orderItems.length; i++) {
        const fileItem = orderItems[i] as FileItem

        if (fileItem.status === 'uploaded') {
          if (value.length === 0) {
            // orderItems 还有 value 没了
            return false
          }

          if (fileItem.url === value[0]) {
            value.shift()
          } else {
            return false
          }
        }
      }

      return value.length === 0
    }

    function updateUploadedList() {
      if (isSameUploadedList()) {
        return
      }

      const cache: FileItem[] = []

      orderItems.forEach(v => {
        if ((v as FileItem).status === 'uploading') {
          cache.push(v as FileItem)
        }
      })

      orderItems.splice(0, Infinity)
      formValue.value = []

      props.modelValue.forEach(url => {
        orderItems.push({
          id: urlId(url),
          status: 'uploaded',
          url: url,
          message: 'Uploaded'
        })

        formValue.value.push(url)
      })

      cache.length > 0 && orderItems.push(...cache)

      updateUploadButton()
    }

    function onUpdateOptions(_options: Options) {
      orderItems.splice(0, Infinity, ..._options)
      updateUploadButton()

      updateValue()
    }

    const urlIdCache: Record<string, number> = {}

    function urlId(url: string, id?: number) {
      url = url.substring(url.length - 100)

      if (id) {
        urlIdCache[url] = id
        return id
      }

      return urlIdCache[url] || (urlIdCache[url] = ++uid)
    }

    function onItemClick(item: { id: number }) {
      const fileItem = getFileItemById(item.id)

      if (fileItem) {
        if (fileItem.status === 'uploaded') {
          if (props.preview) {
            previewCurrent.value = fileItem.url as string
            previewVisible.value = true
          }
        } else if (fileItem.status === 'failed') {
          for (let i = 0; i < orderItems.length; i++) {
            if (orderItems[i].id === fileItem.id) {
              orderItems.splice(i, 1)
              updateUploadButton()
            }
          }
        }
      }
    }

    const onDelete: OrderOnDelete = ({ index, item }) => {
      const fileItem = getFileItemById(item.id as number)

      fileItem &&
        emit('delete', {
          index,
          item: {
            id: fileItem.id,
            status: fileItem.status,
            url: fileItem.url || null
          }
        })
    }

    function onPreviewDelete(activeIndex: number) {
      const current = formValue.value[activeIndex]

      for (let i = 0, j = 0; i < orderItems.length; i++) {
        const optionItem = orderItems[i] as FileItem

        if (optionItem.status === 'uploaded') {
          if (j === activeIndex && optionItem.url === current) {
            showDialog({
              content: locale.value.imageUploaderDeleteContent,
              confirmText: locale.value.imageUploaderDeleteConfirmText
            }).then(res => {
              if (res.confirm) {
                orderItems.splice(i, 1)
                updateUploadButton()
                updateValue()

                if (formValue.value.length === 0) {
                  previewVisible.value = false
                }
              }
            })

            break
          }

          j++
        }
      }
    }

    const accept2 = computed(() => {
      return getAccepts(props.accept as string).join(', ')
    })

    watch(() => props.modelValue, updateUploadedList, {
      immediate: true,
      deep: true
    })

    watch(() => props.maxCount, updateUploadButton)

    updateUploadButton()

    return {
      formValue,
      orderItems,
      accept2,
      onAddFiles,
      onUpdateOptions,
      onItemClick,
      onDelete,
      previewVisible,
      previewCurrent,
      onPreviewDelete,
      noop
    }
  }
})
</script>
