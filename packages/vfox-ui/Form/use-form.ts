import { ref } from 'vue'

export function useInput() {
  const input = ref<HTMLInputElement>()

  function setInputChecked(val: boolean) {
    input.value && (input.value.checked = val)
  }

  function getInputChecked() {
    return input.value?.checked ? true : false
  }

  function setInputValue(val: string | number) {
    input.value && (input.value.value = val.toString())
  }

  function getInputValue() {
    return input.value?.value ?? ''
  }

  function getInputEl() {
    return input.value
  }

  function setFocus() {
    input.value?.focus()
  }

  function setBlur() {
    input.value?.blur()
  }

  return {
    input,
    getInputValue,
    setInputValue,
    getInputChecked,
    setInputChecked,
    getInputEl,
    setFocus,
    setBlur
  }
}
