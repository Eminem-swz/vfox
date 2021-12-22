import { multiWithInstall } from '@/helpers/with-install'
import Form from './Form.vue'
import { default as _FormItem } from './FormItem.vue'
import { connect, mapProps } from '@formily/vue'
import { isVoidField } from '@formily/core'

const FormItem = connect(
  _FormItem,
  mapProps(
    { validateStatus: true, title: 'label', required: true },
    (props, field) => {
      if (isVoidField(field)) return props
      if (!field) return props

      const getMessage = () => {
        if (field.validating) return
        if (props.errMsg) return props.errMsg
        if (field.selfErrors.length) return field.selfErrors.join(', ')
        // if (field.selfWarnings.length) return split(field.selfWarnings)
        // if (field.selfSuccesses.length) return split(field.selfSuccesses)
      }

      return {
        errMsg: getMessage()
      }
    }
  )
)

export { Form, FormItem }
export default multiWithInstall(Form, [FormItem])
