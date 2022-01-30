import { mount, shallowMount } from '@vue/test-utils'
import { Button, ButtonGroup } from '@/Button'
import { delay } from '@jest/utils'

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
  test('snapshot', () => {
    const wrapper = shallowMount(ButtonGroup, {})

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('classes include "count--2" when render 2 buttons', async () => {
    const wrapper = mount(ButtonGroup, {
      slots: {
        default: [Button, Button]
      }
    })

    await delay(100)

    expect(wrapper.classes('count--2')).toBeTruthy()
  })
})
