import Vue from 'vue'
import dotLoading from '@/components/dotLoading'
import { mount } from '@vue/test-utils'

describe('dotLoading.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(dotLoading)
    wrapper.setProps({size: '25px', radius: 80, numbers: 16, color: '#abcdef'})
    console.log(wrapper.vm)
    const liArray = wrapper.findAll('li')
    for (let i = 0; i < liArray.length; ++i) {
      expect(liArray.at(i).style('width', '25px')).toBe(true)
    }
    // const Constructor = Vue.extend(dotLoading)
    // const vm = new Constructor().$mount({size: '25px', radius: 80, numbers: 16, color: '#abcdef'})
    // expect(vm.$el.querySelector('li').hasStyle('width', '25px'))
    //   .toBeTruthy()
  })
})
