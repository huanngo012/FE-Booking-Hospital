import './style.scss'
import { Container, Typography, Stack } from '@mui/material'
import { EmptyPageProps } from '../module'
import { images } from '~/assets'

export default function EmptyPage({ title, message, style }: EmptyPageProps) {
  return (
    <Container className='empty-page_container'>
      <img style={style} src={images.emptyIcon} alt='Empty' />
      <Stack
        sx={{
          marginTop: '24px'
        }}
      >
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='body2' sx={{ marginTop: '8px' }}>
          {message}
        </Typography>
      </Stack>
    </Container>
  )
}
