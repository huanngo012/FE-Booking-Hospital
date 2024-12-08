import { Box } from '@mui/material'
import './style.scss'

const Loading = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className='spinner-3'></div>
    </Box>
  )
}
export default Loading
