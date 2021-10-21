import axios, { Axios } from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface WWWRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
interface WWWRequestConfig extends AxiosRequestConfig {
  interceptors: WWWRequestInterceptors
}
class WWWRequest {
  //   request() {}
  //   get() {}
  instance: AxiosInstance
  interceptors: WWWRequestInterceptors
  constructor(config: WWWRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.responseInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors.requestInterceptor,
      this.interceptors.responseInterceptorCatch
    )
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default WWWRequest
