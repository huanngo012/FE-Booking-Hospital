import { Box, Button, CircularProgress, FormControl, TextField, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sendMailResetPassword, verifyResetPassword } from '~/redux/reducer/Auth'
import { AppDispatch } from '~/redux/store'

const VerificationForm = ({ payload, setPayload }: { payload: any; setPayload: any }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { loading, loadingSendMail } = useSelector((state: any) => state.auth)
  const [otpError, setOtpError] = useState('')

  useEffect(() => {
    if (!payload?.email) {
      window.history.replaceState({}, document.title, `?state`)
      navigate('/login?state=forgetPassword')
    }
  }, [])

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const otp = e.target.value
    setPayload((prev: any) => ({ ...prev, otp }))
    if (otp.trim() != '') {
      setOtpError('')
    }
  }

  const handlerSubmit = useCallback(async () => {
    const { otp } = payload
    if (otp.trim() === '') {
      setOtpError('Trường này không được để trống')
      return
    }
    if (!loading) {
      dispatch(verifyResetPassword(payload))
    }
  }, [payload])

  const resendOTP = async () => {
    if (!loadingSendMail) {
      dispatch(sendMailResetPassword({ email: payload.email }))
    }
  }

  return (
    <Box className='verification-form'>
      <Box className='title-des'>
        <Typography variant='h4'>Xác thực</Typography>
        <Typography variant='body2'>Nhập mã ký tự mà bạn đã nhận trong email.</Typography>{' '}
      </Box>

      <FormControl className='content-top'>
        <Box className='form-field'>
          <Box className='form-label'>
            <Typography variant='label2'>OTP</Typography>
            <Typography variant='label2' color='var(--alert)'>
              *
            </Typography>
          </Box>
          <TextField error={Boolean(otpError)} helperText={otpError} value={payload.otp} onChange={handleOtpChange} placeholder='Nhập OTP' />
        </Box>
      </FormControl>

      <Button className='verification-button' type='submit' variant='contained' onClick={handlerSubmit}>
        <Typography variant='button1'>{loading ? <CircularProgress size={28} sx={{ color: 'var(--white)' }} /> : 'Tiếp tục'}</Typography>
      </Button>

      <Box className='content-bottom'>
        <Typography variant='body2'>Không nhận được mã?</Typography>
        <Typography
          variant='body2'
          sx={{
            color: 'var(--blue-200)',
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
          onClick={() => resendOTP()}
        >
          Gửi lại OTP
        </Typography>
      </Box>
    </Box>
  )
}

export default VerificationForm
