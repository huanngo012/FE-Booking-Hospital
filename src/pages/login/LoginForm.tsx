import { Box, Button, Checkbox, CircularProgress, FormControl, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import CryptoJS from 'crypto-js'
import useNotification from '~/hooks/useNotification'
import { AppDispatch } from '~/redux/store'
import { apiLogin } from '~/apis'
import { login } from '~/redux/reducer/Auth'

const LoginForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { displayNotification } = useNotification()

  const [payload, setPayload] = useState({
    email: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const rememberMeFlag = localStorage.getItem('rememberMe')
    if (rememberMeFlag === 'true') {
      const enPassword = localStorage.getItem('password') || ''
      const email = localStorage.getItem('email')
      const password = CryptoJS.AES.decrypt(enPassword, 'huanngo').toString(CryptoJS.enc.Utf8)

      if (password && email) {
        setPayload({
          email: email,
          password: password
        })

        setRememberMe(true)
      }
    }
  }, [])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setPayload((prev) => ({ ...prev, email }))
    if (email.match(/^\S+@\S+\.\S+$/)) {
      setEmailError('')
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setPayload((prev) => ({ ...prev, password }))
    if (password.length >= 8) {
      setPasswordError('')
    }
  }

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isRememberMe = e.target.checked

    if (isRememberMe) {
      localStorage.setItem('rememberMe', 'true')
      localStorage.setItem('email', payload.email)

      const enPassword = CryptoJS.AES.encrypt(payload.password, 'huanngo').toString()

      localStorage.setItem('password', enPassword)
    } else {
      localStorage.removeItem('rememberMe')
      localStorage.removeItem('email')
      localStorage.removeItem('password')
    }
    setRememberMe(isRememberMe)
  }

  const handlerSubmit = useCallback(async () => {
    const { email, password } = payload
    if (!email.match(/^\S+@\S+\.\S+$/) || password.length < 8) {
      if (!email.match(/^\S+@\S+\.\S+$/)) {
        setEmailError('Email không đúng định dạng')
      }
      if (password.length < 8) {
        setPasswordError('Mật khẩu phải có ít nhất 8 kí tự')
      }
      return
    }

    setLoading(true)
    const response: any = await apiLogin(payload)
    if (response) {
      setLoading(false)
      if (response?.success) {
        dispatch(
          login({
            isLoggedIn: true,
            token: response.accessToken,
            current: response.data
          })
        )

        navigate('/')
      } else {
        displayNotification({
          message: response?.message,
          severity: 'error',
          title: t('failed')
        })
        return
      }
    }
  }, [payload])

  return (
    <Box className='login-form'>
      <Box className='title'>
        <Typography variant='h4'>Đăng nhập</Typography>
      </Box>
      <Box className='content-wrapper'>
        <FormControl className='content-top'>
          <Box className='form-wrapper'>
            <Box className='form-field'>
              <Box className='form-label'>
                <Typography variant='label2'>Email</Typography>
                <Typography variant='label2' color='var(--alert)'>
                  *
                </Typography>
              </Box>
              <TextField error={Boolean(emailError)} helperText={emailError} value={payload.email} onChange={handleEmailChange} placeholder='Nhập email của bạn' />
            </Box>
            <Box className='form-field'>
              <Box className='form-label'>
                <Typography variant='label2'>Mật khẩu</Typography>
                <Typography variant='label2' color='var(--alert)'>
                  *
                </Typography>
              </Box>
              <TextField
                value={payload.password}
                onChange={handlePasswordChange}
                placeholder='Nhập mật khẩu của bạn'
                error={Boolean(passwordError)}
                helperText={passwordError}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton aria-label='toggle password visibility' onClick={() => setShowPassword((show) => !show)} edge='end'>
                        {showPassword ? <IoEyeOutline className='icon' /> : <IoEyeOffOutline className='icon' />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box className='form-field-forgot-password'>
              <Box className='form-field-checkbox'>
                <Checkbox size='small' checked={rememberMe} onChange={handleRememberMeChange}></Checkbox>
                <Typography variant='body2'>Nhớ mật khẩu</Typography>
              </Box>

              <Link to='/login?state=forgetPassword'>
                <Typography variant='body2' color='var(--blue-300)'>
                  Quên mật khẩu
                </Typography>
              </Link>
            </Box>
          </Box>
          <Button className='button-login' variant='contained' type='submit' onClick={handlerSubmit}>
            {loading ? <CircularProgress size={28} sx={{ color: 'white' }} /> : 'Đăng nhập'}
          </Button>
        </FormControl>

        <Box className='content-bottom'>
          <Typography variant='body2'>{t('user.no-account')}</Typography>
          <Link to='/login?state=signUp'>
            <Typography variant='body2'>Đăng kí</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginForm
