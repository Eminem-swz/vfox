import { shallowMount } from '@vue/test-utils'
import { Form, FormItem } from '@/Form'

describe('Form', () => {
  test('Form should render default correctly', () => {
    const wrapper = shallowMount(Form, {})

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('FormItem should render default correctly', () => {
    const wrapper = shallowMount(FormItem, {
      props: {
        name: 'test'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
