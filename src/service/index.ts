//service 统一出口
import WWWRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
//wwwRequest

const wwwRequest = new WWWRequest({
  baseURL: BASE_URL,
  // timeout: TIME_OUT,报错所以注释
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      // 报错所以用网上的代码
      if (!config?.headers) {
        throw new Error(
          `Expected 'config' and 'config.headers' not to be undefined`
        )
      }
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default wwwRequest
