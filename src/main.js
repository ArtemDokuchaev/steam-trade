import Vue from 'vue'
import App from './App'
import draggable from 'vuedraggable'
import router from '@/router'
import {store} from '@/store'
import {apolloProvider} from '@/graphql'

Vue.component('draggable', draggable)

new Vue({
  el: '#app',
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
})
