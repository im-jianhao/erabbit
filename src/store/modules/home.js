import { defineStore } from 'pinia'
import store from '@/store'

export const useHomeStore = defineStore('home', {
  state: () => {
    return {
      // 用户信息
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  getters: {}
})

// Need to be used outside the setup
export function useHomeStoreWithOut () {
  return useHomeStore(store)
}
