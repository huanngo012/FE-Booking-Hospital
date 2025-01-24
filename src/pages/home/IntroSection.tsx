import { Box, ClickAwayListener, Container, InputAdornment, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Slider, { Settings } from 'react-slick'

import useDebounce from '~/hooks/useDebounce'
import { theme } from '~/themes/Theme'
import { AppDispatch } from '~/redux/store'
import { paths } from '~/utils/constant'
import { images } from '~/assets'
import { getClinics } from '~/redux/reducer/Clinic'
import { getDoctors } from '~/redux/reducer/Doctor'
import { CustomSkeleton } from '~/components'

const IntroSection = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { clinics, loadingClinic } = useSelector((state: any) => state.clinic)
  const { doctors, loadingDoctor } = useSelector((state: any) => state.doctor)

  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const titleSize = isDesktop ? 'h3' : 'h5'
  const slidesToShow = isTablet ? (isDesktop ? 6 : 4) : 3
  const heightCard = isTablet ? '160px !important' : '120px !important'
  const paddingCard = isTablet ? '28px 27px 26px' : '15px 13px'
  const sizeImg = isTablet ? '64px' : '32px'

  const settings: Settings = {
    dots: false,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000
  }

  const [indexList, setIndexList] = useState(0)

  const typing = () => {
    let search = document.querySelector('#text-input')
    let placeholder = ''
    let x = 0
    search?.setAttribute('placeholder', '')
    let interval = setInterval(() => {
      placeholder += list[indexList][x]
      x++
      search?.setAttribute('placeholder', placeholder)
      if (x > list[indexList].length - 1) {
        clearInterval(interval)
        setIndexList(indexList === list.length - 1 ? 0 : indexList + 1)
      }
    }, 200)
  }
  useEffect(() => {
    typing()
  }, [indexList])

  const [searchLabel, setSearchLabel] = useState('')
  const [loading, setIsLoading] = useState(false)
  const [clinicsSearch, setClinicsSearch] = useState<any>({})
  const [doctorsSearch, setDoctorsSearch] = useState<any>({})
  const [openSearchRecommendation, setOpenSearchRecommendation] = useState(false)
  const handleOpenActionMenu = () => setOpenSearchRecommendation(true)
  const handleCloseActionMenu = () => setOpenSearchRecommendation(false)

  const debounceSearchLabel = useDebounce(searchLabel, searchLabel === '' ? 0 : 700)

  useEffect(() => {
    if (debounceSearchLabel !== '') {
      dispatch(
        getClinics({
          limit: 3,
          page: 1,
          name: searchLabel
        })
      )
      dispatch(
        getDoctors({
          limit: 3,
          page: 1,
          fullName: searchLabel
        })
      )
      setIsLoading(false)
    }
  }, [debounceSearchLabel])

  useEffect(() => {
    if (searchLabel != '') {
      setIsLoading(true)
    }
  }, [searchLabel])

  useEffect(() => {
    setClinicsSearch(clinics)
  }, [clinics])

  useEffect(() => {
    setDoctorsSearch(doctors)
  }, [doctors])
  const sliderInfo = [
    {
      id: 1,
      name: t('medical services.make appointment at facility'),
      icon: images.booking
    },
    {
      id: 2,
      name: t('medical services.make an appointment with a doctor'),
      icon: images.examinationEars1
    },
    {
      id: 3,
      name: t('medical services.remote medical consultation'),
      icon: images.consult
    },
    {
      id: 4,
      name: t('medical services.schedule a medical test'),
      icon: images.schedule
    },
    {
      id: 5,
      name: t('medical services.health check-up package'),
      icon: images.insurance
    },
    {
      id: 6,
      name: t('medical services.schedule vaccination appointment'),
      icon: images.injection
    },
    {
      id: 7,
      name: t('medical services.pay hospital fees'),
      icon: images.pay
    }
  ]

  const list = [t('home.search for healthcare facilities'), t('home.search for specialties'), t('home.search for doctors')]

  return (
    <Box className='intro__wrapper ' height='50vh'>
      <Box className='intro__banner'>
        <Stack flexDirection='column' alignItems='center' gap='16px' textAlign='center' padding='16px' className='reveal fade-in'>
          <Typography variant='h5' color='var(--primary)'>
            {t('home.technology platform')}
          </Typography>
          <Typography variant={titleSize} color='var(---secondary)'>
            {t('home.connecting')}
          </Typography>

          <Stack direction='row' gap={1} alignItems='center' position='relative' width='100%'>
            <ClickAwayListener onClickAway={handleCloseActionMenu}>
              <Box width='100%'>
                <TextField
                  id='text-input'
                  value={searchLabel}
                  onChange={(e) => {
                    setSearchLabel(e.target.value)
                  }}
                  onClick={() => handleOpenActionMenu()}
                  autoComplete='off'
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      position: 'relative',
                      backgroundColor: 'white',
                      borderRadius: '30px',
                      height: '60px',
                      boxShadow: '4px 8px 30px 0 rgba(177,196,218,.35)',
                      padding: '11px 20px'
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <HiMagnifyingGlass size={24} color='var(--text-tertiary)' />
                      </InputAdornment>
                    ),
                    endAdornment: searchLabel !== '' && (
                      <IoMdClose
                        size={24}
                        color='var(--text-tertiary)'
                        cursor='pointer'
                        onClick={() => {
                          setSearchLabel('')
                        }}
                      />
                    )
                  }}
                />
                {searchLabel !== '' && openSearchRecommendation && (
                  <Stack className='search-recommend-result' maxHeight='350px' direction='column' gap={0.5}>
                    <Stack direction='column' gap={0.5}>
                      <Stack direction='row' justifyContent='space-between' alignItems='center' padding='10px' sx={{ backgroundColor: 'var(--blue-60)' }}>
                        <Typography variant='label4' color='var(--secondary)'>
                          {t('healthcare facilities.healthcare facilities')}
                        </Typography>
                        <Typography
                          variant='label4'
                          component='i'
                          color='var(--primary)'
                          sx={{
                            cursor: 'pointer'
                          }}
                          onClick={() => navigate(`${paths.HOSPITALS}?name=${searchLabel}`)}
                        >
                          Xem tất cả
                        </Typography>
                      </Stack>
                      {!loadingClinic && !loading ? (
                        clinicsSearch?.length > 0 ? (
                          clinicsSearch?.map((el: any, index: any) => (
                            <Box key={index} className='search__card' gap='10px' onClick={() => navigate(`${paths.HOSPITALS}/${el._id}`)}>
                              <Box width='40px' height='40px' component='img' src={el.logo} alt='' />
                              <Stack flexDirection='column' gap='4px' alignItems='flex-start'>
                                <Typography variant='label4'>{el.name}</Typography>
                                <Typography variant='caption1' color='var(--text-tertiary)'>
                                  {el?.address?.detail ? `${el?.address?.detail},` : ''} {el?.address?.ward ? `${el?.address?.ward},` : ''} {el?.address?.district ? `${el?.address?.district},` : ''}
                                  {el?.address?.province}
                                </Typography>
                              </Stack>
                            </Box>
                          ))
                        ) : (
                          <Container className='empty__container'>
                            <img src={images.emptyIcon} alt='Empty' width='20%' />
                          </Container>
                        )
                      ) : (
                        [...Array(3)].map((item, index: number) => <CustomSkeleton key={index} variant='card-search' />)
                      )}
                    </Stack>
                    <Stack direction='column' gap={0.5}>
                      <Stack direction='row' justifyContent='space-between' alignItems='center' padding='10px' sx={{ backgroundColor: 'var(--blue-60)' }}>
                        <Typography variant='label4' color='var(--secondary)'>
                          Bác sĩ
                        </Typography>
                        <Typography
                          variant='label4'
                          component='i'
                          color='var(--primary)'
                          sx={{
                            cursor: 'pointer'
                          }}
                          onClick={() => navigate(`${paths.DOCTORS}?name=${searchLabel}`)}
                        >
                          Xem tất cả
                        </Typography>
                      </Stack>
                      {!loadingDoctor && !loading ? (
                        doctorsSearch?.length > 0 ? (
                          doctorsSearch?.map((el: any, index: any) => (
                            <Box key={index} className='search__card' gap='10px' onClick={() => navigate(`${paths.DOCTORS}/${el._id}`)}>
                              <Box
                                width='40px'
                                height='40px'
                                component='img'
                                src={
                                  el?._id?.avatar
                                    ? el?._id?.avatar
                                    : el?.gender === 'MALE'
                                      ? 'https://res.cloudinary.com/dc4o6u6wm/image/upload/v1708694374/booking/bsNam'
                                      : 'https://res.cloudinary.com/dc4o6u6wm/image/upload/v1708694374/booking/bsNu'
                                }
                                alt=''
                              />
                              <Stack flexDirection='column' gap='4px' alignItems='flex-start'>
                                <Typography variant='label4'>
                                  {el?.position} {el?._id?.fullName}
                                </Typography>
                                <Typography variant='caption1' color='var(--text-tertiary)'>
                                  {el?.clinicID?.name}
                                </Typography>
                                <Typography variant='caption1' color='var(--text-tertiary)'>
                                  {el?.specialtyID?.name}
                                </Typography>
                              </Stack>
                            </Box>
                          ))
                        ) : (
                          <Container className='empty__container'>
                            <img src={images.emptyIcon} alt='Empty' width='20%' />
                          </Container>
                        )
                      ) : (
                        [...Array(3)].map((_, index: number) => <CustomSkeleton key={index} variant='card-search' />)
                      )}
                    </Stack>
                  </Stack>
                )}
              </Box>
            </ClickAwayListener>
          </Stack>
          <Typography variant='body1' color='var(---secondary)'>
            {t('home.quick-oline-remote')}
          </Typography>
        </Stack>
      </Box>
      <Box
        width='100%'
        margin='-6vh auto auto auto'
        maxWidth='calc(var(--max-width)-160px)'
        sx={{
          padding: {
            oversize: '0 160px',
            tablet: '0 64px',
            mobile: '0'
          }
        }}
        className='reveal fade-in'
      >
        <Slider className={isTablet ? 'custom-slider' : 'custom-slider-1'} {...settings}>
          {sliderInfo.map((el, index) => (
            <Box key={index} padding='10px'>
              <Box
                className='intro__card'
                sx={{
                  padding: paddingCard,
                  height: heightCard
                }}
              >
                <Box
                  component='img'
                  src={el.icon}
                  alt={el.name}
                  width={sizeImg}
                  sx={{
                    objectFit: 'contain'
                  }}
                />
                <Typography variant={isTablet ? 'body2' : 'body3'} color='var(--secondary)'>
                  {el.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default IntroSection
