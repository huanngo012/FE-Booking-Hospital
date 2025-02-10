import { Box, Button, CircularProgress, FormControl, TextField, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMailResetPassword } from '~/redux/reducer/Auth'
import { AppDispatch } from '~/redux/store'

const ForgotPasswordForm = ({ payload, setPayload }: { payload: any; setPayload: any }) => {
  const dispatch = useDispatch<AppDispatch>()

  const { loadingSendMail } = useSelector((state: any) => state.auth)

  const [emailError, setEmailError] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setPayload((prev: any) => ({ ...prev, email }))
    if (email.match(/^\S+@\S+\.\S+$/)) {
      setEmailError('')
    }
  }

  const handlerSubmit = useCallback(async () => {
    const { email } = payload

    if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
      setEmailError('Email không đúng định dạng')
      return
    }
    dispatch(sendMailResetPassword({ email }))
  }, [payload])

  return (
    <Box className='forget-password-form'>
      <Box className='title-des'>
        <Typography variant='h4'>Quên mật khẩu</Typography>
        <Typography variant='body2'>Vui lòng nhập email bạn đã đăng ký. Chúng tôi sẽ gửi hướng dẫn để giúp bạn lấy lại mật khẩu.</Typography>
      </Box>

      <FormControl className='content'>
        <Box className='form-field'>
          <Box className='form-label'>
            <Typography variant='label2'>Email</Typography>
            <Typography variant='label2' color='var(--alert)'>
              *
            </Typography>
          </Box>
          <TextField error={Boolean(emailError)} helperText={emailError} value={payload.email} onChange={handleEmailChange} placeholder='Nhập email của bạn' />
        </Box>
      </FormControl>

      <Button
        type='submit'
        variant='contained'
        sx={{
          height: '48px',
          padding: '0px 20px',
          flexShrink: '0'
        }}
        onClick={handlerSubmit}
      >
        <Typography variant='button1'>{loadingSendMail ? <CircularProgress size={28} sx={{ color: 'var(--white)' }} /> : 'Gửi yêu cầu'}</Typography>
      </Button>
    </Box>
  )
}

export default ForgotPasswordForm
