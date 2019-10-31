import { AxiosInstance, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'

function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  const instace = Axios.prototype.request.bind(context)

  extend(instace, context)

  return instace as AxiosInstance
}

const axios = createInstance(defaults)

export default axios
