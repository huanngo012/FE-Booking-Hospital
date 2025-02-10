import './style.scss'
import { useTranslation } from 'react-i18next'
import { Fragment, useEffect, useState } from 'react'
import { paddingScreen, paths } from '~/utils/constant'
import { images } from '~/assets'
import { Box, Button, Link, Stack, Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { theme } from '~/themes/Theme'
import LanguagePopUp from './LanguagePopUp'
import ProfilePopup from './ProfilePopup'
import NavbarPopUp from './NavbarPopUp'
import { useSelector } from 'react-redux'

const { FacebookIcon, TiktokIcon, YoutubeIcon, PhoneIcon, UserIcon } = images
const linkLogo = 'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fmedpro%2Fweb%2Fheader_logo.svg&w=1920&q=75'
const linkImage = 'https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhp.a16c51cc.svg&w=1920&q=75'

const Header = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const displayDesktop = isDesktop ? 'flex' : 'none'
  const displayMobile = isDesktop ? 'none' : 'flex'

  const { isLoggedIn } = useSelector((state: any) => state.auth)

  let oldScrollY = 0

  const [tab, setTabs] = useState<any>('/')

  const [direction, setDirection] = useState<any>('up')

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setDirection('down')
    } else {
      setDirection('up')
    }
    oldScrollY = window.scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', controlDirection)
    return () => {
      window.removeEventListener('scroll', controlDirection)
    }
  }, [])

  const handleScroll = (value: string) => {
    const targetElement = document.getElementById(value)
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
      const offset = 80
      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const pathName = location?.pathname.split('/')?.[1]
    if (pathName === 'user') {
      setTabs(false)
      return
    }
    if (pathName) {
      setTabs(`/${pathName}`)
      return
    }
    setTabs('/')
  }, [location?.pathname])

  const handleChangeTab = (_event: React.SyntheticEvent, value: string) => {
    setTabs(value)
    navigate(value)
  }

  const menu = [
    {
      id: 1,
      title: t('home.home'),
      path: paths.HOME
    },
    {
      id: 2,
      title: t('healthcare facilities.healthcare facilities'),
      path: paths.HOSPITALS
    },
    // {
    //   id: 3,
    //   title: "Chuyên khoa",
    //   path: paths.SPECIALTIES,
    // },
    {
      id: 4,
      title: t('doctor.doctor'),
      path: paths.DOCTORS
    },
    {
      id: 5,
      title: t('news.news'),
      path: paths.NEWS
    },
    {
      id: 6,
      title: t('about-page.about-us'),
      path: paths.ABOUT
    }
  ]
  return (
    <Box className='header__sticky' sx={paddingScreen}>
      <Box className='header__container'>
        <Box className='logo' onClick={() => navigate(paths.HOME)} width='150px' component='img' src={linkLogo} alt='' />
        <Box className='header__menu'>
          <Box display={displayDesktop} className={direction === 'down' ? 'header__menu-top-without-network' : 'header__menu-top'}>
            <Box className='list-networks'>
              {network.map((el, index) => (
                <Fragment key={index}>
                  <Box className='item'>
                    <Link className='link' href={el.link} target='_blank'>
                      {el.icon}
                      <Typography variant='label2' color='#003553'>
                        {el.name}
                      </Typography>
                    </Link>
                  </Box>
                  {index !== network.length - 1 && '|'}
                </Fragment>
              ))}
            </Box>
            <Box className='list-actions'>
              <Button className='dowload-button' variant='contained' onClick={() => handleScroll('downloadSection')}>
                <PhoneIcon />
                <Typography variant='button2'>{t('download app')}</Typography>
              </Button>
              {!isLoggedIn ? (
                <Button className='login-button' variant='outlined' color='primary' onClick={() => navigate(paths.LOGIN)}>
                  <UserIcon />
                  <Typography variant='button2'>{t('user.account')}</Typography>
                </Button>
              ) : (
                <ProfilePopup />
              )}
              <LanguagePopUp />
            </Box>
          </Box>

          <Box className='header__menu-bottom'>
            <Stack className='item-left' display={displayDesktop}>
              <Box component='img' src={linkImage} alt='' />
              <Stack flexDirection='column' display={displayDesktop}>
                <Typography variant='label2'>{t('schedule.appointment assistance')}</Typography>
                <Typography variant='h5' color='#ffb54a'>
                  1900 2115
                </Typography>
              </Stack>
            </Stack>
            <Stack className='item-right' display={displayDesktop}>
              <Tabs value={tab} onChange={handleChangeTab} defaultValue={tab}>
                {menu?.map((item, index) => <Tab key={index} value={item?.path} label={<Typography variant='label2'>{item?.title}</Typography>} />)}
              </Tabs>
            </Stack>
            <Stack className='item-right' display={displayMobile}>
              <LanguagePopUp />
              {isLoggedIn && <ProfilePopup />}

              <NavbarPopUp tabs={menu} handleNav={handleChangeTab} activeLink={tab} />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header

const network = [
  {
    id: 1,
    name: 'Tiktok',
    icon: <TiktokIcon fill='#003553' />,
    link: 'https://www.tiktok.com/@medprovn'
  },
  {
    id: 2,
    name: 'Facebook',
    icon: <FacebookIcon fill='#003553' />,
    link: 'https://www.facebook.com/www.medpro.vn'
  },
  {
    id: 1,
    name: 'Youtube',
    icon: <YoutubeIcon fill='#003553' />,
    link: 'https://www.youtube.com/@medpro-datkhamnhanh'
  }
]
