import axios from '~/axios'

export const apiGetAllCategories = (params?: any) =>
  axios({
    url: '/category',
    method: 'get',
    params
  })

export const apiGetCategory = (id: string) =>
  axios({
    url: `/category/${id}`,
    method: 'get'
  })
export const apiCountCategory = () =>
  axios({
    url: `/category/count`,
    method: 'get'
  })
export const apiAddCategory = (data: any) =>
  axios({
    url: '/category',
    method: 'post',
    data
  })
export const apiUpdateCategory = (id: string, data: any) =>
  axios({
    url: `/category/${id}`,
    method: 'put',
    data
  })
export const apiDeleteCategory = (id: string) =>
  axios({
    url: `/category/${id}`,
    method: 'delete'
  })
