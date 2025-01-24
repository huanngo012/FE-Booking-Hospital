import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { paddingScreen } from '~/utils/constant'
import { theme } from '~/themes/Theme'

const DownloadSection = () => {
  const { t } = useTranslation()
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const flexDirection = isTablet ? 'row' : 'column'
  return (
    <Box display='flex' flexDirection='column'>
      <Box className='booking__wrapper'>
        <Stack className='booking__container' flexDirection={flexDirection} sx={paddingScreen}>
          <Stack flexDirection='column' gap='16px' alignItems={isTablet ? 'flex-start' : 'center'} className='reveal fade-left'>
            <Typography variant={isTablet ? 'h4' : 'h6'} color='var(--primary)'>
              {t('home.quick appointment-get online queue number')}
            </Typography>
            <Typography variant={isTablet ? 'label1' : 'label2'} color='var(--secondary)'>
              {t('home.des-5')}
            </Typography>
            <Button
              variant='contained'
              color='primary'
              sx={{
                display: 'flex',
                gap: '8px',
                borderRadius: '30px'
              }}
            >
              <Typography variant={isTablet ? 'label1' : 'label2'}>{t('booking.book now')}</Typography>
            </Button>
          </Stack>
          <Box
            width='50%'
            component='img'
            src='https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F6f37a10e-b338-4143-aa24-175529dad219-doctor.webp&w=1920&q=75'
            alt=''
          />
        </Stack>
        <Box className='booking__rectangle'></Box>
      </Box>
      <Box className='download__wrapper' sx={paddingScreen} id='downloadSection'>
        <Stack flexDirection='column' alignItems='center' gap='28px' maxWidth='var(--max-width)' margin='auto'>
          <Stack flexDirection='column' alignItems='center' gap='16px' className='reveal fade-in'>
            <Typography variant={isTablet ? 'h4' : 'h6'}>
              {t('home.download the quick appointment booking app')}{' '}
              <Typography variant={isTablet ? 'h4' : 'h6'} component='span' color='var(--primary)' sx={{ textTransform: 'uppercase' }}>
                MEDPRO
              </Typography>
            </Typography>
            <Stack flexDirection='row' justifyContent='center' alignItems='center' gap='16px'>
              <Box
                width='100px'
                component='img'
                src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fmedpro%2Fweb%2Ficon_ios.svg%3Ft%3D11111111&w=1920&q=75'
                alt=''
              />
              <Box
                width='100px'
                component='img'
                src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fmedpro%2Fweb%2Ficon_google_play.svg%3Ft%3D1111111&w=1920&q=75'
                alt=''
              />
            </Stack>
          </Stack>
          <Stack flexDirection='row' justifyContent='center' alignItems='center' width='100%' position='relative' display={isDesktop ? 'flex' : 'none'}>
            <Stack flexDirection='column' alignItems='center' justifyContent='space-around' gap='56px' flex='4' position='relative' right='4%' className='reveal fade-left'>
              <Stack flexDirection='row' justifyContent='flex-end' gap='12px' paddingRight='30px'>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant='label2' color='var(--secondary)'>
                    {t('medpro.get a quick online check-up number')}
                  </Typography>
                  <Typography variant='body2' color='var(--text-secondary)'>
                    {t('medpro.des-6')}
                    <br /> {t('medpro.des-7')}
                    <br /> {t('medpro.des-8')}
                  </Typography>
                </Box>
                <Box
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2Fbae71420-d9ef-48b7-91a9-0151c50c73da-fcf47d13-a9c5-4be8-aa6c-4d4e9b162c19-icon_dang_ky.svg.svg&w=1920&q=75'
                  alt=''
                  width='60px'
                />
              </Stack>
              <Stack flexDirection='row' justifyContent='flex-end' gap='12px' paddingRight='90px'>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant='label2' color='var(--secondary)'>
                    {t('medpro.telehealth consultation')}
                  </Typography>
                  <Typography variant='body2' color='var(--text-secondary)'>
                    {t('medpro.des-9')}
                  </Typography>
                </Box>
                <Box
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F9762607b-d91a-4c94-a673-bbc516680154-2.svg&w=1920&q=75'
                  alt=''
                  width='60px'
                />
              </Stack>
              <Stack flexDirection='row' justifyContent='flex-end' gap='12px' paddingRight='30px'>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant='label2' color='var(--secondary)'>
                    {t('medpro.look up paraclinical results')}
                  </Typography>
                  <Typography variant='body2' color='var(--text-secondary)'>
                    {t('medpro.des-10')}
                  </Typography>
                </Box>
                <Box
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F770cc02d-88f4-4e82-b26a-493b35810a28-3.svg&w=1920&q=75'
                  alt=''
                  width='60px'
                />
              </Stack>
            </Stack>
            <Box
              component='img'
              src='https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fellipse.a457aed3.png&w=1920&q=75'
              alt=''
              sx={{
                position: 'absolute',
                width: '40%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
              className='reveal fade-in'
            />
            <Box
              component='img'
              src='https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F30d7a0da-2878-48ec-84d5-8d2a6c0efa18-bg-phone.webp&w=1920&q=75'
              alt=''
              position='relative'
              flex='3'
              className='reveal fade-in'
            />
            <Stack flexDirection='column' alignItems='center' justifyContent='space-around' gap='56px' flex='4' position='relative' left='4%' className='reveal fade-right'>
              <Stack flexDirection='row' justifyContent='flex-start' gap='12px' paddingLeft='30px'>
                <Box
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F000a18f1-7158-4631-bd03-db97a76fc203-4.svg&w=1920&q=75'
                  alt=''
                  width='60px'
                />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant='label2' color='var(--secondary)'>
                    {t('medical services.pay hospital fees')}
                  </Typography>
                  <Typography variant='body2' color='var(--text-secondary)'>
                    {t('medpro.des-11')}
                    <br /> {t('medpro.des-14')}
                  </Typography>
                </Box>
              </Stack>
              <Stack flexDirection='row' justifyContent='flex-start' gap='12px' paddingLeft='90px'>
                <Box
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F4fff6c05-f49b-4f4a-a532-f2de15060877-5.svg&w=1920&q=75'
                  alt=''
                  width='60px'
                />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant='label2' color='var(--secondary)'>
                    {t('medical services.home health care')}
                  </Typography>
                  <Typography variant='body2' color='var(--text-secondary)'>
                    {t('medpro.des-12')}
                  </Typography>
                </Box>
              </Stack>
              <Stack flexDirection='row' justifyContent='flex-start' gap='12px' paddingLeft='30px'>
                <Box
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F02a98830-d4c2-41ec-a16a-5403e43f4e13-6.svg&w=1920&q=75'
                  alt=''
                  width='60px'
                />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant='label2' color='var(--secondary)'>
                    {t('medpro.network of collaborative facilities')}
                  </Typography>
                  <Typography variant='body2' color='var(--text-secondary)'>
                    {t('medpro.des-13')}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default DownloadSection
