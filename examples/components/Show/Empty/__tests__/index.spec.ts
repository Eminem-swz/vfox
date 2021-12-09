import { shallowMount } from '@vue/test-utils'
import { Empty } from '@/Empty'
import { Image } from '@/Image'

describe('Empty', () => {
  test('should render prop set description correctly', () => {
    const wrapper = shallowMount(Empty, {
      props: {
        description: 'description'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render set image slot correctly', () => {
    const wrapper = shallowMount(Empty, {
      props: {
        description: 'description'
      },
      slots: {
        image: shallowMount(Image, {
          props: {
            src: 'https://cdn.fox2.cn/vfox/swiper/different-1.jpg'
          }
        }).html()
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
