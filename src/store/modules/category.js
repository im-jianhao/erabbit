import { defineStore } from 'pinia'
import store from '@/store'

import { fetchCategoryHead } from '@/api/app'
import { topCategory } from '@/config/categoryConfig'

export const useCategoryStore = defineStore('category', {
  state: () => {
    return {
      list: topCategory.map((item, index) => ({ name: item, id: index }))
    }
  },
  actions: {
    async getCategoryHead () {
      const res = await fetchCategoryHead()
      this.list = res
    }
  }
})

// Need to be used outside the setup
export function useCategoryStoreWithOut () {
  return useCategoryStore(store)
}
