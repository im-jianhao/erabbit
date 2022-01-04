import axios from 'axios'
import { useHomeStoreWithOut } from '@/store/modules/home'
import router from '@/router'

export const baseURL = 'https://apipc-xiaotuxian-front.itheima.net'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    const store = useHomeStoreWithOut()
    const { token } = store.profile
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res.data.result ?? res.data
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      const store = useHomeStoreWithOut()
      store.commit('user/setUser', {})
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
  }
)

export default (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
