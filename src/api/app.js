import request from '@/utils/request'

export const fetchCategoryHead = () => request('/home/category/head', 'get')
