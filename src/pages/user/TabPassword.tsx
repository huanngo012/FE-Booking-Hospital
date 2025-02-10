import { Box, Button, CircularProgress, IconButton, InputAdornment, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import useNotification from '~/hooks/useNotification'
import { resetAuthStatus, updateUser } from '~/redux/reducer/Auth'
import { AppDispatch } from '~/redux/store'
import { theme } from '~/themes/Theme'

const TabPassword = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const { displayNotification } = useNotification()
  const { loading, successAction, errorAction } = useSelector((state: any) => state.auth)
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  const [payload, setPayload] = useState<any>({})
  const [isOldPasswordShowed, setIsOldPasswordShowed] = useState(false)
  const [isNewPasswordShowed, setIsNewPasswordShowed] = useState(false)
  const [isConfirmPasswordShowed, setIsConfirmPasswordShowed] = useState(false)

  const [oldPasswordError, setOldPasswordError] = useState('')
  const [newPasswordError, setNewPasswordError] = useState('')
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('')

  const handlOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const oldPassword = e.target.value
    setPayload((prev: any) => ({ ...prev, oldPassword }))
    if (oldPassword.length >= 8) {
      setOldPasswordError('')
    }
  }

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
    const { oldPassword, newPassword, confirmPassword } = payload
    if (confirmPassword != newPassword || oldPassword.length < 8) {
      if (oldPassword.length < 8) {
        setNewPasswordError('Mật khẩu phải có ít nhất 8 kí tự')
      }
      if (confirmPassword != newPassword) {
        setConfirmNewPasswordError('Mật khẩu không trùng khớp.')
      }
      return
    }
    !loading &&
      dispatch(
        updateUser({
          password: oldPassword,
          newPassword: newPassword
        })
      )
  }, [payload])

  useEffect(() => {
    if (successAction || errorAction) {
      if (successAction) {
        setPayload({})
      }
      displayNotification({
        message: errorAction || successAction,
        severity: successAction ? 'success' : 'error',
        title: successAction ? 'Thành công' : 'Thất bại'
      })
      dispatch(resetAuthStatus())
    }
  }, [successAction, errorAction])
  return (
    <Box className='tab-password'>
      <Box className='title-des'>
        <Typography variant='h4'>{t('user.update password')}</Typography>
        <Typography variant='body2'>{t('user.please enter a new password for your account.')}</Typography>
      </Box>

      <Box className='form'>
        <Box className='form-field'>
          <Box className='form-label'>
            <Typography variant='label2'>{t('user.old password')}</Typography>
            <Typography variant='label2' color='var(--alert)'>
              *
            </Typography>
          </Box>
          <TextField
            value={payload.oldPassword}
            type={`${isOldPasswordShowed ? 'text' : 'password'}`}
            autoComplete='false'
            placeholder='Nhập mật khẩu cũ'
            onChange={handlOldPasswordChange}
            error={Boolean(oldPasswordError)}
            helperText={oldPasswordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton aria-label='toggle password visibility' onClick={() => setIsOldPasswordShowed((show) => !show)} edge='end'>
                    {isOldPasswordShowed ? <IoEyeOutline className='icon' /> : <IoEyeOffOutline className='icon' />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
        <Stack direction={isDesktop ? 'row' : 'column'} gap={3} width='100%'>
          <Box className='form-field'>
            <Box className='form-label'>
              <Typography variant='label2'>Mật khẩu mới</Typography>
              <Typography variant='label2' color='var(--alert)'>
                *
              </Typography>
            </Box>
            <TextField
              value={payload.newPassword}
              type={`${isNewPasswordShowed ? 'text' : 'password'}`}
              autoComplete='false'
              placeholder='Nhập mật khẩu mới'
              onChange={handlNewPasswordChange}
              error={Boolean(newPasswordError)}
              helperText={newPasswordError}
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
              type={`${isConfirmPasswordShowed ? 'text' : 'password'}`}
              autoComplete='false'
              placeholder='Xác nhận mật khẩu mới'
              onChange={handlConfirmNewPasswordChange}
              error={Boolean(confirmNewPasswordError)}
              helperText={confirmNewPasswordError}
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
        </Stack>
      </Box>
      <Button className='button-password' type='submit' variant='contained' onClick={handlerSubmit}>
        <Typography variant='button1'>{loading ? <CircularProgress size={28} sx={{ color: 'var(--white)' }} /> : 'Đổi mật khẩu'}</Typography>
      </Button>
    </Box>
  )
}

export default TabPassword
