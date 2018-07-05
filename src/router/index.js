import Vue from 'vue'
import Router from 'vue-router'
import dotLoading from '@/components/dotLoading'
import picHover from '@/components/picHover'
import RecycleListView from '@/components/RecycleListView'
import SinglePage from '@/components/SinglePage'

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
      name: 'picHover',
      component: picHover,
      props: {isShowing: true}
    },
    {
      path: '/recycle',
      name: 'RecycleListView',
      component: RecycleListView
    },
    {
      path: '/singlePage',
      name: 'singlePage',
      component: SinglePage,
      props: {
        imgSrc: require('../assets/1.jpg')
      }
    }
  ]
})
