import { shallowMount } from '@vue/test-utils'
import { Image } from '@/Image'

const imageUrl = 'https://cdn.fox2.cn/vfox/swiper/center-2.jpg'

describe('Image', () => {
  test('should render prop set imageUrl correctly', () => {
    const wrapper = shallowMount(Image, {
      props: {
        src: imageUrl
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
