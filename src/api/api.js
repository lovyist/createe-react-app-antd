/**
 * Created by Freeman on 2017/3/17.
 */
import axios from 'axios'
import CONFIG from '../config'
axios.defaults.baseURL = '/'
axios.defaults.withCredentials = false
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


axios.interceptors.request.use(function (config) {
  config.headers = config.headers || {}
  const api_token = localStorage.getItem(CONFIG.API_TOKEN)
  if (api_token) {
    config.headers.Authorization = 'Bearer ' + api_token.replace(/(^\\")|(\\"$)/g, '')
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  if (response.status === 401) {
    window.location.pathname = '/login'
  }

  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default axios
