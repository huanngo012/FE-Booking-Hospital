import './style.scss'
import { paddingScreen } from '~/utils/constant'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { theme } from '~/themes/Theme'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const flexDirectionFooter = isDesktop ? 'row' : 'column'

  const link_menu: any = [
    {
      title: t('medical services.medical services'),
      link: '/',
      sub_menu: [
        {
          sub_title: t('medical services.make appointment at facility'),
          sub_link: '/'
        },
        {
          sub_title: t('medical services.make an appointment with a doctor'),
          sub_link: '/'
        },
        {
          sub_title: t('medical services.remote medical consultation'),
          sub_link: '/'
        },
        {
          sub_title: t('medical services.schedule a medical test'),
          sub_link: '/'
        },
        {
          sub_title: t('medical services.home health care'),
          sub_link: '/'
        },
        {
          sub_title: t('medical services.pay hospital fees'),
          sub_link: '/'
        }
      ]
    },
    {
      title: t('healthcare facilities.healthcare facilities'),
      link: '/',
      sub_menu: [
        {
          sub_title: t('healthcare facilities.public hospital'),
          sub_link: '/'
        },
        {
          sub_title: t('healthcare facilities.private hospital'),
          sub_link: '/'
        },
        {
          sub_title: t('healthcare facilities.medical clinic'),
          sub_link: '/'
        },
        {
          sub_title: t('healthcare facilities.consultation room'),
          sub_link: '/'
        },
        {
          sub_title: t('healthcare facilities.medical test'),
          sub_link: '/'
        }
      ]
    },
    {
      title: t('guidelines.guidelines'),
      link: '/',
      sub_menu: [
        {
          sub_title: t('guidelines.app installation'),
          sub_link: '/'
        },
        {
          sub_title: t('guidelines.schedule an appointment'),
          sub_link: '/'
        },
        {
          sub_title: t('guidelines.refund process'),
          sub_link: '/'
        },
        {
          sub_title: t('guidelines.frequently asked questions'),
          sub_link: '/'
        }
      ]
    },
    {
      title: t('news.news'),
      link: '/',
      sub_menu: [
        {
          sub_title: t('news.service news'),
          sub_link: '/'
        },
        {
          sub_title: t('news.medical news'),
          sub_link: '/'
        },
        {
          sub_title: t('news.general medicine'),
          sub_link: '/'
        }
      ]
    },
    {
      title: t('about-page.about-us'),
      link: '/',
      sub_menu: [
        {
          sub_title: t('about-page.introduction'),
          sub_link: '/'
        },
        {
          sub_title: t('about-page.terms of service'),
          sub_link: '/'
        },
        {
          sub_title: t('about-page.privacy policy'),
          sub_link: '/'
        },
        {
          sub_title: t('about-page.usage regulations'),
          sub_link: '/'
        }
      ]
    }
  ]
  return (
    <Box className='footer__sticky' sx={paddingScreen}>
      <Box className='footer__container' flexDirection={flexDirectionFooter}>
        <Stack flexDirection='column' gap='10px'>
          <Box width='220px' component='img' src='https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d646d4b8.svg&w=1920&q=75' alt='' marginBottom='10px' />

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
        <Stack flexWrap='wrap' flexDirection='row' width='100%' rowGap='24px'>
          {link_menu.map((item: any, index: any) => (
            <Stack key={index} flexDirection='column' maxWidth='33.3333%' flex='33.3333%' gap='6px'>
              <Link to={item.href}>
                <Typography variant='label2'>{item.title} </Typography>
              </Link>
              {item.sub_menu.map((sub_item: any, index_sub: any) => (
                <Link key={index_sub} to={sub_item.sub_link}>
                  <Typography variant='body2'>{sub_item.sub_title}</Typography>
                </Link>
              ))}
            </Stack>
          ))}

          <Stack flexDirection='column' maxWidth='33.3333%' flex='33.3333%' gap='6px'>
            <Stack flexDirection='row' flexWrap='wrap' width='100%' gap='13px 16px'>
              <Box width='100px' component='img' src='https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdadangky.a0a8489c.png&w=1920&q=75' alt='' />
              <Box width='100px' component='img' src='https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbocongthuong.53714ee6.png&w=1920&q=75' alt='' />
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
