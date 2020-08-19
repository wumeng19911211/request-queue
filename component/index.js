export default class RequestQueue {
  _requestList = [] // 请求列表
  _delay = 1000 // 隔多久检查一次
  _num = 1 // 一次发起请求数量
  _checkTimeout = 0
  constructor(requestList, delay, num) {
    this._requestList = requestList || []
    this._delay = delay || 1000
    this._num = num || 1
    this.startCheck()
  }
  pushRequest = (requestFunc) => {
    this._requestList.push(requestFunc)
  }
  startCheck() {
    this._checkRequestList()
  }
  stopCheck() {
    clearTimeout(this._checkTimeout)
  }
  _checkRequestList = () => {
    this._checkTimeout = setTimeout(() => {
      if(this._requestList.length > 0) {
        const newRequestList = this._requestList.splice(0, this._num)
        newRequestList.forEach(item => {
          if(typeof item === 'function') item()
        })
      }
      this._checkRequestList()
    }, this._delay)
  }
}


// const requestQueue = new RequestQueue([],10000, 2)
// requestQueue.pushRequest(() => {console.log('请求1 :>> ')})
// requestQueue.pushRequest(() => {console.log('请求2 :>> ')})
// requestQueue.pushRequest(() => {console.log('请求3 :>> ')})
// requestQueue.pushRequest(() => {console.log('请求4 :>> ')})
// requestQueue.pushRequest(() => {console.log('请求5 :>> ')})
// requestQueue.pushRequest(() => {console.log('请求6 :>> ')})

// setTimeout(() => {
//   requestQueue.pushRequest(() => {console.log('请求7 :>> ')})
//   requestQueue.pushRequest(() => {console.log('请求8 :>> ')})
// }, 40000)

