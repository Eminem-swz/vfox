import { ref } from 'vue'
import type { Ref } from 'vue'
import type { LangPack } from './types'
import zhCN from '../Locale/lang/zh-CN'
import Exception from '../helpers/exception'

export function useLocale() {
  const packs: Record<string, LangPack> = {
    'zh-CN': zhCN
  }
  const locale: Ref<LangPack> = ref(zhCN)

  function langExist(lang: string) {
    if (!packs[lang]) {
      console.error(
        new Exception(
          `The ${lang} pack does not exist. You must join manually.`,
          Exception.TYPE.PARAM_ERROR,
          'Locale'
        )
      )
      return false
    }
    return true
  }

  function add(lang: string, newPack: LangPack) {
    packs[lang] = newPack
  }

  function use(lang: string, newPack?: LangPack) {
    if (newPack && lang) {
      add(lang, newPack)
    } else if (!langExist(lang)) {
      return
    }

    locale.value = packs[lang]
  }

  function merge(lang: string, newPack: Partial<LangPack>) {
    if (!langExist(lang)) {
      return
    }

    packs[lang] = { ...packs[lang], ...newPack }
    use(lang)
  }

  return {
    packs,
    locale,
    add,
    use,
    merge
  }
}

const { packs, locale, add, use, merge } = useLocale()

export { packs, locale, add, use, merge }
export default { packs, locale, add, use, merge }
