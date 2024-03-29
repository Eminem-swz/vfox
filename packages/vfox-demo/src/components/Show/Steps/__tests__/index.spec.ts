import { shallowMount } from '@vue/test-utils'
import { Steps, Step } from '@/Steps'

describe('Steps', () => {
  test('Steps should render default correctly', () => {
    const wrapper = shallowMount(Steps, {})

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Step should render default correctly', () => {
    const wrapper = shallowMount(Step, {
      props: { title: 'title-1' },
      slots: {
        default: 'content-1'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
