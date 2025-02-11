import './style.scss'
import { Box, useMediaQuery } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { LiaArrowLeftSolid } from 'react-icons/lia'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '~/redux/store'
import useNotification from '~/hooks/useNotification'
import { theme } from '~/themes/Theme'
import { paths } from '~/utils/constant'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { resetAuthStatus } from '~/redux/reducer/Auth'
import ForgotPasswordForm from './ForgotPasswordForm'
import VerificationForm from './VerificationForm'
import ResetPasswordForm from './ResetPasswordForm'

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { displayNotification } = useNotification()

  const { successAction, errorAction, tokenResetPassword } = useSelector((state: any) => state.auth)

  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const width = isTablet ? '500px' : '100%'
  const height = isTablet ? '600px' : '100%'
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const [payload, setPayload] = useState<any>({})
  const [param, setParam] = useState<any>(searchParams?.get('state'))
  useEffect(() => {
    setParam(searchParams?.get('state'))
  }, [searchParams])

  const handleRenderStep = () => {
    switch (param) {
      case 'signUp':
        return <RegisterForm />
      case 'forgetPassword':
        return <ForgotPasswordForm payload={payload} setPayload={setPayload} />
      case 'verification':
        return <VerificationForm payload={payload} setPayload={setPayload} />
      case 'resetPassword':
        return <ResetPasswordForm payload={payload} setPayload={setPayload} />
      default:
        return <LoginForm />
    }
  }
  const handleBack = () => {
    if (param === 'signUp' || !param) navigate(paths.HOME)
    else {
      navigate(-1)
    }
  }

  useEffect(() => {
    if (successAction || errorAction) {
      if (successAction) {
        switch (param) {
          case 'forgetPassword':
            navigate('/login?state=verification')
            return
          case 'verification':
            if (tokenResetPassword) {
              setPayload({ token: tokenResetPassword })
              navigate('/login?state=resetPassword')
            }
            return
          case 'resetPassword':
            setPayload({ IsSuccess: true })
            return
          case 'signUp':
            navigate('/login')
            displayNotification({
              message: successAction,
              severity: 'success',
              title: 'Thành công'
            })
            return
          default:
            setPayload({})
            return
        }
      } else {
        displayNotification({
          message: errorAction,
          severity: 'error',
          title: 'Thất bại'
        })
      }
      dispatch(resetAuthStatus())
    }
  }, [successAction, errorAction])

  return (
    <Box className='login-wrapper'>
      <Box className='login-container'>
        <Box className='form' width={width} height={height}>
          <LiaArrowLeftSolid className='icon-back' onClick={() => handleBack()} />
          {handleRenderStep()}
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage
