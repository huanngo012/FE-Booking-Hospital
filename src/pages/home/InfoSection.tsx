import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { BsArrowRight } from 'react-icons/bs'
import { images } from '~/assets'
import { theme } from '~/themes/Theme'
import { paddingScreen } from '~/utils/constant'

const InfoSection = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const flexDirection = isDesktop ? 'row' : 'column'
  const paddingContainer = isTablet ? '15.5px 40px 35.5px' : '10px'
  const widthCard = isTablet ? '33%' : '100%'
  const widthStatisticInfo = isTablet ? (isDesktop ? '16.66%' : '25%') : '33.33%'

  const blogs = [
    {
      title: t('medpro.des-15'),
      des: t('medpro.des-16'),
      img: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F1fa0fe14-3109-4798-85cd-fe818ba1caea-intro-1.webp&w=1920&q=75'
    },
    {
      title: t('medpro.des-17'),
      des: t('medpro.des-18'),
      img: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2Ff73049d8-8a7a-4fb9-886c-35b1c8c11b61-intro-2.webp&w=1920&q=75'
    },
    {
      title: t('medpro.des-19'),
      des: t('medpro.des-20'),
      img: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2Ff0697eac-3c5a-492f-858d-2a2395db0a41-intro-3.webp&w=1920&q=75'
    }
  ]
  const statisticInfo = [
    {
      id: 1,
      title: t('home.visits'),
      icon: images.examinationEars,
      number: '2.2M+'
    },
    {
      id: 2,
      title: t('hospital.hospital'),
      icon: images.hospital,
      number: '40+'
    },
    {
      id: 3,
      title: t('healthcare facilities.healthcare facilities'),
      icon: images.clinic,
      number: '50+'
    },
    {
      id: 4,
      title: t('doctor.doctor'),
      icon: images.doctor,
      number: '1000+'
    },
    {
      id: 5,
      title: t('home.monthly visits'),
      icon: images.location,
      number: '138K+'
    },
    {
      id: 6,
      title: t('home.daily visits'),
      icon: images.eye,
      number: '4600+'
    }
  ]

  return (
    <Box className='info__wrapper' sx={paddingScreen}>
      <Box className='info__container' padding={paddingContainer}>
        <Box className='info__top'>
          <Stack flexDirection={flexDirection} alignItems='flex-start' gap='16px'>
            <Stack flexDirection='column' flex='4' className='reveal fade-left'>
              <Box
                width='170px'
                component='img'
                src='https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F87fec770-22b1-4299-9408-66485cbf4762-medpro-logo.webp&w=256&q=75'
                alt=''
              />
              <Typography variant={isTablet ? 'h3' : 'h5'}>{t('home.quick appointment booking')}</Typography>
            </Stack>
            <Stack flexDirection='row' gap='4px' flex='8' className='reveal fade-right'>
              <Typography variant={isTablet ? 'body2' : 'body3'}>
                <b>Medpro </b>
                {t('home.des-2')}
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box className='info__bottom reveal fade-in'>
          {blogs.map((item: any, index: number) => (
            <Box key={index} className='info__card' width={widthCard}>
              <Stack flexDirection='column' gap='16px' height='430px'>
                <Box maxHeight='300px' borderRadius='16px' component='img' src={item.img} alt='' />
                <Typography variant={isTablet ? 'h5' : 'h6'}>{item.title}</Typography>
                <Typography variant={isTablet ? 'body2' : 'body3'}>{item.des}</Typography>
              </Stack>
              <Button
                variant='outlined'
                color='primary'
                sx={{
                  display: 'flex',
                  gap: '8px',
                  borderRadius: '30px'
                }}
              >
                <Typography variant='button2'>{t('news.see more')}</Typography>
                <BsArrowRight size='20px' />
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className='statistic_container reveal fade-in' padding={paddingContainer}>
        <Typography variant={isTablet ? 'h4' : 'h5'} textAlign='center' color='var(--white)'>
          {t('home.statistics')}
        </Typography>
        <Stack flexDirection='row' justifyContent='center' rowGap='20px' flexWrap='wrap' marginTop='16px'>
          {statisticInfo.map((el, index) => (
            <Stack key={index} flexDirection='column' alignItems='center' justifyContent='flex-start' gap='16px' width={widthStatisticInfo}>
              <Box component='img' src={el.icon} alt={el.title} width='50%' />
              <Stack flexDirection='column' gap='4px' textAlign='center'>
                <Typography variant={isTablet ? 'h4' : 'h6'} color='var(--white)'>
                  {el.number}
                </Typography>
                <Typography variant={isTablet ? 'label1' : 'label3'} color='#ddedff'>
                  {el.title}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default InfoSection
