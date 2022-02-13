import { shallowMount } from '@vue/test-utils'
import { Modal } from '@/Modal'

describe('Modal', () => {
  test('should render default correctly', () => {
    const wrapper = shallowMount(Modal, {})

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render prop showClose=true correctly', () => {
    const wrapper = shallowMount(Modal, {
      props: {
        showClose: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
