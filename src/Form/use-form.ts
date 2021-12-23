import { ref } from 'vue'

export function useInput() {
  const input = ref<HTMLInputElement>()

  function setInputChecked(val: boolean) {
    input.value && (input.value.checked = val)
  }

  function setInputValue(val: string | number) {
    input.value && (input.value.value = val.toString())
  }

  function getInputValue() {
    return input.value?.value ?? ''
  }

  return {
    input,
    getInputValue,
    setInputValue,
    setInputChecked
  }
}
