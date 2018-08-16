import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/pages/home'], resolve),

    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login/login'], resolve),

    },
    {
      path: '/signup',
      name: 'signup',
      component: resolve => require(['@/components/login/signup'], resolve),

    },
    //验证
    {
        path: '/approve',
        name: 'approve',
        component: resolve => require(['@/components/approve/approve'], resolve),
        children:[
          {
              path: '',
              name: 'step1',
              component: resolve => require(['@/components/approve/step1'], resolve)
          },
          {
              path: '/step2',
              name: 'step2',
              component: resolve => require(['@/components/approve/step2'], resolve)
          },
          {
              path: '/step3',
              name: 'step3',
              component: resolve => require(['@/components/approve/step3'], resolve)
          },
        ]
    },
    {
        path: '/tabs',
        name: 'tabs',
        component: resolve => require(['@/components/tabs/homeTabber'], resolve),
        children:[
          {
              path: '/page1',
              name: 'page1',
              component: resolve => require(['@/components/tabs/page1'], resolve)
            },
          {
              path: '/page2',
              name: 'page2',
              component: resolve => require(['@/components/tabs/page2'], resolve)
            },
            {
              path: '/page3',
              name: 'page3',
              component: resolve => require(['@/components/tabs/page3'], resolve)
            },
        ]
      },
  ]
})

