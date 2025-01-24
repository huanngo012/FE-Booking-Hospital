import axios from '~/axios'

export const apiGetAllBookings = (params?: any) =>
  axios({
    url: `/booking`,
    method: 'get',
    params
  })
export const apiAddBooking = (data: any) =>
  axios({
    url: `/booking/patient`,
    method: 'post',
    data
  })
export const apiCancelBooking = (id: string, data: any) =>
  axios({
    url: `/booking/patient/${id}`,
    method: 'put',
    data
  })
