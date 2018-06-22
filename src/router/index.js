import Vue from 'vue'
import Router from 'vue-router'
import dotLoading from '@/components/dotLoading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dotLoading',
      component: dotLoading
    }
  ]
})
