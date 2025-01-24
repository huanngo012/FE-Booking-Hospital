import Slider, { Settings } from 'react-slick'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { AppDispatch } from '~/redux/store'
import { theme } from '~/themes/Theme'
import { getClinicsTop } from '~/redux/reducer/Clinic'
import CustomSkeleton from '~/components/skeleton/CustomSkeleton'
import { renderStartFromNumber } from '~/utils/helper'
import { paths } from '~/utils/constant'

const HospitalSection = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { clinicsTop, loadingClinic, totalClinic } = useSelector((state: any) => state.clinic)

  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const heightImg = isTablet ? (isDesktop ? '200px' : '150px') : '100px'
  const slidesToShow = isTablet ? (isDesktop ? 5 : 4) : 3
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  }

  const getApiClinics = async () => {
    dispatch(getClinicsTop({ limit: 10, page: 1 }))
  }
  useEffect(() => {
    getApiClinics()
  }, [])

  return (
    <Box
      className='hospital-section__wrapper reveal fade-left'
      sx={{
        padding: {
          oversize: '0 160px',
          tablet: '0 64px',
          mobile: '0'
        }
      }}
    >
      <Box textAlign='center'>
        <Typography variant='h4' color='var(--primary)'>
          {t('hospital.prominent hospitals')}
        </Typography>
        <Typography variant='label1' color='#858585'>
          {t('home.des-3')} {totalClinic} {t('home.des-4')}
        </Typography>
      </Box>
      <Box width='100%'>
        <Slider className={isTablet ? 'custom-slider' : 'custom-slider-1'} {...settings}>
          {!loadingClinic
            ? clinicsTop?.map((el: any, index: any) => (
                <Box key={index} padding='10px'>
                  <Box className='hospital-section__card' onClick={() => navigate(`${paths.HOSPITALS}/${el._id}`)}>
                    <Stack width='100%' alignItems='center'>
                      <Box
                        width={heightImg}
                        minHeight={heightImg}
                        maxHeight={heightImg}
                        borderRadius='16px'
                        component='img'
                        src={el.logo}
                        alt={el.name}
                        sx={{
                          transition: 'all 0.15s ease-in'
                        }}
                      />
                    </Stack>
                    <Box component='span' sx={{ display: 'flex', height: '16px' }}>
                      {renderStartFromNumber(el?.totalRatings, 16)?.map((el, index) => <Box key={index}>{el}</Box>)}
                    </Box>
                    <Typography variant={isTablet ? 'label2' : 'label3'} className='truncate_2'>
                      {el.name}
                    </Typography>
                    <Typography variant={isTablet ? 'body2' : 'body3'} color='var(--text-secondary)' className='truncate_2'>
                      {el?.address?.detail ? `${el?.address?.detail},` : ''} {el?.address?.ward ? `${el?.address?.ward},` : ''} {el?.address?.district ? `${el?.address?.district},` : ''}
                      {el?.address?.province}
                    </Typography>
                  </Box>
                </Box>
              ))
            : [...Array(10)].map((_, index: number) => <CustomSkeleton key={index} variant='card-hospital-section' />)}
        </Slider>
      </Box>
    </Box>
  )
}

export default HospitalSection
