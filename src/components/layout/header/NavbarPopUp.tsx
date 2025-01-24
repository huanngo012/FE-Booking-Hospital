import React, { useState } from 'react'
import { Badge, Box, Button, ClickAwayListener, Divider, MenuItem, MenuList, Paper, Popper, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'

import { paths } from '~/utils/constant'
import { AppDispatch } from '~/redux/store'
import { theme } from '~/themes/Theme'

interface NavbarPopUpProps {
  tabs?: { title: string; path: string }[]
  handleNav?: any
  activeLink?: string | null
}

const imageAppStore = 'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fmedpro%2Fweb%2Ficon_ios.svg%3Ft%3D11111111&w=1920&q=75'
const imageCHPlay = 'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fmedpro%2Fweb%2Ficon_google_play.svg%3Ft%3D1111111&w=1920&q=75'

const NavbarPopUp = ({ tabs, handleNav, activeLink }: NavbarPopUpProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const isLoggedIn = false

  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const widthPopUp = isTablet ? '50%' : '100%'
  const anchorRefNav = React.useRef(null)
  const [openNav, setOpenNav] = useState(false)
  const handleToggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen)
  }

  const handleCloseNav = () => {
    setOpenNav(false)
  }

  return (
    <Badge className='nav-popup' sx={{ display: { mobile: 'flex', desktop: 'none' } }} ref={anchorRefNav} onClick={handleToggleNav}>
      <FiMenu size={24} />
      <Popper
        open={openNav}
        anchorEl={anchorRefNav.current}
        sx={{
          padding: '32px',
          zIndex: '1000',
          boxShadow: 'none !important',
          width: widthPopUp
        }}
      >
        <ClickAwayListener onClickAway={handleCloseNav}>
          <Paper className='popup-container'>
            <MenuList id='menu-list-grow'>
              {tabs?.map((el, index) => {
                return (
                  <MenuItem onClick={(e) => handleNav(e, el.path)} key={index} sx={{ borderRadius: '8px' }} selected={activeLink === el.path}>
                    <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} width={'100%'} gap={'4px'}>
                      <Typography id='asdsada' variant='body2'>
                        {el.title}
                      </Typography>
                    </Stack>
                  </MenuItem>
                )
              })}
            </MenuList>
            <Divider />
            {isLoggedIn ? (
              <Button
                className='logout-button'
                variant='contained'
                // onClick={() => dispatch(logout())}
              >
                <Typography variant='button2'>Đăng xuất</Typography>
              </Button>
            ) : (
              <Stack flexDirection='row' alignItems='center' gap='16px'>
                <Button className='signup-button' variant='outlined' color='primary' onClick={() => navigate(`${paths.LOGIN}?state=signUp`)}>
                  <Typography variant='button2'>Đăng ký</Typography>
                </Button>
                <Button className='login-button' variant='contained' color='primary' onClick={() => navigate(paths.LOGIN)}>
                  <Typography variant='button2'>Đăng nhập</Typography>
                </Button>
              </Stack>
            )}

            <Divider />
            <Stack flexDirection='column' alignItems='center' gap='16px'>
              <Typography variant='label1'>{t('download app')}</Typography>
              <Stack flexDirection='row' justifyContent='center' alignItems='center' gap='16px'>
                <Box width='100px' component='img' src={imageAppStore} alt='' />
                <Box width='100px' component='img' src={imageCHPlay} alt='' />
              </Stack>
            </Stack>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Badge>
  )
}

export default NavbarPopUp
