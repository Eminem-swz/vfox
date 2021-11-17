import { isDate } from '@/helpers/util'
import { parseParamsByRules } from '@/apis/rules'

interface CreateStorageOptions {
  areaName: string
  perLimitSize: number
  limitSize: number
}

export function createStorage(
  areaName: string,
  options?: Partial<CreateStorageOptions>
) {
  // if (!options || !isObject(options)) {
  //   options = {} as ApiOptions
  // }

  const {
    areaName: _areaName,
    perLimitSize,
    limitSize
  } = parseParamsByRules<CreateStorageOptions>(
    Object.assign({ areaName }, options || {}),
    'createStorage'
  )

  const prefix = _areaName + ':'

  /**
   * 从本地缓存中获取指定 key 的内容
   * @param key
   */
  function getStorage(key: string) {
    parseParamsByRules(
      {
        key
      },
      'getStorage'
    )

    const value = localStorage.getItem(prefix + key)

    if (value) {
      try {
        const ret = JSON.parse(value)

        if (ret.isApp) {
          return ret.isDate ? new Date(ret.data) : ret.data
        }
      } catch (e) {
        //
      }

      return null
    }
  }
  /**
   * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1024KB，所有数据存储上限为 2560KB
   * @param key
   * @param data
   */
  function setStorage(key: string, data: any) {
    parseParamsByRules(
      {
        key,
        data
      },
      'setStorage'
    )

    const storageInfo = getStorageInfo()

    const value = JSON.stringify({
      isDate: isDate(data),
      data
    })

    const valueSize = value.length / 1024

    if (valueSize > perLimitSize) {
      throw new Error(
        `Storage error: per storage limit size exceeded ${perLimitSize}KB.`
      )
    }

    if (storageInfo.currentSize + valueSize > storageInfo.limitSize) {
      // 超过限制大小
      throw new Error(
        `Storage error: total storage limit size exceeded ${limitSize}KB.`
      )
    }

    localStorage.setItem(prefix + key, value)
  }
  /**
   * 从本地缓存中移除指定 key
   * @param key
   */
  function removeStorage(key: string) {
    parseParamsByRules(
      {
        key
      },
      'removeStorage'
    )

    localStorage.removeItem(prefix + key)
  }
  /**
   * 清理本地数据缓存
   */
  function clearStorage() {
    // localStorage.clear()

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string

      if (key.indexOf(prefix) === 0) {
        // 只删除有当前api集存储的数据
        localStorage.removeItem(key)
      }
    }
  }
  /**
   * 获取当前storage的相关信息
   */
  function getStorageInfo() {
    const keys = []
    let size = 0

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string

      if (key.indexOf(prefix) === 0) {
        // 只显示有当前api集存储的数据
        keys.push(key.replace(prefix, ''))
      }

      size += (localStorage.getItem(key) as string).length
    }

    return {
      keys,
      currentSize: size / 1024,
      limitSize
    }
  }

  return {
    getStorage,
    setStorage,
    removeStorage,
    clearStorage,
    getStorageInfo
  }
}
