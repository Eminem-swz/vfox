import { shallowMount } from '@vue/test-utils'
import { SideTab } from '@/SideTab'

import { mixTabList, tabList } from '../../Tab/data'

describe('SideTab', () => {
  test('should render set options correctly', () => {
    const wrapper = shallowMount(SideTab, {
      props: {
        options: tabList
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render set mix options correctly', () => {
    const wrapper = shallowMount(SideTab, {
      props: {
        options: mixTabList
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
