import './style.scss'
import { useTranslation } from 'react-i18next'
import { Box, Button, CircularProgress, Dialog, Typography } from '@mui/material'
import { MdErrorOutline } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'

const PopUp = (props: any) => {
  const { open, handleClose, title, message, enableCancelButton, onClick, loading } = props

  const { t } = useTranslation()

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box className='popup-box'>
        <Box className='popup-box-header'>
          <Box className='popup-box-inner'>
            <MdErrorOutline size={48} fill='var(--red-600)' />

            <Box className='popup-box-content'>
              <Typography variant='h6'>{title}</Typography>
              <Typography variant='body2' sx={{ color: 'var(--text-secondary)' }}>
                {message}
              </Typography>
            </Box>
          </Box>

          <IoMdClose className='button-close' size={24} onClick={() => !loading && handleClose()} />
        </Box>
        <Box className='popup-action'>
          {enableCancelButton && (
            <Button disabled={loading} variant='contained' color='tertiary' disableElevation className='popup-cancel-button' onClick={() => !loading && handleClose()}>
              <Typography variant='button1'>{t('popup.cancel')}</Typography>
            </Button>
          )}
          <Button disabled={loading} variant='contained' disableElevation className='popup-confirm-button' onClick={onClick}>
            {loading ? (
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <CircularProgress size={28} sx={{ color: 'white' }} />
              </Box>
            ) : (
              <Typography variant='button1'>{t('popup.delete')}</Typography>
            )}
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default PopUp
