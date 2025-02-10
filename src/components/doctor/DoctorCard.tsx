import './style.scss'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

import { images } from '~/assets'
import { theme } from '~/themes/Theme'
import { apiGetAllSchedules } from '~/apis'
import CustomSkeleton from '../skeleton/CustomSkeleton'
import SelectDate from '../date/SelectDate'

const { LocationIcon } = images

const DoctorCard = ({ data }: { data?: any }) => {
  const { t } = useTranslation()

  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))

  const gapCard = isDesktop ? '40px' : '10px'

  const [date, setDate] = useState(moment().add(1, 'day').valueOf())
  const [schedule, setSchedule] = useState<any>({})
  const [schedules, setSchedules] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [convertedDates, setConvertedDates] = useState([])

  const fetchApiSchedule = async () => {
    const response: any = await apiGetAllSchedules({
      doctorID: data?._id?._id,
      startDate: moment().toDate().getTime(),
      endDate: moment().add(2, 'weeks').toDate().getTime()
    })
    if (response?.success) {
      setSchedules(response?.data)
    } else {
      setSchedules([])
    }
  }

  const getScheduleByDoctorID = async () => {
    setLoading(true)
    const response: any = await apiGetAllSchedules({
      doctorID: data?._id?._id,
      date: date
    })
    setLoading(false)
    if (response?.success) {
      setSchedule(response?.data[0])
    } else {
      setSchedule({})
    }
  }
  useEffect(() => {
    fetchApiSchedule()
  }, [])
  useEffect(() => {
    getScheduleByDoctorID()
  }, [date])

  const convertDayToDateString = (day: any) => {
    const convertDay = new Date(day)
    const dateString = `${convertDay.getFullYear()}/${convertDay.getMonth() + 1}/${convertDay.getDate()}`
    return dateString
  }

  useEffect(() => {
    setConvertedDates(schedules?.map((el: any) => convertDayToDateString(el.date)))
    if (schedules.length > 0) {
      setDate(new Date(schedules[0].date).getTime())
    } else {
      setDate(moment().add(1, 'day').valueOf())
    }
  }, [schedules])
  return (
    <Box className='hospital__card' gap={gapCard}>
      <Box
        width='76px'
        height='76px'
        component='img'
        src={
          data?._id?.avatar
            ? data?._id?.avatar
            : data?.gender === 'MALE'
              ? 'https://res.cloudinary.com/dc4o6u6wm/image/upload/v1708694374/booking/bsNam'
              : 'https://res.cloudinary.com/dc4o6u6wm/image/upload/v1708694374/booking/bsNu'
        }
        alt=''
      />
      <Stack
        flexDirection='column'
        gap='16px'
        justifyContent='center'
        sx={{
          overflow: 'hidden'
        }}
      >
        <Typography variant='h6'>
          {data?.position} {data?._id?.fullName}
        </Typography>
        <Typography variant='body2' display='flex' alignItems='center' gap='4px' color='var(--text-tertiary)'>
          <LocationIcon color='var(--text-tertiary)' />
          Chuyên khoa: {data?.specialtyID?.name}
        </Typography>
        <Stack maxWidth='270px'>
          <SelectDate label={t('healthcare facilities.select date')} value={date} setValue={setDate} highlightedDays={convertedDates} />
        </Stack>
        {!loading ? (
          schedule?.timeType ? (
            <Stack flexDirection='row' flexWrap={isTablet ? 'wrap' : 'nowrap'} rowGap='24px' gap='24px' sx={{ overflow: 'auto' }}>
              {schedule?.timeType?.map((data: any, index: any) => !data?.full && <Fragment key={index}>{/* <PopupBooking schedule={schedule} time={data?.time} /> */}</Fragment>)}
            </Stack>
          ) : (
            <Typography variant='label1'>{t('healthcare facilities.no appointment')}</Typography>
          )
        ) : (
          <CustomSkeleton variant='card-schedule' />
        )}
      </Stack>
    </Box>
  )
}

export default DoctorCard
