import Vue from 'vue'
import Router from 'vue-router'
import dotLoading from '@/components/dotLoading'
import picHover from '@/components/picHover'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dotLoading',
      component: dotLoading
    },
    {
      path: '/picHover',
      name: picHover,
      component: picHover,
      props: {isShowing: true}
    }
  ]
})
