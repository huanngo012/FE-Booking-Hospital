import axios from '~/axios'

export const apiGetAllDoctors = (params?: any) =>
  axios({
    url: `doctor`,
    method: 'get',
    params
  })
export const apiGetDoctor = (id: string) =>
  axios({
    url: `doctor/${id}`,
    method: 'get'
  })
export const apiAddDoctor = (data: string) =>
  axios({
    url: `doctor`,
    method: 'post',
    data
  })
export const apiUpdateDoctor = (id: string, data: any) =>
  axios({
    url: `doctor/${id}`,
    method: 'put',
    data
  })
export const apiDeleteDoctor = (id: string) =>
  axios({
    url: `doctor/${id}`,
    method: 'delete'
  })
export const apiCountDoctor = () =>
  axios({
    url: `/doctor/count`,
    method: 'get'
  })
export const apiGetAllDoctorsByHost = (params?: any) =>
  axios({
    url: `/doctor/host`,
    method: 'get',
    params
  })
