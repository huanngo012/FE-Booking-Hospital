import './style.scss'
import { Stack, Typography } from '@mui/material'
import CustomDataGrid from '../../components/data-grid/CustomDataGrid'

import { useEffect, useState } from 'react'

import CustomSelect from '../../components/select/CustomSelect'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { getBookings, resetBookingStatus } from '../../redux/reducer/Booking'
import moment from 'moment'
import { times } from '../../utils/constant'
import useNotification from '../../hooks/useNotification'
import { EmptyPage } from '~/components'
import { BookingColumns } from '~/utils/columns'

const TabBooking = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { displayNotification } = useNotification()

  const { bookings, successAction, errorAction } = useSelector((state: any) => state.booking)
  const { patients } = useSelector((state: any) => state.patient)
  const pageSizeDefault = 10
  const [pageSize, setPageSize] = useState(pageSizeDefault)
  const [page, setPage] = useState(1)
  const [rows, setRows] = useState([])
  const [payload, setPayload] = useState<any>({})

  useEffect(() => {
    if (payload?.patientID === '') {
      dispatch(getBookings({ limit: pageSizeDefault, page: page }))
    } else {
      dispatch(
        getBookings({
          limit: pageSizeDefault,
          page: page,
          patientID: payload?.patientID,
          sort: '-createdAt'
        })
      )
    }
  }, [page, payload])

  useEffect(() => {
    if (bookings?.data) {
      if (pageSizeDefault > bookings?.counts && bookings?.counts > 0) {
        setPageSize(bookings?.counts)
      }

      setRows(
        bookings?.data &&
          bookings?.data?.map((el: any, index: any) => {
            return {
              id: el._id,
              idRow: (page - 1) * pageSize + index + 1,
              patientID: el?.patientID?._id,
              clinicName: el?.scheduleID?.doctorID?.clinicID?.name,
              specialtyName: el?.scheduleID?.doctorID?.specialtyID?.name,
              nameDoctor: el?.scheduleID?.doctorID?._id?.fullName,
              status: el?.status,
              date: moment(el?.scheduleID.date).format('DD/MM/yyyy'),
              time: times[el?.time - 1].value,
              isPaid: el?.isPaid
            }
          })
      )
    }
  }, [bookings])

  useEffect(() => {
    if (successAction || errorAction) {
      displayNotification({
        message: successAction || errorAction,
        severity: successAction ? 'success' : 'error',
        title: successAction ? 'Thành công' : 'Thất bại'
      })
      if (successAction) {
        if (payload?.patientID === '') {
          dispatch(getBookings({ limit: pageSizeDefault, page: page }))
        } else {
          dispatch(
            getBookings({
              limit: pageSizeDefault,
              page: page,
              patientID: payload?.patientID,
              sort: '-createdAt'
            })
          )
        }
      }
      dispatch(resetBookingStatus())
    }
  }, [successAction, errorAction])

  return (
    <CustomDataGrid
      rows={rows}
      columns={BookingColumns()}
      showPagination={rows?.length > 0 ? true : false}
      pageSize={pageSize}
      totalRow={bookings?.counts}
      setPage={setPage}
      page={page}
      slots={
        rows?.length === 0
          ? {
              columnHeaders: () => null,
              noRowsOverlay: () => <EmptyPage title='Bạn chưa có thông tin lịch khám' />
            }
          : {}
      }
      headerComponent={
        <Stack direction='row' justifyContent='space-between' alignItems='center' className='table-header'>
          <Typography variant='label1'>Lịch khám</Typography>

          <Stack direction='row' gap={1} alignItems='center'>
            <CustomSelect options={patients} placeholder='Tất cả bệnh nhân' value={payload[`patientID`] || ''} setValue={setPayload} nameKey='patientID' style={{ width: '30%' }} />
          </Stack>
        </Stack>
      }
    />
  )
}

export default TabBooking
