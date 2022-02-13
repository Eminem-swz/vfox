import { shallowMount } from '@vue/test-utils'
import { Icon } from '@/Icon'

describe('Icon', () => {
  test('should render prop icon="UpOutlined" correctly', () => {
    const wrapper = shallowMount(Icon, {
      props: {
        icon: 'UpOutlined'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
