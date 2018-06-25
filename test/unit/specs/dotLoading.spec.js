import Vue from 'vue'
import dotLoading from '@/components/dotLoading'
import { mount } from '@vue/test-utils'

describe('dotLoading.vue', () => {
  it('should render correct width', () => {
    const wrapper = mount(dotLoading, {
      propsData: {size: '25px'}
    })
    const liArray = wrapper.findAll('li')
    for (let i = 0; i < liArray.length; ++i) {
      expect(liArray.at(i).element.style.width).toBe('25px')
    }
  })
  it('should render correct number', () => {
    const wrapper = mount(dotLoading, {
      propsData: {numbers: 18}
    })
    const liArray = wrapper.findAll('li')
    expect(liArray.length).toBe(18)
  })
})
