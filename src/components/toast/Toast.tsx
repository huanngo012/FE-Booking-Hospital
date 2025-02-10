import './style.scss'
import { Alert, AlertTitle, Snackbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import useNotification from '~/hooks/useNotification'

export default function Toast() {
  const { open, message, title, severity } = useSelector((state: any) => state.common)
  const { resetNotification } = useNotification()
  const handleCloseToast = (_: React.SyntheticEvent | Event, reason?: string) => {
    reason !== 'clickaway' && resetNotification()
  }

  const anchorOrigin: any = { vertical: 'top', horizontal: 'right' }
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseToast} anchorOrigin={anchorOrigin}>
      <Alert className='toast-alert' onClose={handleCloseToast} severity={severity}>
        <AlertTitle>
          <Typography variant='h6'>{title}</Typography>
        </AlertTitle>
        <Typography variant='body2' className='alert-message'>
          {message}
        </Typography>
      </Alert>
    </Snackbar>
  )
}
