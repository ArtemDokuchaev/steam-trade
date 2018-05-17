import Vue from 'vue'
import fetch from 'node-fetch'
import {store} from '@/store'
import {ApolloClient} from 'apollo-client'
import {ApolloLink} from 'apollo-link'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {setContext} from 'apollo-link-context'
import VueApollo from 'vue-apollo'
import {apiHost, apiPort} from '@/env-vars'

Vue.use(VueApollo)

// Setup Middleware for simple API calls
const middlewareLink = setContext(() => ({
  headers: {
    authorization: `Basic ${btoa('devds:a3szPcOkrLR3aEKjx0UX')}`
  }
}))
// Setup Middleware for auth API calls
let middlewareLinkAuth = setContext(() => ({
  headers: {
    authorization: `Basic ${btoa('devds:a3szPcOkrLR3aEKjx0UX')}, Bearer ${store.state.auth.token}`
  }
}))

const afterwareLinkAuth = new ApolloLink((operation, next) => {
  return next(operation).map(response => {
    const { response: { headers } } = operation.getContext()
    if (headers) {
      const refreshToken = headers.get('X-Refresh-Token')

      if (refreshToken) {
        store.commit('refreshToken', refreshToken)
      } else {
        store.dispatch('autoLogout')
      }
    }

    return response
  })
})
middlewareLinkAuth = middlewareLinkAuth.concat(afterwareLinkAuth)

// Define http link for default API calls
// /* eslint-disable no-new */
const httpLink = new HttpLink({
  uri: 'http://api-dv.goto-daddy.com/api',
  fetch
})
const gqlLink = middlewareLink.concat(httpLink)

// Define http link for login API calls
// /* eslint-disable no-new */
const httpLinkLogin = new HttpLink({
  uri: 'http://api-dv.goto-daddy.com/api',
  fetch
})
const gqlLinkLogin = middlewareLink.concat(httpLinkLogin)

// Define http link for auth API calls
// /* eslint-disable no-new */
const httpLinkAuth = new HttpLink({
  uri: 'http://api-dv.goto-daddy.com/api/secret',
  credentials: 'include',
  fetch
})
const gqlLinkAuth = middlewareLinkAuth.concat(httpLinkAuth)

// Define Default Apollo Client
// /* eslint-disable no-new */
const apolloClient = new ApolloClient({
  link: gqlLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

// Define Login Apollo Client
// /* eslint-disable no-new */
const loginClient = new ApolloClient({
  link: gqlLinkLogin,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

// Define Auth Apollo Client
// /* eslint-disable no-new */
const authClient = new ApolloClient({
  link: gqlLinkAuth,
  cache: new InMemoryCache(),
  connectToDevTools: true
})
// Define Apollo Provider for API calls
// /* eslint-disable no-new */
export const apolloProvider = new VueApollo({
  clients: {
    loginClient,
    authClient
  },
  defaultClient: apolloClient
})
