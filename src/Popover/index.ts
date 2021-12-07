import { App } from 'vue'
import { SFCWithInstall } from '@/helpers/types'
import Popover from './Popover.vue'
import type { ApiFnOptions } from '../apis/types'
import { createAlertHook, showPopup } from '@/apis/Popup'
import type { DomSelector } from '../helpers/types'
import type { PlacementType } from '../helpers/types'

type ShowPopoverOptions = {
  selector: DomSelector
  content: string
} & Partial<
  {
    placement: PlacementType
  } & ApiFnOptions
>

const showPopover = function (object: ShowPopoverOptions) {
  return showPopup(object, 'showPopover', function (done) {
    return {
      component: Popover,
      hook: createAlertHook(done)
    }
  })
}

const _Popover: SFCWithInstall<typeof Popover> & {
  showPopover: typeof showPopover
} = Object.assign(Popover, {
  install: function (app: App) {
    app.component(Popover.name, Popover)
  },
  showPopover
})

export default _Popover
