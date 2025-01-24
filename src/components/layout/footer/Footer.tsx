import './style.scss'
import { paddingScreen } from '~/utils/constant'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { theme } from '~/themes/Theme'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const flexDirectionFooter = isDesktop ? 'row' : 'column'
  return (
    <Box className='footer__sticky' sx={paddingScreen}>
      <Box className='footer__container' flexDirection={flexDirectionFooter}>
        <Stack flexDirection='column' gap='10px'>
          <Box
            width='220px'
            component='img'
            src='https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d646d4b8.svg&w=1920&q=75'
            alt=''
            marginBottom='10px'
          />

          <Typography variant='label2' minWidth='60px'>
            {t('user.address')}:{' '}
            <Typography variant='body2' component='span'>
              97 Trần Quang Diệu, Phường 14, Quận 3, Tp. Hồ Chí Minh.
            </Typography>
          </Typography>
          <Typography variant='label2'>
            Website:{' '}
            <Typography variant='body2' component='span'>
              https://pkh.vn
            </Typography>
          </Typography>
          <Typography variant='label2'>
            Email:
            <Typography variant='body2' component='span'>
              cskh@medpro.vn
            </Typography>
          </Typography>
          <Typography variant='label2'>
            {t('user.phone')}:
            <Typography variant='body2' component='span'>
              (028) 710 78098
            </Typography>
          </Typography>
        </Stack>
        <Stack flexWrap='wrap' flexDirection='row' width='100%' rowGap='16px'>
          <Stack flexDirection='column' maxWidth='33.3333%' flex='33.3333%'>
            <Typography variant='label2'>{t('medical services.medical services')} </Typography>
            <Typography variant='body2'>{t('medical services.make appointment at facility')}</Typography>
            <Typography variant='body2'>{t('medical services.make an appointment with a doctor')}</Typography>
            <Typography variant='body2'>{t('medical services.remote medical consultation')}</Typography>
            <Typography variant='body2'> {t('medical services.schedule a medical test')}</Typography>
            <Typography variant='body2'>{t('medical services.home health care')}</Typography>
            <Typography variant='body2'>{t('medical services.pay hospital fees')}</Typography>
          </Stack>
          <Stack flexDirection='column' maxWidth='33.3333%' flex='33.3333%'>
            <Typography variant='label2'>{t('healthcare facilities.healthcare facilities')} </Typography>
            <Typography variant='body2'>{t('healthcare facilities.public hospital')}</Typography>
            <Typography variant='body2'>{t('healthcare facilities.private hospital')}</Typography>
            <Typography variant='body2'>{t('healthcare facilities.medical clinic')}</Typography>
            <Typography variant='body2'>{t('healthcare facilities.consultation room')}</Typography>
            <Typography variant='body2'>{t('healthcare facilities.medical test')}</Typography>
          </Stack>
          <Stack flexDirection='column' maxWidth='33.3333%' flex='33.3333%'>
            <Typography variant='label2'>{t('guidelines.guidelines')} </Typography>
            <Typography variant='body2'>{t('guidelines.app installation')}</Typography>
            <Typography variant='body2'>{t('guidelines.schedule an appointment')}</Typography>
            <Typography variant='body2'>{t('guidelines.refund process')}</Typography>
            <Typography variant='body2'>{t('guidelines.frequently asked questions')}</Typography>
          </Stack>
          <Stack flexDirection='column' maxWidth='33.3333%' flex='33.3333%'>
            <Typography variant='label2'>{t('news.news')} </Typography>
            <Typography variant='body2'>{t('news.service news')}</Typography>
            <Typography variant='body2'>{t('news.medical news')}</Typography>
            <Typography variant='body2'>{t('news.general medicine')}</Typography>
          </Stack>
          <Stack flexDirection='column' maxWidth='33.3333%' flex='33.3333%'>
            <Typography variant='label2'>{t('about-page.about-us')}</Typography>
            <Typography variant='body2'>{t('about-page.introduction')}</Typography>
            <Typography variant='body2'>{t('about-page.terms of service')}</Typography>
            <Typography variant='body2'>{t('about-page.privacy policy')}</Typography>
            <Typography variant='body2'>{t('about-page.usage regulations')}</Typography>
          </Stack>
          <Stack flexDirection='column' maxWidth='33.3333%' flex='33.3333%'>
            <Stack flexDirection='row' flexWrap='wrap' width='100%' gap='13px 16px'>
              <Box
                width='100px'
                component='img'
                src='https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdadangky.a0a8489c.png&w=1920&q=75'
                alt=''
              />
              <Box
                width='100px'
                component='img'
                src='https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbocongthuong.53714ee6.png&w=1920&q=75'
                alt=''
              />
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
        </Stack>
      </Box>
    </Box>
  )
}

export default Footer
