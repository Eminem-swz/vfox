import { shallowMount } from '@vue/test-utils'
import { Badge } from '@/Badge'

describe('Badge', () => {
  test('should render default slot correctly', () => {
    const wrapper = shallowMount(Badge, {})

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render prop content=1 correctly', () => {
    const wrapper = shallowMount(Badge, {
      props: {
        content: 1
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render prop content=1000 correctly', () => {
    const wrapper = shallowMount(Badge, {
      props: {
        content: 1000
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render prop dot=true correctly', () => {
    const wrapper = shallowMount(Badge, {
      props: {
        content: 1,
        dot: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
