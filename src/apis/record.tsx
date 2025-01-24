import axios from '~/axios'

export const apiGetAllRecords = (params?: any) =>
  axios({
    url: '/record',
    method: 'get',
    params
  })

export const apiGetRecord = (id: string) =>
  axios({
    url: `/record/${id}`,
    method: 'get'
  })
export const apiCountRecord = () =>
  axios({
    url: `/record/count`,
    method: 'get'
  })
export const apiAddRecord = (data: any) =>
  axios({
    url: '/record',
    method: 'post',
    data
  })
export const apiUpdateRecord = (id: string, data: any) =>
  axios({
    url: `/record/${id}`,
    method: 'put',
    data
  })
export const apiDeleteRecord = (id: string) =>
  axios({
    url: `/record/${id}`,
    method: 'delete'
  })
