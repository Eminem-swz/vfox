import { shallowMount } from '@vue/test-utils'
import { Group } from '@/Group'
import { Cell } from '@/Cell'

const title = 'title'

describe('Group', () => {
  test('should render prop set title correctly', () => {
    const wrapper = shallowMount(Group, {
      props: {
        title
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render default slot correctly', () => {
    const wrapper = shallowMount(Group, {
      props: {
        title
      },
      slots: {
        default: [Cell]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
