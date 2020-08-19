### 发布
```
npm run build
npm publish
```
### 全局引入
```
import RequestQueue from 'request-queue'
Vue.use(RequestQueue,{
    requestList:[], // 请求方法队列
    delay:1000, // 隔多久发起一批请求(ms)
    num:2 // 一批发起多少个请求
})
```
### 将方法加入队列
```
this.$requestQueue.pushRequest(func)
或
window.$requestQueue.pushRequest(func)
```