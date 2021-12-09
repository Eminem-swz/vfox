import { shallowMount } from '@vue/test-utils'
import { Button, ButtonGroup } from '@/Button'

describe('Button', () => {
  test('should render default slot correctly', () => {
    const wrapper = shallowMount(Button, {})

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render add icon correctly', () => {
    const wrapper = shallowMount(Button, {
      props: {
        icon: 'EditOutlined'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('ButtonGroup', () => {
  test('should render 2 buttons slot correctly', () => {
    const wrapper = shallowMount(ButtonGroup, {
      slots: {
        default: [Button, Button]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
