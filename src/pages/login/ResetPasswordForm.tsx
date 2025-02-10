import { Box, Button, CircularProgress, FormControl, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GoCheckCircleFill } from 'react-icons/go'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetPassword } from '~/redux/reducer/Auth'
import { AppDispatch } from '~/redux/store'
import { paths } from '~/utils/constant'

const ResetPasswordForm = ({ payload, setPayload }: { payload: any; setPayload: any }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const { loading } = useSelector((state: any) => state.auth)

  const [isNewPasswordShowed, setIsNewPasswordShowed] = useState(false)
  const [isConfirmPasswordShowed, setIsConfirmPasswordShowed] = useState(false)
  const [newPasswordError, setNewPasswordError] = useState('')
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('')

  const handlNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPayload((prev: any) => ({ ...prev, newPassword }))
    if (newPassword.length >= 8) {
      setNewPasswordError('')
    }
  }
  const handlConfirmNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value

    setPayload((prev: any) => ({ ...prev, confirmPassword }))
    if (confirmPassword != payload.newPassword) {
      setConfirmNewPasswordError('Mật khẩu không trùng khớp.')
    } else {
      setConfirmNewPasswordError('')
    }
  }

  const handlerSubmit = useCallback(async () => {
    const { newPassword, confirmPassword } = payload
    if (confirmPassword != newPassword) {
      setConfirmNewPasswordError('Mật khẩu không trùng khớp.')
      return
    }
    !loading && dispatch(resetPassword({ token: payload?.token, password: newPassword }))
  }, [payload])

  useEffect(() => {
    if (!payload?.token) {
      window.history.replaceState({}, document.title, `?state`)
      navigate('/login?state=forgetPassword')
    }
  }, [])

  return (
    <>
      {!payload?.IsSuccess ? (
        <Box className='reset-password-form'>
          <Box className='title-des'>
            <Typography variant='h4'>{t('user.update password')}</Typography>
            <Typography variant='body2'>{t('user.please enter a new password for your account.')}</Typography>
          </Box>

          <FormControl className='content-top'>
            <Box className='form-field'>
              <Box className='form-label'>
                <Typography variant='label2'>{t('user.new-password')}</Typography>
                <Typography variant='label2' color='var(--alert)'>
                  *
                </Typography>
              </Box>
              <TextField
                value={payload.newPassword}
                onChange={handlNewPasswordChange}
                placeholder='Nhập mật khẩu mới'
                error={Boolean(newPasswordError)}
                helperText={newPasswordError}
                type={isNewPasswordShowed ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton aria-label='toggle password visibility' onClick={() => setIsNewPasswordShowed((show) => !show)} edge='end'>
                        {isNewPasswordShowed ? <IoEyeOutline className='icon' /> : <IoEyeOffOutline className='icon' />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>

            <Box className='form-field'>
              <Box className='form-label'>
                <Typography variant='label2'>Xác nhận mật khẩu mới</Typography>
                <Typography variant='label2' color='var(--alert)'>
                  *
                </Typography>
              </Box>
              <TextField
                value={payload.confirmPassword}
                onChange={handlConfirmNewPasswordChange}
                placeholder='Xác nhận mật khẩu mới'
                error={Boolean(confirmNewPasswordError)}
                helperText={confirmNewPasswordError}
                type={isConfirmPasswordShowed ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton aria-label='toggle password visibility' onClick={() => setIsConfirmPasswordShowed((show) => !show)} edge='end'>
                        {isConfirmPasswordShowed ? <IoEyeOutline className='icon' /> : <IoEyeOffOutline className='icon' />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
          </FormControl>

          <Button type='submit' variant='contained' onClick={handlerSubmit}>
            <Typography variant='button1'>{loading ? <CircularProgress size={28} sx={{ color: 'var(--white)' }} /> : 'Đổi mật khẩu'}</Typography>
          </Button>
        </Box>
      ) : (
        <SuccessForm />
      )}
    </>
  )
}
const SuccessForm = () => {
  const navigate = useNavigate()

  return (
    <Stack direction='column' gap='40px' width='100%' alignItems='center'>
      <Stack flexDirection='column' alignItems='center' gap={1}>
        <GoCheckCircleFill style={{ fill: 'var(--green-500)', height: '64px', width: '64px' }} />
      </Stack>
      <Stack flexDirection='column' alignItems='center' gap={2}>
        <Typography variant='h4'>Mật khẩu đã thay đổi</Typography>
        <Typography variant='body2'>Mật khẩu của bạn đã được thay đổi thành công.</Typography>
      </Stack>
      <Button
        type='submit'
        variant='contained'
        sx={{
          height: '48px',
          padding: '0px 20px',
          width: 'fit-content'
        }}
        onClick={() => navigate(paths.LOGIN)}
      >
        <Typography variant='button1'>Trở lại đăng nhập</Typography>
      </Button>
    </Stack>
  )
}
export default ResetPasswordForm
