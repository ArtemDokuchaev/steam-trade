import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import {apolloProvider} from '@/graphql'
import {loginLink, apiHost, apiPort} from '@/env-vars'
// Modules
import {coreStore} from 'ds-ui-core'
// Plugins
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    projectName: 'TradePage',
    yourInventory: [
          "http://placehold.it/100x101",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100"],
    theirInventory: [
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100"],
    yourOffer: [
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100"],
    theirOffer: [
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100"],
    apiHost,
    apiPort,
    loginLink

  },
  mutations: {
    updateInventory(state, payload) {
      // console.log(payload);
      state.yourInventory = payload;
    },
    updateYourOffer(state, payload) {
      // console.log(payload);
      state.yourOffer = payload;
    },
    updateTheirOffer(state, payload) {
      // console.log(payload);
      state.theirOffer = payload;
    },
    discard(state) {
      // state.yourInventory = [
      //     {link:"http://placehold.it/100x100"},
      //     {link:"http://placehold.it/100x100"},
      //     {link:"http://placehold.it/100x100"},
      //     {link:"http://placehold.it/100x100"}];
      let yourInventory = [
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100",
          "http://placehold.it/100x100"]
          console.log('vueset')
      Vue.set(state.yourInventory, yourInventory);
    }
  },
  modules: {
    auth: coreStore.coreModuleAuth({router, apolloProvider}),
    products: coreStore.coreModuleProducts({apolloProvider}),
    profile: coreStore.coreModuleProfile({apolloProvider}),
    dialog: coreStore.coreModuleDialog,
    notifications: coreStore.coreModuleNotifications
  },
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== 'production'
})

export {store}
