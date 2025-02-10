import { Box, Button, Dialog, DialogContent, Divider, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { apiGetAllRecords } from '~/apis'
import { images } from '~/assets'
import { EmptyPage, MarkdownEditor } from '~/components'
import { theme } from '~/themes/Theme'
import { dosages, instractions, pageSizeDefault } from '~/utils/constant'
import { formatMoney } from '~/utils/helper'

const PopupDetailRecord = ({ data }: { data?: any }) => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const heightPopup = isDesktop ? '800px' : '1000px'

  const [open, setOpen] = useState(false)

  const [record, setRecord] = useState<any>({})

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const fetchApiRecord = async () => {
    const response: any = await apiGetAllRecords({
      limit: pageSizeDefault,
      patientID: data?.patientID,
      bookingID: data?.id
    })
    if (response?.success) {
      setRecord(response?.data[0])
    }
  }
  useEffect(() => {
    open && fetchApiRecord()
  }, [open])

  return (
    <>
      <Button variant='outlined' color='tertiary' sx={{ padding: '0' }} onClick={handleClickOpen}>
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
          <Typography variant='body2'>Kết quả khám</Typography>
        </Stack>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={'oversize'}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '8px',
            width: '1000px'
          }
        }}
      >
        <DialogContent sx={{ padding: '0', height: heightPopup }}>
          <Box className='popup__content'>
            <Box className='popup__header'>
              <Typography variant='h5'>Chi tiết thuốc</Typography>
              <IconButton aria-label='close' onClick={handleClose}>
                <Box component='img' width='24px' src={images?.close} alt='' />
              </IconButton>
            </Box>
            <Divider
              sx={{
                borderBottom: '1px solid var(--border-color)',
                width: '100%'
              }}
            />
            {Object.keys(record).length === 0 ? (
              <EmptyPage title='Bạn chưa có kết quả khám' />
            ) : (
              <Box className='popup__body'>
                <Stack direction='column' gap='48px' width='100%'>
                  <Stack direction='column' gap='16px' width='100%'>
                    <Typography variant='label2'>Thông tin thuốc:</Typography>
                    <Stack flexDirection='row'>
                      <Typography variant='label2' flex='1' textAlign='center'>
                        Tên thuốc
                      </Typography>
                      <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                      <Typography variant='label2' flex='1' textAlign='center'>
                        Giá
                      </Typography>
                      <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                      <Typography variant='label2' flex='1' textAlign='center'>
                        Liều lượng
                      </Typography>
                      <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                      <Typography variant='label2' flex='1' textAlign='center'>
                        {t('guidelines.guidelines')}
                      </Typography>
                      <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                      <Typography variant='label2' flex='1' textAlign='center'>
                        Số lượng
                      </Typography>
                      <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                      <Typography variant='label2' flex='1' textAlign='center'>
                        Tổng giá
                      </Typography>{' '}
                      <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                    </Stack>
                    {record?.medicineArr &&
                      record?.medicineArr?.map((el: any, index: any) => (
                        <Stack key={index} flexDirection='row'>
                          <Typography variant='body2' flex='1' textAlign='center'>
                            {el?.medicineID?.name}
                          </Typography>
                          <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                          <Typography variant='body2' flex='1' textAlign='center'>
                            {formatMoney(el?.price)} VNĐ
                          </Typography>
                          <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                          <Typography variant='body2' flex='1' textAlign='center'>
                            {el?.dosage?.map((item: any, index: any) => `${dosages.find((item2) => item2._id === item)?.name} ${index !== el?.dosage.length - 1 ? '/' : ''}`)}
                          </Typography>
                          <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                          <Typography variant='body2' flex='1' textAlign='center'>
                            {instractions.find((item) => item._id === el?.instraction)?.name}
                          </Typography>
                          <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                          <Typography variant='body2' flex='1' textAlign='center'>
                            {el?.quantity}
                          </Typography>
                          <Divider orientation='vertical' variant='middle' sx={{ margin: 0 }} />
                          <Typography variant='body2' flex='1' textAlign='center'>
                            {}
                            {formatMoney(el?.price * el?.quantity)} VNĐ
                          </Typography>
                        </Stack>
                      ))}
                  </Stack>
                  <Stack direction='column' gap='16px' width='100%'>
                    <Typography variant='label2'>Lời khuyên của bác sĩ:</Typography>

                    <MarkdownEditor value={record?.description} disabled={true} />
                  </Stack>
                </Stack>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PopupDetailRecord
