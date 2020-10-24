import Vue from 'vue'
import Router from 'vue-router'
import MAIN from '@/scene/main'
import WELCOME from '@/scene/welcome'
import SETTING from '@/scene/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MAIN
    },
    {
      path: '/welcome',
      component: WELCOME
    },
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
    {
      path: '/setting',
      component: SETTING
    }
  ]
})
