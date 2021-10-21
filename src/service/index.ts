//service 统一出口
import WWWRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
//wwwRequest

const wwwRequest = new WWWRequest({
  baseURL:  BASE_URL,
  // timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    // responseInterceptorCatch: (err) => {
    //   return err
    // } 
  }
})


export default wwwRequest
