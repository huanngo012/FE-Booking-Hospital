import { useEffect, useRef, useState } from 'react'
import { ActionButton, UpdateUser } from './module'
import { Box, Button, CircularProgress, Divider, Stack, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { AppDispatch } from '~/redux/store'
import useNotification from '~/hooks/useNotification'
import { login, resetAuthStatus, updateUser } from '~/redux/reducer/Auth'
import { images } from '~/assets'

const saveUserData: any = {
  fullName: '',
  avatar: '',
  address: ''
}

const TabProfile = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const { displayNotification } = useNotification()
  const { token, current, loading, successAction, errorAction } = useSelector((state: any) => state.auth)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const avatarRef = useRef<HTMLImageElement | null>(null)
  const [isClickChange, setIsClickChange] = useState(false)
  const [typeBtnAction, setTypeBtnAction] = useState<ActionButton>('default')
  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')

  const handleSetCurrent = () => {
    setFullName(current?.fullName)
    setAddress(current?.address)
    setIsClickChange(false)
  }

  useEffect(() => {
    handleSetCurrent()
  }, [current])

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const img = new Image()
        img.src = e.target?.result as string

        img.onload = () => {
          const canvas = document.createElement('canvas')
          canvas.width = img.width
          canvas.height = img.height

          const ctx = canvas.getContext('2d')

          if (ctx) {
            ctx.drawImage(img, 0, 0)
            avatarRef.current && (avatarRef.current.src = canvas.toDataURL(file.type))
          }
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleOpenFileDialog = () => {
    fileInputRef?.current?.click()
    setTypeBtnAction('change-avatar')
  }
  const handleUpdateUser = (type: UpdateUser) => {
    if (current) {
      switch (type) {
        case 'change-info':
          saveUserData.fullName = fullName
          saveUserData.address = address
          saveUserData.avatar = current.avatar
          dispatch(updateUser(saveUserData))
          break
        case 'delete-avatar':
          saveUserData.fullName = current.fullName
          saveUserData.address = current.address
          saveUserData.avatar = images.defaultAvt
          dispatch(updateUser(saveUserData))
          break
        case 'change-avatar':
          if (avatarRef.current?.src) {
            saveUserData.fullName = current.fullName
            saveUserData.address = current.address
            saveUserData.avatar = avatarRef.current.src
            dispatch(updateUser(saveUserData))
          }
          break
      }
    }
  }
  const handleRenderUpdateAvatarActionButtons = (action: ActionButton) => {
    switch (action) {
      case 'default':
        return (
          <Button
            variant='contained'
            sx={{
              display: 'flex',
              gap: '4px',
              borderRadius: '8px',
              background: 'linear-gradient(83.63deg,#7cdead 33.34%,#9de7c2 113.91%);'
            }}
            onClick={handleOpenFileDialog}
          >
            Thay ảnh đại diện
          </Button>
        )
      case 'delete-avatar':
        return (
          <>
            <Button className='button-cancel' variant='contained' onClick={() => setTypeBtnAction('default')}>
              Hủy
            </Button>
            <Button variant='contained' color='error' onClick={() => handleUpdateUser('delete-avatar')}>
              {loading ? <CircularProgress size={28} sx={{ color: 'var(--white)' }} /> : 'Xác nhận xóa'}
            </Button>
          </>
        )
      case 'change-avatar':
        return (
          <>
            <Button className='button-cancel' variant='contained' onClick={() => setTypeBtnAction('default')}>
              Hủy
            </Button>
            <Button variant='contained' onClick={() => handleUpdateUser('change-avatar')}>
              {loading ? <CircularProgress size={28} sx={{ color: 'var(--white)' }} /> : 'Lưu'}
            </Button>
          </>
        )
    }
  }

  useEffect(() => {
    if (successAction || errorAction) {
      if (successAction) {
        dispatch(
          login({
            isLoggedIn: true,
            token: token,
            current: { ...current, ...saveUserData }
          })
        )
        handleSetCurrent()
        setTypeBtnAction('default')
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
    <Box className='tab-profile'>
      <Box className='avatar-wrapper'>
        <img src={current?.avatar || images.defaultAvt} className='avatar-profile' alt='avatar' ref={avatarRef} />
        <Stack flexDirection='row' gap='8px'>
          {handleRenderUpdateAvatarActionButtons(typeBtnAction)}
        </Stack>
      </Box>
      <Divider />
      <Box className='email-wrapper'>
        <Typography className='label' variant='label1'>
          Email:
        </Typography>
        {isClickChange ? <TextField value={current?.email} disabled={true} /> : <Typography variant='body1'>{current?.email}</Typography>}
      </Box>
      <Divider />
      <Box className='name-wrapper'>
        <Typography className='label' variant='label1'>
          Họ tên:
        </Typography>
        {isClickChange ? <TextField value={fullName} onChange={(e) => setFullName(e.target.value)} /> : <Typography variant='body1'>{fullName}</Typography>}
      </Box>
      <Divider />
      <Box className='address-wrapper'>
        <Typography className='label' variant='label1'>
          {t('user.address')}:
        </Typography>
        {isClickChange ? <TextField value={address} onChange={(e) => setAddress(e.target.value)} /> : <Typography variant='body1'>{address ? address : '- - -'}</Typography>}
      </Box>
      <Divider />
      <Box className='button-wrapper'>
        {isClickChange ? (
          <>
            <Button className='button-cancel' variant='contained' onClick={() => handleSetCurrent()}>
              {loading ? <CircularProgress size={28} sx={{ color: 'var(--white)' }} /> : 'Hủy'}
            </Button>

            <Button variant='contained' onClick={() => handleUpdateUser('change-info')}>
              {loading ? <CircularProgress size={28} sx={{ color: 'var(--white)' }} /> : 'Lưu'}
            </Button>
          </>
        ) : (
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              setIsClickChange((prev) => !prev)
            }}
          >
            Thay đổi
          </Button>
        )}
      </Box>

      <input type='file' hidden ref={fileInputRef} accept='image/*' onChange={handleImageChange} onDrop={() => setTypeBtnAction('default')} />
    </Box>
  )
}

export default TabProfile
