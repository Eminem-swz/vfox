import { shallowMount } from '@vue/test-utils'
import { Dropdown } from '@/Dropdown'

describe('Dropdown', () => {
  test('should render default correctly', () => {
    const wrapper = shallowMount(Dropdown, {
      props: {
        selector: '#test'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
