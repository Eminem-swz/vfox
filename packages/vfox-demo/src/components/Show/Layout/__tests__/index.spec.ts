import { shallowMount } from '@vue/test-utils'
import { Row } from '@/Row'
import { Col } from '@/Col'

describe('Layout', () => {
  test('Row should render default correctly', () => {
    const wrapper = shallowMount(Row, {})

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Col should render default slot correctly', () => {
    const wrapper = shallowMount(Col, {
      slots: {
        default: 'content'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Row & Col should render default correctly', () => {
    const wrapper = shallowMount(Row, {
      slots: {
        default: shallowMount(Col, {
          slots: {
            default: 'content'
          }
        }).html()
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
