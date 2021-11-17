import { createApp } from 'vue'
import { globalRegisterApp } from './global'
import 'normalize.css'
// import './service/axios_demo'
import wwwRequest from './service'

// 全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// registerApp(app)
app.use(globalRegisterApp)

app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

wwwRequest.request({
  url: '/home/multipara',
  method: 'GET',
  // showLoading: false,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      return config
    }
    // requestInterceptor: (res) => {
    //   console.log('单独请求的config')
    //   return res
    // }报错所以注释
  }
})
