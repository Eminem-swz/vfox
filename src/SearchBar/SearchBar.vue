<template>
  <div class="fx-search">
    <form
      class="fx-search_inner"
      :class="{ 'has--cancel': showCancel }"
      @submit.prevent="onSearch(searchText)"
      ref="inner"
      :style="{ background }"
    >
      <Input
        class="fx-search_field"
        :class="{ ghost: !!ghost }"
        :placeholder="placeholder"
        type="search"
        :disabled="readonly"
        v-model="searchText"
        :focus="focus"
        :maxlength="maxlength"
        showClear
        @input="onInput"
        @focus="proxyEvent"
        @blur="proxyEvent"
        @click="onClick"
      >
        <template #prepend>
          <Icon icon="SearchOutlined" />
        </template>
      </Input>
      <button class="fx-search_button">Search</button>
      <Button
        class="fx-search_cancel-button"
        size="large"
        type="default"
        pattern="borderless"
        :ghost="ghost"
        :transparent="!ghost"
        v-if="showCancel"
        @click="onCancel"
      >
        {{ locale.searchBarCancelText }}
      </Button>
    </form>
    <Dropdown
      :selector="$refs.inner"
      v-if="enableDropdown"
      v-model:visible="suggestVisible"
    >
      <template #default="{ height }">
        <div
          class="fx-search_suggest fx-horizontal-hairline"
          :style="{ height: height + 'px' }"
        >
          <div class="fx-search_suggest-list">
            <Cell
              v-for="item in suggestList"
              :key="item.text"
              :label="item.text.toString()"
              class="fx-search_suggest-item"
              clickable
              @click="onSuggestItemClick(item.text)"
            >
              <Tag v-for="tag in item.tags" :key="tag">{{ tag }}</Tag>
            </Cell>
          </div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { Icon } from '@/Icon'
import { Input } from '@/Input'
import { Button } from '@/Button'
import { Dropdown } from '@/Dropdown'
import { Cell } from '@/Cell'
import { Tag } from '@/Tag'
import { isObject, isStringArray, isStringNumberMix } from '@/helpers/util'
import { locale } from '@/Locale'
import { emitTypeValidator } from '@/helpers/validator'
import type {
  SearchBarSetSuggestList,
  SearchBarSuggestItem,
  SearchBarSuggestList
} from './types'

type Placeholders = string | string[]

const emitValidator = (
  payload: {
    type: string
    text: string
  },
  setSuggestList: SearchBarSetSuggestList
) =>
  payload &&
  typeof payload.text === 'string' &&
  typeof setSuggestList === 'function'

export default defineComponent({
  name: 'fx-search-bar',
  components: { Icon, Input, Button, Dropdown, Cell, Tag },
  props: {
    ghost: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 100
    },
    // 背景颜色
    background: {
      type: String,
      default: null
    },
    placeholders: {
      type: [String, Array] as PropType<Placeholders>,
      validator: (val: Placeholders) =>
        typeof val === 'string' || isStringArray(val),
      default: () => [] as string[]
    },
    placeholderInterval: {
      type: Number,
      default: 5000
    }
  },
  emits: {
    cancel: emitTypeValidator,
    input: emitValidator,
    focus: emitValidator,
    blur: emitValidator,
    search: (payload: { text: string; source: string }) =>
      payload &&
      typeof payload.text === 'string' &&
      typeof payload.source === 'string',
    click: (payload: { searchText: string; type: string }) =>
      payload && typeof payload.searchText === 'string'
  },
  setup(props, { emit }) {
    const placeholder = ref('')
    const searchText = ref('')
    const enableDropdown = ref(false)
    const suggestVisible = ref(false)
    const suggestList = ref<SearchBarSuggestItem[]>([])

    function proxyEvent(e: Event) {
      const text = searchText.value

      emit(
        e.type as 'focus',
        {
          type: e.type,
          text
        },
        res => {
          setSuggestList(res, text !== searchText.value)
        }
      )
    }

    function onInput(text: string) {
      emit(
        'input',
        {
          type: 'input',
          text
        },
        res => {
          setSuggestList(res, text !== searchText.value)
        }
      )
    }

    function setSuggestList(res: SearchBarSuggestList, expired: boolean) {
      if (expired) {
        return
      }

      const newList: SearchBarSuggestItem[] = []

      if (Array.isArray(res)) {
        res.forEach(v => {
          if (isStringNumberMix(v)) {
            newList.push({
              text: (v as string | number).toString(),
              tags: []
            })
          } else if (isObject(v)) {
            v = v as SearchBarSuggestItem

            if (isStringNumberMix(v.text)) {
              v.text = v.text.toString()
              v.tags = isStringArray(v.tags) ? v.tags : []
              newList.push(v)
            }
          }
        })
      }

      suggestList.value = newList

      if (newList.length > 0) {
        enableDropdown.value = true
        suggestVisible.value = true
      } else {
        suggestVisible.value = false
      }
    }

    function onSearch(text: string, source = 'search') {
      suggestVisible.value = false

      if (text === '' && placeholder.value) {
        searchText.value = text = placeholder.value
      }

      emit('search', {
        text,
        source
      })
    }

    function onSuggestItemClick(text: string | number) {
      searchText.value = text.toString()

      onSearch(text.toString(), 'suggest')
    }

    function onCancel() {
      emit('cancel', { type: 'cancel' })
    }

    function onClick() {
      emit('click', {
        type: 'click',
        searchText: searchText.value || placeholder.value || ''
      })
    }

    let placeholderTimer: number
    let placeholderIndex = 0

    onBeforeUnmount(() => clearInterval(placeholderTimer))

    watch(
      () => props.placeholders,
      (val: Placeholders) => {
        clearInterval(placeholderTimer)

        if (typeof val === 'string') {
          placeholder.value = val
        } else if (isStringArray(val)) {
          placeholderIndex = 0
          placeholder.value = val[placeholderIndex]

          placeholderTimer = window.setInterval(() => {
            placeholderIndex = (placeholderIndex + 1) % val.length
            placeholder.value = val[placeholderIndex]
          }, props.placeholderInterval)
        } else {
          placeholder.value = ''
        }
      },
      {
        deep: true,
        immediate: true
      }
    )

    return {
      placeholder,
      enableDropdown,
      suggestVisible,
      suggestList,
      searchText,
      proxyEvent,
      onInput,
      onSearch,
      onSuggestItemClick,
      onCancel,
      onClick,
      locale
    }
  }
})
</script>
