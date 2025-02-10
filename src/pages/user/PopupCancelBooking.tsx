import './style.scss'
import { Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

import { useDispatch } from 'react-redux'
import { PopupCancel } from '~/components'
import { cancelBooking } from '~/redux/reducer/Booking'
import { AppDispatch } from '~/redux/store'

const PopupCancelBooking = ({ id, patientID }: { id?: any; patientID?: any }) => {
  const dispatch = useDispatch<AppDispatch>()

  const [openPopUp, setOpenPopUp] = useState(false)

  const handleOpenConfirmPopup = (event: React.SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setOpenPopUp(true)
  }
  const handleCloseConfirmPopUp = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenPopUp(false)
  }
  const handleDeleteSchedule = () => {
    id &&
      dispatch(
        cancelBooking({
          id,
          data: { patientID }
        })
      )
    setOpenPopUp(false)
  }

  return (
    <>
      <Button variant='outlined' color='tertiary' sx={{ padding: '0' }} onClick={handleOpenConfirmPopup}>
        <Stack
          direction='row'
          gap={1.75}
          justifyContent='flex-start'
          alignItems='center'
          sx={{
            width: '100%',
            height: '40px',
            padding: '0 12px',
            cursor: 'pointer'
          }}
        >
          <FaRegTrashAlt size={20} color='var(--alert)' />
          <Typography variant='body2' color='var(--alert)'>
            Hủy lịch khám
          </Typography>
        </Stack>
      </Button>
      <PopupCancel open={openPopUp} handleClose={handleCloseConfirmPopUp} title='Hủy lịch khám' message='Bạn có chắc muốn hủy lịch khám' enableCancelButton onClick={handleDeleteSchedule} />
    </>
  )
}

export default PopupCancelBooking
