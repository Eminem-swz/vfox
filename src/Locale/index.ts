import { ref, Ref } from 'vue'
import type { LangPack } from './types'
import zhCN from './lang/zh-CN'
import Exception from '@/helpers/exception'

export function useLocale() {
  const packs: Record<string, LangPack> = {}
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

  function use(lang: string, newPack?: LangPack) {
    if (newPack && lang) {
      packs[lang] = newPack
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
    use,
    merge
  }
}

const { packs, locale, use, merge } = useLocale()

use('zh-CN', zhCN)

export { packs, locale, use, merge }
export default { packs, locale, use, merge }
