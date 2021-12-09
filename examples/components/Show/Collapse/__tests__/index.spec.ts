import { shallowMount } from '@vue/test-utils'
import { Collapse, CollapseItem } from '@/Collapse'

describe('Collapse', () => {
  test('Collapse should render default correctly', () => {
    const wrapper = shallowMount(Collapse, {})

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('CollapseItem should render default correctly', () => {
    const wrapper = shallowMount(CollapseItem, {
      props: { name: 'item-1', title: 'title-1' }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
