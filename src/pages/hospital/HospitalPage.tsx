import './style.scss'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdClose } from 'react-icons/io'
import { PiCaretDown, PiCaretLeft, PiCaretRight, PiMagnifyingGlass } from 'react-icons/pi'
import { theme } from '~/themes/Theme'
import { Box, Button, ClickAwayListener, Container, InputAdornment, MenuItem, Pagination, PaginationItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import { images } from '~/assets'
import { paddingScreen, paths, provincesConstant } from '~/utils/constant'
import { AppDispatch } from '~/redux/store'
import { getClinics } from '~/redux/reducer/Clinic'
import useDebounce from '~/hooks/useDebounce'
import EmptyPage from '~/components/emptyPage/EmptyPage'
import { apiGetAllCategories } from '~/apis'

import { CustomSkeleton } from '~/components/index'
import { useTranslation } from 'react-i18next'

const { LocationIcon } = images

const HospitalPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const variant1 = isDesktop ? 'h3' : 'h5'
  const variant2 = isDesktop ? 'h5' : 'label1'
  const widthCard = isDesktop ? '50%' : '100%'
  const gapCard = isDesktop ? '40px' : '10px'

  const dispatch = useDispatch<AppDispatch>()
  const { clinics, loadingClinic, counts } = useSelector((state: any) => state.clinic)

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const pageSizeDefault = 10

  const [openSearchRecommendation, setOpenSearchRecommendation] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [provinces, setProvinces] = useState<any>([])
  const [categories, setCategories] = useState<any>([])
  const [categoryID, setCategoryID] = useState<any>('')
  const [province, setProvince] = useState('')
  const [searchedResultList, setSearchedResultList] = useState([])
  const [page, setPage] = useState<number>(1)

  const handleOpenActionMenu = () => setOpenSearchRecommendation(true)
  const handleCloseActionMenu = () => setOpenSearchRecommendation(false)

  const fetchApiProvince = async () => {
    setProvinces(provincesConstant)
  }

  const fetchApiCategories = async () => {
    const response: any = await apiGetAllCategories()
    if (response?.success) {
      setCategories(response?.data)
    }
  }
  useEffect(() => {
    fetchApiProvince()
    fetchApiCategories()
  }, [])

  useEffect(() => {
    if (keyword !== '') {
      handleOpenActionMenu()
      const filteredData = provinces.filter((data: any) => data.province_name.toLowerCase().includes(keyword.toLowerCase()))
      setSearchedResultList(filteredData as [])
    } else setSearchedResultList(provinces as [])
  }, [keyword, provinces])

  const handleChangePage = (_: any, value: number) => {
    setPage(value)
  }

  const [searchLabel, setSearchLabel] = useState<any>(searchParams.get('name'))
  const [clinicsSearch, setClinicsSearch] = useState<any>({})

  const debounceSearchLabel = useDebounce(searchLabel, 700)
  const debounceSearchProvince = useDebounce(province, 700)
  useEffect(() => {
    setPage(1)
    dispatch(
      getClinics({
        limit: pageSizeDefault,
        page: 1,
        name: searchLabel,
        'address.province': province,
        categoryID: categoryID
      })
    )
  }, [debounceSearchLabel, debounceSearchProvince, categoryID])

  useEffect(() => {
    dispatch(
      getClinics({
        limit: pageSizeDefault,
        page: page,
        name: searchLabel,
        'address.province': province
      })
    )
  }, [page])

  useEffect(() => {
    setClinicsSearch(clinics)
  }, [clinics])

  const totalPage = Math.ceil(counts / pageSizeDefault)

  return (
    <Box className='hospital__wrapper'>
      <Box className='hospital__header'>
        <Container className='hospital__header-content' sx={paddingScreen}>
          <Box className='content'>
            <Typography variant={variant1} color='var(--primary)' className='text-title'>
              {t('medical services.MAKE AN APPOINTMENT AT THE FACILITY')}
            </Typography>
            <Typography variant={variant2} color='var(--secondary)'>
              {t('medical services.make an appointment quickly')}
            </Typography>
          </Box>
        </Container>
      </Box>
      <Stack alignItems='center' sx={paddingScreen}>
        <Box className='hospital__body'>
          <Stack flexDirection='row' flexWrap='wrap' rowGap='20px' gap='20px'>
            <Button className={categoryID === '' ? 'button-category active' : 'button-category'} onClick={() => setCategoryID('')}>
              <Typography variant={isTablet ? 'label2' : 'label3'}>{t('healthcare facilities.all')}</Typography>
            </Button>
            {categories?.map((el: any, index: any) => (
              <Button key={index} className={el?._id === categoryID ? 'button-category active' : 'button-category'} onClick={() => setCategoryID(el?._id)}>
                <Typography variant={isTablet ? 'label2' : 'label3'}>{el?.tag}</Typography>
              </Button>
            ))}
          </Stack>
          <Stack
            flexDirection='row'
            sx={{
              maxWidth: '900px',
              width: '100%',
              margin: 'auto'
            }}
          >
            <TextField
              value={searchLabel}
              placeholder={t('search')}
              onChange={(e: any) => {
                setSearchLabel(e.target.value)
                navigate({
                  pathname: `${paths.HOSPITALS}`,
                  search: `name=${e.target.value}`
                })
              }}
              sx={{
                '&.MuiFormControl-root': {
                  width: '100%'
                },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                  borderTopLeftRadius: '16px',
                  borderBottomLeftRadius: '16px',
                  boxShadow: '4px 8px 30px 0 rgba(177,196,218,.35)',
                  padding: '6px 20px'
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PiMagnifyingGlass size={24} color='var(--text-tertiary)' />
                  </InputAdornment>
                )
              }}
            />
            <Stack direction='row' gap={1} alignItems='center' position='relative'>
              {' '}
              <ClickAwayListener onClickAway={handleCloseActionMenu}>
                <Box>
                  <TextField
                    placeholder={t('all locations')}
                    autoComplete='off'
                    value={keyword || province}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'white',
                        borderTopRightRadius: '16px',
                        borderBottomRightRadius: '16px',
                        boxShadow: '4px 8px 30px 0 rgba(177,196,218,.35)',
                        padding: '6px 20px',
                        minWidth: '300px'
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <LocationIcon color='var(--text-tertiary)' />
                        </InputAdornment>
                      ),
                      endAdornment:
                        keyword !== '' || province !== '' ? (
                          <IoMdClose
                            size={24}
                            color='var(--text-tertiary)'
                            cursor='pointer'
                            onClick={() => {
                              setKeyword('')
                              setProvince('')
                            }}
                          />
                        ) : (
                          <PiCaretDown size={24} color='var(--text-tertiary)' cursor='pointer' />
                        )
                    }}
                    onChange={(e) => {
                      setKeyword(e.target.value)
                      setProvince('')
                    }}
                    onClick={() => handleOpenActionMenu()}
                  />
                  {openSearchRecommendation && searchedResultList.length !== 0 && (
                    <Stack className='search-recommend-result' padding='12px' maxHeight='240px' direction='column' gap={0.5}>
                      {searchedResultList.map((item: any, index: any) => (
                        <MenuItem
                          key={index}
                          className='search-recommend-result__item'
                          onClick={() => {
                            setProvince(item.province_name)
                            setKeyword('')
                          }}
                          selected={item.province_name === province}
                        >
                          <Typography variant='body2'>{item.province_name}</Typography>
                        </MenuItem>
                      ))}
                    </Stack>
                  )}
                </Box>
              </ClickAwayListener>
            </Stack>
          </Stack>
          <Stack flexDirection='row' flexWrap='wrap' rowGap='20px' width='100%'>
            {!loadingClinic ? (
              clinicsSearch?.length > 0 ? (
                clinicsSearch?.map((el: any, index: any) => (
                  <Stack key={index} flex={widthCard} maxWidth={widthCard} padding='0 10px'>
                    <Box className='hospital__card' gap={gapCard}>
                      <Box width='76px' height='76px' component='img' src={el.logo} alt={el.name} />
                      <Stack flexDirection='column' gap='16px' justifyContent='center'>
                        <Typography variant={isTablet ? 'h6' : 'label1'}>{el.name}</Typography>
                        <Typography variant={isTablet ? 'body2' : 'body3'} display='flex' alignItems='center' gap='4px' color='var(--text-tertiary)'>
                          <LocationIcon color='var(--text-tertiary)' />
                          {el?.address?.detail ? `${el?.address?.detail},` : ''} {el?.address?.ward ? `${el?.address?.ward},` : ''} {el?.address?.district ? `${el?.address?.district},` : ''}
                          {el?.address?.province}
                        </Typography>
                        <Stack flexDirection='row' gap='16px'>
                          <Button
                            variant='contained'
                            color='primary'
                            sx={{
                              display: 'flex',
                              gap: '4px',
                              borderRadius: '30px'
                            }}
                            onClick={() => navigate(`/hospitals/${el._id}`)}
                          >
                            <Typography variant={isTablet ? 'button2' : 'button3'}>{t('see details')}</Typography>
                          </Button>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                ))
              ) : (
                <EmptyPage title='Không tìm thấy bệnh viện' />
              )
            ) : (
              [...Array(10)].map((_, index: number) => <CustomSkeleton key={index} variant='card-hospital' />)
            )}
          </Stack>
          {!loadingClinic && clinicsSearch?.length > 0 && (
            <Pagination
              count={totalPage}
              page={page}
              hidePrevButton={page === 1}
              hideNextButton={page === totalPage}
              onChange={handleChangePage}
              shape='rounded'
              color='primary'
              renderItem={(item) => <PaginationItem slots={{ previous: PiCaretLeft, next: PiCaretRight }} {...item} />}
            />
          )}
        </Box>
      </Stack>
    </Box>
  )
}

export default HospitalPage
