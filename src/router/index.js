import Vue from 'vue'
import Router from 'vue-router'
import TradePage from '@/components/TradePage'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      component: TradePage
    }
  ]
})
