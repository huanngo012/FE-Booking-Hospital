import './style.scss'
import { Box, useMediaQuery } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { ReactNode, useEffect, useLayoutEffect, useState } from 'react'

import Header from '~/components/layout/header/Header'
import Footer from '~/components/layout/footer/Footer'
import { theme } from '~/themes/Theme'
import { images } from '~/assets'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '~/redux/store'
import { getPatients } from '~/redux/reducer/Patient'

const { SrollUpIcon } = images

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const maringTop = isDesktop ? '135px' : '66px'
  const rightButtonScrollToTop = isDesktop ? '56px' : '28px'

  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const dispatch = useDispatch<AppDispatch>()
  const { isLoggedIn } = useSelector((state: any) => state.auth)
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getPatients({}))
    }
  }, [])

  return (
    <Box className='body-content-wrapper'>
      <Header />
      <Box marginTop={maringTop}></Box>
      {children}
      <Footer />

      {showScrollButton && <SrollUpIcon className='scroll-up-icon' style={{ right: rightButtonScrollToTop }} onClick={scrollToTop} />}
    </Box>
  )
}

export default Layout
