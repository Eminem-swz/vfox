import { shallowMount } from '@vue/test-utils'
import { Copy } from '@/Copy'

describe('Copy', () => {
  test('should render prop text="content" correctly', () => {
    const wrapper = shallowMount(Copy, {
      props: {
        text: 'content'
      },
      slots: {
        default: 'content'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
