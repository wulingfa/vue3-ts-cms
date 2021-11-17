import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WWWRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
export interface WWWRequestConfig extends AxiosRequestConfig {
  interceptors: WWWRequestInterceptors
  // showLoading: boolean
}
