import Vue from 'vue'
import Router from 'vue-router'
import dotLoading from '@/components/dotLoading'
import picHover from '@/components/picHover'
import RecycleListView from '@/components/RecycleListView'
import ListView from '@/components/ListView'
import SinglePge from '@/components/SinglePge'

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
      path: '/singlePge',
      name: 'singlePge',
      component: SinglePge,
      props: {
        imgSrc: require('../assets/1.jpg')
      }
    },
    {
      path: '/listview',
      name: 'ListView',
      component: ListView
    }
  ]
})
