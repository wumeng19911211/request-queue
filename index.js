import RequestQueue from './lib/index.min.js'

export default {
  name:'requestQueue',
  install(Vue, options) {
    const {requestList,delay,num} = options
    Vue.prototype.$requestQueue = window.$requestQueue = new RequestQueue(requestList, delay, num)
  }
}