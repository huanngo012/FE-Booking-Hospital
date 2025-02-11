import './style.scss'
import { Box, ClickAwayListener, InputAdornment, MenuItem, Pagination, PaginationItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppDispatch } from '~/redux/store'
import { t } from 'i18next'
import { PiCaretDown, PiCaretLeft, PiCaretRight, PiMagnifyingGlass } from 'react-icons/pi'
import { useEffect, useState } from 'react'
import { LiaHospitalAltSolid } from 'react-icons/lia'
import { IoMdClose } from 'react-icons/io'
import { CiStethoscope } from 'react-icons/ci'
import { getDoctors } from '~/redux/reducer/Doctor'
import useDebounce from '~/hooks/useDebounce'
import { apiGetAllClinics } from '~/apis'
import DoctorCard from './DoctorCard'
import EmptyPage from '../emptyPage/EmptyPage'
import CustomSkeleton from '../skeleton/CustomSkeleton'
import { theme } from '~/themes/Theme'

const DoctorBody = ({ clinicSearch = {}, inHospitalPage }: { clinicSearch?: any; inHospitalPage: boolean }) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const widthCard = isDesktop && !inHospitalPage ? '50%' : '100%'

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { doctors, counts, loadingDoctor } = useSelector((state: any) => state.doctor)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const pageSizeDefault = 10
  const [openSearchClinics, setOpenSearchClinics] = useState(false)
  const [openSearchSpecialtys, setOpenSearchSpecialtys] = useState(false)
  const [keywordClinic, setKeywordClinic] = useState('')
  const [keywordSpecialty, setKeywordSpecialty] = useState('')
  const [clinics, setClinics] = useState<any>([])
  const [clinic, setClinic] = useState<any>(clinicSearch)
  const [nameClinic, setNameClinic] = useState(clinicSearch?.name ? clinicSearch?.name : '')
  const [nameSpecialty, setNameSpecialty] = useState('')
  const [searchedspecialtys, setSearchedSpecialtys] = useState<any>([])
  const [searchedClinics, setSearchedClinics] = useState([])
  const [page, setPage] = useState<number>(1)
  const [searchLabel, setSearchLabel] = useState(searchParams.get('name') || '')
  const [doctorsSearch, setDoctorsSearch] = useState<any>({})

  const debounceSearchLabel = useDebounce(searchLabel, 700)
  const debounceSearchNameClinic = useDebounce(nameClinic, 700)
  const debounceSearchNameSpecialty = useDebounce(nameSpecialty, 700)

  const handleChangePage = (_e: any, value: number) => {
    setPage(value)
  }

  const fetchApiClinic = async () => {
    const response: any = await apiGetAllClinics({
      fields: 'name'
    })
    if (response?.success) {
      setClinics(response?.data)
    }
  }
  useEffect(() => {
    fetchApiClinic()
  }, [])

  useEffect(() => {
    if (keywordClinic !== '') {
      setOpenSearchClinics(true)
      const filteredData = clinics.filter((data: any) => data.name.toLowerCase().includes(keywordClinic.toLowerCase()))
      setSearchedClinics(filteredData as [])
    } else setSearchedClinics(clinics as [])
  }, [keywordClinic, clinics])

  useEffect(() => {
    if (keywordSpecialty !== '') {
      setOpenSearchSpecialtys(true)
      const filteredData = clinic?.specialtyID?.filter((data: any) => data.name.toLowerCase().includes(keywordSpecialty.toLowerCase()))
      setSearchedSpecialtys(filteredData as [])
    } else setSearchedSpecialtys(clinic?.specialtyID as [])
  }, [keywordSpecialty, clinic])

  useEffect(() => {
    setPage(1)

    dispatch(
      getDoctors({
        limit: pageSizeDefault,
        page: 1,
        nameClinic: nameClinic,
        fullName: searchLabel,
        nameSpecialty: nameSpecialty
      })
    )
  }, [debounceSearchLabel, debounceSearchNameClinic, debounceSearchNameSpecialty])

  useEffect(() => {
    dispatch(
      getDoctors({
        limit: pageSizeDefault,
        page: page,
        fullName: searchLabel,
        nameClinic: nameClinic
      })
    )
  }, [page])

  useEffect(() => {
    setDoctorsSearch(doctors)
  }, [doctors])

  const totalPage = Math.ceil(counts / pageSizeDefault)

  return (
    <Box className='doctor__body'>
      <Box className='search-form'>
        <TextField
          className='search_by_doctor'
          value={searchLabel}
          placeholder={t('search')}
          onChange={(e: any) => {
            setSearchLabel(e.target.value)
            navigate({
              search: `name=${e.target.value}`
            })
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PiMagnifyingGlass size={24} color='var(--text-tertiary)' />
              </InputAdornment>
            )
          }}
        />
        <Stack flexDirection='row' width='100%'>
          <Stack direction='row' gap={1} alignItems='center' position='relative' width='100%'>
            <ClickAwayListener onClickAway={() => setOpenSearchClinics(false)}>
              <Box width='100%'>
                <TextField
                  className='search_by_hospital'
                  disabled={clinicSearch?.name ? true : false}
                  placeholder={t('hospital.all hospital')}
                  autoComplete='off'
                  value={keywordClinic || nameClinic}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LiaHospitalAltSolid color='var(--text-tertiary)' size='20px' />
                      </InputAdornment>
                    ),
                    endAdornment:
                      keywordClinic !== '' || nameClinic !== '' ? (
                        <IoMdClose
                          size={24}
                          color='var(--text-tertiary)'
                          cursor='pointer'
                          onClick={() => {
                            setKeywordClinic('')
                            setNameClinic('')
                            setNameSpecialty('')
                          }}
                        />
                      ) : (
                        <PiCaretDown size={24} color='var(--text-tertiary)' cursor='pointer' />
                      )
                  }}
                  onChange={(e) => {
                    setKeywordClinic(e.target.value)
                    setNameClinic('')
                    setNameSpecialty('')
                  }}
                  onClick={() => setOpenSearchClinics(true)}
                />
                {openSearchClinics && searchedClinics?.length !== 0 && (
                  <Stack className='search-recommend-result' maxHeight='240px' direction='column' gap={0.5}>
                    {searchedClinics.map((item: any, index: any) => (
                      <MenuItem
                        key={index}
                        className='search-recommend-result__item'
                        onClick={() => {
                          setNameClinic(item.name)
                          setClinic(item)
                          setKeywordClinic('')
                        }}
                        selected={item.name === nameClinic}
                      >
                        <Typography variant='body2'>{item.name}</Typography>
                      </MenuItem>
                    ))}
                  </Stack>
                )}
              </Box>
            </ClickAwayListener>
          </Stack>
          <Stack direction='row' gap={1} alignItems='center' position='relative' width='100%'>
            {' '}
            <ClickAwayListener onClickAway={() => setOpenSearchSpecialtys(false)}>
              <Box width='100%'>
                <TextField
                  disabled={nameClinic === '' ? true : false}
                  placeholder={t('all specialties.all specialties')}
                  autoComplete='off'
                  value={keywordSpecialty || nameSpecialty}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      borderRadius: '16px',
                      boxShadow: '4px 8px 30px 0 rgba(177,196,218,.35)',
                      padding: '6px 20px'
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <CiStethoscope color='var(--text-tertiary)' size='20px' />
                      </InputAdornment>
                    ),
                    endAdornment:
                      keywordSpecialty !== '' || nameSpecialty !== '' ? (
                        <IoMdClose
                          size={24}
                          color='var(--text-tertiary)'
                          cursor='pointer'
                          onClick={() => {
                            setKeywordSpecialty('')
                            setNameSpecialty('')
                          }}
                        />
                      ) : (
                        <PiCaretDown size={24} color='var(--text-tertiary)' cursor='pointer' />
                      )
                  }}
                  onChange={(e) => {
                    setKeywordSpecialty(e.target.value)
                    setNameSpecialty('')
                  }}
                  onClick={() => setOpenSearchSpecialtys(true)}
                />
                {openSearchSpecialtys && searchedspecialtys?.length !== 0 && (
                  <Stack className='search-recommend-result' maxHeight='240px' direction='column' gap={0.5}>
                    {searchedspecialtys?.map((item: any) => (
                      <MenuItem
                        className='search-recommend-result__item'
                        onClick={() => {
                          setNameSpecialty(item.name)
                          setKeywordSpecialty('')
                        }}
                        selected={item.name === nameSpecialty}
                      >
                        <Typography variant='body2'>{item.name}</Typography>
                      </MenuItem>
                    ))}
                  </Stack>
                )}
              </Box>
            </ClickAwayListener>
          </Stack>
        </Stack>
      </Box>
      <Stack flexDirection='row' flexWrap='wrap' rowGap='20px' maxWidth='100%' width='100%'>
        {!loadingDoctor ? (
          doctorsSearch?.length > 0 ? (
            doctorsSearch?.map((el: any, index: any) => (
              <Stack key={index} flex={widthCard} maxWidth={widthCard} padding='0 10px'>
                <DoctorCard data={el} />
              </Stack>
            ))
          ) : (
            <EmptyPage title={t('healthcare facilities.doctor not found')} />
          )
        ) : (
          [...Array(10)].map((_item, index: number) => <CustomSkeleton key={index} variant='card-doctor' />)
        )}
      </Stack>
      {!loadingDoctor && doctorsSearch?.length > 0 && (
        <Pagination
          count={totalPage}
          page={page}
          hidePrevButton={page === 1}
          hideNextButton={page === totalPage}
          onChange={handleChangePage}
          shape='rounded'
          color='primary'
          renderItem={(item) => <PaginationItem slots={{ previous: PiCaretLeft, next: PiCaretRight }} {...item} />}
          sx={{
            '&.MuiPagination-root': {
              display: 'flex',
              justifyContent: 'center'
            }
          }}
        />
      )}
    </Box>
  )
}

export default DoctorBody
