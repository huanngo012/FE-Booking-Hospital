import './style.scss'
import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { paths } from '~/utils/constant'

const NotFoundPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Box className='not-found-wrapper'>
      <Box
        component='img'
        src='https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png'
        alt='not-found'
        alignSelf='center'
        borderRadius='50px'
      />
      <Button variant='contained' onClick={() => navigate(paths.HOME)} sx={{ width: 'fit-content' }}>
        <Typography variant='button2'> {t('home.home')}</Typography>
      </Button>
    </Box>
  )
}

export default NotFoundPage
