import Vue from 'vue'
import dotLoading from '@/components/dotLoading'
import { mount } from '@vue/test-utils'

describe('dotLoading.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(dotLoading)
    wrapper.setProps({size: '25px', radius: 80, numbers: 16, color: '#abcdef'})
    console.log(wrapper.vm.size)
    const liArray = wrapper.findAll('li')
    console.log(liArray.at(0).vnode.data.style)
    for (let i = 0; i < liArray.length; ++i) {
      console.log(liArray.at(i).element.style.width)
    }
  })
})
