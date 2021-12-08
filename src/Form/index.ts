import { multiWithInstall } from '@/helpers/with-install'
import Form from './Form.vue'
import FormItem from './FormItem.vue'

export { Form, FormItem }
export default multiWithInstall(Form, [FormItem])
