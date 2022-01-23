import { onBeforeMount, onBeforeUnmount, ref } from 'vue'

type Callback = (w: number, h: number) => void

const clientCache = { w: 0, h: 0 }

const callbacks: Callback[] = []
let callbackTimer: number

function onCallback() {
  clearTimeout(callbackTimer)
  callbackTimer = window.setTimeout(() => {
    clientCache.w = document.documentElement.clientWidth
    clientCache.h = document.documentElement.clientHeight

    callbacks.forEach(v => {
      v(clientCache.w, clientCache.h)
    })
  }, 100)
}

function addCallback(fn: Callback) {
  callbacks.push(fn)

  if (callbacks.length === 1) {
    window.addEventListener('resize', onCallback)
  }

  return function removeCallback() {
    callbacks.splice(callbacks.indexOf(fn), 1)

    if (callbacks.length === 0) {
      window.removeEventListener('resize', onCallback)
    }
  }
}

export function useResize() {
  if (typeof document !== 'undefined') {
    onCallback()
  }

  const client = ref({
    width: clientCache.w,
    height: clientCache.h
  })

  let stopHandle: () => void

  onBeforeMount(
    () =>
      (stopHandle = addCallback((w, h) => {
        client.value = {
          width: w,
          height: h
        }
      }))
  )

  onBeforeUnmount(() => stopHandle && stopHandle())

  return {
    client
  }
}
