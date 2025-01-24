import { theme } from '~/themes/Theme'
import { CustomSkeletonProps } from '../module'
import './style.scss'
import { Box, Skeleton, Stack, useMediaQuery } from '@mui/material'

const CustomSkeleton = ({ variant }: CustomSkeletonProps) => {
  switch (variant) {
    case 'card-hospital':
      return <CardHospitalSkeleton />
    case 'card-hospital-section':
      return <CardHospitalSectionSkeleton />
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
