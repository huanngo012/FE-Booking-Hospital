import { Box, Button, CircularProgress, FormControl, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '~/redux/reducer/Auth'
import { AppDispatch } from '~/redux/store'
import { paths } from '~/utils/constant'

const RegisterForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()

  const { loading } = useSelector((state: any) => state.auth)

  const [payload, setPayload] = useState({
    fullName: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [fullNameError, setFullNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fullName = e.target.value
    setPayload((prev) => ({ ...prev, fullName }))
    if (fullName.trim() != '') {
      setFullNameError('')
    }
  }

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

  const handlerSubmit = useCallback(async () => {
    const { fullName, email, password } = payload
    if (!email.match(/^\S+@\S+\.\S+$/) || password.length < 8 || fullName.trim() === '') {
      if (!email.match(/^\S+@\S+\.\S+$/)) {
        setEmailError('Email không đúng định dạng')
      }
      if (password.length < 8) {
        setPasswordError('Mật khẩu phải có ít nhất 8 kí tự')
      }
      if (fullName.trim() === '') {
        setFullNameError('Trường này không được để trống')
      }
      return
    }
    dispatch(register(payload))
  }, [payload])

  return (
    <Box className='register-form'>
      <Box className='title'>
        <Typography variant='h4'>Đăng ký</Typography>
      </Box>
      <Box className='content-wrapper'>
        <FormControl className='content-top'>
          <Box className='form-wrapper'>
            <Box className='form-field'>
              <Box className='form-label'>
                <Typography variant='label2'>Họ tên</Typography>
                <Typography variant='label2' color='var(--alert)'>
                  *
                </Typography>
              </Box>
              <TextField error={Boolean(fullNameError)} helperText={fullNameError} value={payload.fullName} onChange={handleFullNameChange} placeholder='Nhập họ tên của bạn' />
            </Box>

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
          </Box>

          <Button className='button-register' variant='contained' type='submit' onClick={handlerSubmit}>
            {loading ? <CircularProgress size={28} sx={{ color: 'var(--white)' }} /> : 'Đăng ký'}
          </Button>
        </FormControl>

        <Box className='content-bottom'>
          <Typography variant='body2'>{t('user.have-account')}</Typography>
          <Link to={paths.LOGIN}>
            <Typography variant='body2'>Đăng nhập</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default RegisterForm
