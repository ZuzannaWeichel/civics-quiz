import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AllQuestions from './views/AllQuestions.vue'
import HistoryQuestions from './views/HistoryQuestions.vue'
import GovQuestions from './views/GovQuestions.vue'
import IntegratedQuestions from './views/IntegratedQuestions.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/all',
      name: 'all-questions',
      component: AllQuestions
      // // route level code-splitting
      // // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: function () { 
      //   return import(/* webpackChunkName: "all-questions" */ './views/AllQuestions.vue')
      // }
    },
    {
      path: '/history',
      name: 'history-questions',
      component: HistoryQuestions
    },
    {
      path: '/government',
      name: 'gov-questions',
      component: GovQuestions
    },
    {
    path: '/integrated',
    name: 'integrated-questions',
    component: IntegratedQuestions
    }
  ]
})
