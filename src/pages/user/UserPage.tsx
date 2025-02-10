import './style.scss'
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { theme } from '~/themes/Theme'
import { paddingScreen, paths, tabsUser } from '~/utils/constant'
import { BreadscrumbCustom } from '~/components'
import TabProfile from './TabProfile'
import TabPassword from './TabPassword'
import TabRecord from './TabRecord'
import TabBooking from './TabBooking'

const UserPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))

  const handleChangeTab = (_: React.SyntheticEvent, path: string) => {
    navigate(path)
  }

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const [param, setParam] = useState<any>(searchParams?.get('state'))
  useEffect(() => {
    setParam(searchParams?.get('state'))
  }, [searchParams])

  const handleRenderStep = () => {
    switch (param) {
      case 'profile':
        return <TabProfile />
      case 'record':
        return <TabRecord />
      case 'booking':
        return <TabBooking />
      case 'password':
        return <TabPassword />
      default:
        setParam('profile')
        return <TabProfile />
    }
  }

  const linksBreadcrums = [
    {
      title: t('home.home'),
      link: '/',
      activeLink: false
    },
    {
      title: t('user.account information'),
      link: '',
      activeLink: true
    }
  ]

  return (
    <Box className='user__wrapper'>
      <Box className='container' sx={paddingScreen}>
        <Stack flexDirection='column' gap='24px' maxWidth='var(--max-width)' width='100%'>
          {<BreadscrumbCustom data={linksBreadcrums} />}
          <Grid container className='profile__wrapper'>
            <Grid item oversize={3} desktop={3} tablet={3} mobile={3} display={isTablet ? 'block' : 'none'} className='profile__left'>
              <Box className='profile__tabs'>
                {tabsUser.map((tab, index) => (
                  <Box className='profile__tabs-item' key={index} onClick={(e) => handleChangeTab(e, `${paths.USER}?state=${tab.path}`)} component='button'>
                    <Box className={`content ${param === tab.path && 'active'}`}>
                      {tab.icon}
                      <Typography variant='label2'>{tab.text}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item oversize={9} desktop={9} tablet={9} mobile={12} paddingLeft={isTablet ? '30px' : '0s'}>
              <Box>{handleRenderStep()}</Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  )
}

export default UserPage
