import './style.scss'
import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material'

import { useTranslation } from 'react-i18next'
import { DoctorBody } from '~/components'
import { theme } from '~/themes/Theme'
import { paddingScreen } from '~/utils/constant'

const DoctorPage = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const variant1 = isDesktop ? 'h3' : 'h5'
  const variant2 = isDesktop ? 'h5' : 'label1'

  return (
    <Box className='doctor__wrapper'>
      <Box className='doctor__header'>
        <Container className='doctor__header-content' sx={paddingScreen}>
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
        <DoctorBody inHospitalPage={false} />
      </Stack>
    </Box>
  )
}

export default DoctorPage
