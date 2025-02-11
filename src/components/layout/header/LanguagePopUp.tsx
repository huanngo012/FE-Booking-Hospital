import './style.scss'
import { Badge, Box, ClickAwayListener, MenuItem, MenuList, Paper, Popper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PiCaretDown } from 'react-icons/pi'
import { images } from '~/assets'

const LanguagePopUp = () => {
  const { FlagEnIcon, FlagVnIcon } = images
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language
  const languages = [
    {
      title: 'Tiếng Anh',
      icon: <FlagEnIcon className='flag-icon' />,
      lng: 'en'
    },
    {
      title: 'Tiếng Việt',
      icon: <FlagVnIcon className='flag-icon' />,
      lng: 'vi'
    }
  ]

  const anchorRefLanguage = React.useRef(null)
  const [openLanguage, setOpenLanguage] = useState(false)

  const handleToggleLanguage = () => {
    setOpenLanguage((prevOpen) => !prevOpen)
  }

  const handleCloseLanguage = () => {
    setOpenLanguage(false)
  }

  const handlerChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setOpenLanguage(false)
    localStorage.setItem('lng', lng)
  }

  useEffect(() => {
    if (localStorage.getItem('lng')) {
      const curLng: string | null = localStorage.getItem('lng')
      i18n.changeLanguage(curLng ? curLng : i18n.language)
    }
  }, [])
  return (
    <Badge sx={{ cursor: 'pointer' }} ref={anchorRefLanguage} onClick={handleToggleLanguage}>
      <Box className='language-icon'>
        {currentLanguage == 'vi' ? languages[1].icon : languages[0].icon}
        <PiCaretDown size={16} />
      </Box>

      <Popper open={openLanguage} anchorEl={anchorRefLanguage.current} sx={{ left: '-40px !important', zIndex: '1000' }}>
        <ClickAwayListener onClickAway={handleCloseLanguage}>
          <Paper
            sx={{
              padding: '8px',
              borderRadius: '8px',
              boxShadow: '0px 1px 8px 0px rgba(30, 32, 32, 0.12)'
            }}
          >
            <MenuList
              autoFocusItem={openLanguage}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              {languages.map((el, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handlerChangeLanguage(el.lng)}
                  selected={currentLanguage === el.lng}
                  sx={{
                    borderRadius: '8px'
                  }}
                >
                  <Stack direction='row' alignItems='center' justifyContent='flex-start' width='100%' gap='4px'>
                    {el.icon}
                    <Typography variant={currentLanguage === el?.lng ? 'label2' : 'body2'} color={'var(--text-primary)'}>
                      {el.title}
                    </Typography>
                  </Stack>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Badge>
  )
}
export default LanguagePopUp
