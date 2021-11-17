import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { WWWRequestInterceptors, WWWRequestConfig } from './type'
// import { transform } from '@vue/compiler-core'

class WWWRequest {
  //   request() {}
  //   get() {}
  instance: AxiosInstance
  interceptors: WWWRequestInterceptors
  constructor(config: WWWRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    //从config中去除的拦截器都是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器:请求拦截成功')
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器:请求拦截失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器:响应拦截成功')
        return res
      },
      (err) => {
        console.log('所有的实例都有的拦截器:请求拦截失败')
        return err
      }
    )
  }
  request(config: WWWRequestConfig): void {
    //   this.instance.request( {...config, transformRequest}).then((res) => {
    //     console.log(res)
    //   })
    // }
    if (config.interceptors?.requestInterceptor) {
      // config = config.interceptors.requestInterceptor(config)  报错所以注释
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default WWWRequest
