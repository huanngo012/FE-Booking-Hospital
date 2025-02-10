import './style.scss'
import { theme } from '~/themes/Theme'
import { CustomSkeletonProps } from '../module'
import { Box, Skeleton, Stack, useMediaQuery } from '@mui/material'

const CustomSkeleton = ({ variant }: CustomSkeletonProps) => {
  switch (variant) {
    case 'card-hospital':
      return <CardHospitalSkeleton />
    case 'card-hospital-section':
      return <CardHospitalSectionSkeleton />
    case 'card-doctor':
      return <CardDoctorSkeleton />
    case 'card-schedule':
      return <CardScheduleSkeleton />
    case 'card-patient':
      return <CardPatientSkeleton />
    case 'card-search':
      return <CardSearchSkeleton />
    default:
      return <></>
  }
}

export default CustomSkeleton

const CardHospitalSkeleton = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  const widthCard = isDesktop ? '50%' : '100%'
  const gapCard = isDesktop ? '40px' : '10px'
  return (
    <Stack flex={widthCard} maxWidth={widthCard} padding='0 10px'>
      <Box className='hospital__card' gap={gapCard}>
        <Skeleton height={76} width={76} />
        <Stack flexDirection='column' gap='16px' justifyContent='center' width='100%'>
          <Skeleton height={24} width='100%' />
          <Skeleton height={48} width='100%' />
          <Stack flexDirection='row' gap='16px'>
            <Skeleton height={40} width='25%' />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

const CardSearchSkeleton = () => {
  return (
    <Box className='search__card' gap='10px'>
      <Skeleton height='40px' width='40px' />
      <Stack flexDirection='column' gap='4px' alignItems='flex-start' width='100%'>
        <Skeleton height={18} width='100%' />
        <Skeleton height={18} width='100%' />
      </Stack>
    </Box>
  )
}

const CardHospitalSectionSkeleton = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))

  const heightImg = isTablet ? (isDesktop ? '200px' : '150px') : '100px'
  return (
    <Box padding='10px'>
      <Box className='hospital-section__card'>
        <Skeleton height={heightImg} width={heightImg} />
        <Box component='span' sx={{ display: 'flex', height: '16px' }}>
          <Skeleton width={16} />
          <Skeleton width={16} />
          <Skeleton width={16} />
          <Skeleton width={16} />
          <Skeleton width={16} />
        </Box>
        <Skeleton height={24} width='100%' />
        <Skeleton height={48} width='100%' />
      </Box>
    </Box>
  )
}

const CardPatientSkeleton = () => {
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const paddingCard = isTablet ? '28px 27px 26px' : '15px 13px'
  return (
    <Box
      padding='10px'
      sx={{
        display: 'flex !important'
      }}
    >
      <Box width='100%'>
        <Box
          className='record__card'
          sx={{
            padding: paddingCard,
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
          }}
        >
          <Skeleton height={24} width='100%' />
          <Skeleton height={24} width='100%' />
          <Skeleton height={24} width='100%' />
          <Skeleton height={24} width='100%' />
          <Stack flexDirection='row' gap='16px' alignItems='center'>
            <Skeleton height={48} width='100%' />
            <Skeleton height={48} width='100%' />
          </Stack>
        </Box>
      </Box>{' '}
    </Box>
  )
}

const CardDoctorSkeleton = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const gapCard = isDesktop ? '40px' : '10px'
  return (
    <Stack padding='0 10px' width='100%'>
      <Stack flex='100%' maxWidth='100%' padding='0 10px'>
        <Box className='hospital__card' gap={gapCard}>
          <Skeleton height={76} width={76} />
          <Stack flexDirection='column' gap='16px' justifyContent='center' width='100%'>
            <Skeleton height={24} width='100%' />
            <Skeleton height={24} width='100%' />
            <Skeleton height={48} width='100%' />
            <Skeleton height={24} width='100%' />
            <Stack flexDirection='row' gap='16px'>
              <Skeleton height={40} width='25%' />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  )
}
const CardScheduleSkeleton = () => {
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  return (
    <Stack flexDirection='row' flexWrap={isTablet ? 'wrap' : 'nowrap'} rowGap='24px' gap='24px' sx={{ overflow: 'auto' }} width='100%'>
      <Skeleton height='80px' width='115px' />
      <Skeleton height='80px' width='115px' />
      <Skeleton height='80px' width='115px' />
      <Skeleton height='80px' width='115px' />
      <Skeleton height='80px' width='115px' />
      <Skeleton height='80px' width='115px' />
      <Skeleton height='80px' width='115px' />
    </Stack>
  )
}
