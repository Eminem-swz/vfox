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
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  ref,
  watch
} from 'vue'
import type { PropType } from 'vue'
import { Icon } from '../Icon'
import { Input } from '../Input'
import { Button } from '../Button'
import { Dropdown } from '../Dropdown'
import { Cell } from '../Cell'
import { Tag } from '../Tag'
import { isStringArray } from '../helpers/util'
import { locale } from '../Locale'
import { emitEventValidator } from '../helpers/validator'
import type {
  OnFieldClick,
  OnInput,
  OnSearch,
  SuggestItem,
  SuggestList
} from './types'
import type { VoidFnToBooleanFn, FnArgs } from '../helpers/types'

type Placeholders = string | string[]

const emitValidator: VoidFnToBooleanFn<OnInput> = (payload, setSuggestList) =>
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
    cancel: emitEventValidator,
    input: emitValidator,
    focus: emitValidator,
    blur: emitValidator,
    search: (payload: FnArgs<OnSearch>[0]) =>
      payload &&
      typeof payload.text === 'string' &&
      typeof payload.source === 'string',
    'field-click': (payload: FnArgs<OnFieldClick>[0]) =>
      payload && typeof payload.text === 'string'
  },
  setup(props, { emit }) {
    const placeholder = ref('')
    const searchText = ref('')
    const enableDropdown = ref(false)
    const suggestVisible = ref(false)
    const suggestList = ref<SuggestItem[]>([])

    function proxyEvent(e: Event) {
      emitHook(e.type, searchText.value)
    }

    function onInput(text: string) {
      emitHook('input', text)
    }

    const emitHook = (type: string, text: string) => {
      emit(
        type as 'input',
        {
          text
        },
        res => {
          setSuggestList(res, text !== searchText.value)
        }
      )
    }

    function setSuggestList(res: SuggestList, expired: boolean) {
      if (expired) {
        return
      }

      const newList: SuggestItem[] = []

      if (Array.isArray(res)) {
        res.forEach(v => {
          if (typeof v === 'string' || typeof v === 'number') {
            newList.push({
              text: v.toString(),
              tags: []
            })
          } else if (v) {
            if (typeof v.text === 'string' || typeof v.text === 'number') {
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

    function onCancel(e: Event) {
      emit('cancel', e)
    }

    function onClick() {
      emit('field-click', {
        text: searchText.value || placeholder.value || ''
      })
    }

    let phTimer: number
    let phIndex = 0
    let phs: string[] = []
    let isTimerReady = false

    const phsStart = () => {
      phsStop()

      if (isTimerReady && phs.length > 1) {
        phTimer = window.setTimeout(() => {
          phIndex = (phIndex + 1) % phs.length
          placeholder.value = phs[phIndex]
          phsStart()
        }, props.placeholderInterval)
      }
    }

    const phsStop = () => clearTimeout(phTimer)

    watch(
      () => props.placeholders,
      (val: Placeholders) => {
        phsStop()

        if (typeof val === 'string') {
          placeholder.value = val
          phs = [val]
        } else if (isStringArray(val) && val.length > 0) {
          phIndex = 0
          placeholder.value = val[phIndex]
          phs = val

          phsStart()
        } else {
          placeholder.value = ''
          phs = []
        }
      },
      {
        deep: true,
        immediate: true
      }
    )

    onBeforeMount(() => {
      isTimerReady = true
      phsStart()
    })

    onBeforeUnmount(() => phsStop())

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
      locale,
      setSuggestList: (res: SuggestList) => setSuggestList(res, false)
    }
  }
})
</script>
