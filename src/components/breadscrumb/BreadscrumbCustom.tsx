import './style.scss'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const breadscrumbCustom = ({ data }: { data: any }) => {
  return (
    <Box role='presentation' paddingTop='20px'>
      <Breadcrumbs aria-label='breadcrumb'>
        {data.map((item: any, index: any) => (
          <Link
            key={index}
            to={item.link}
            style={{
              color: item.activeLink ? 'var(--primary)' : 'var(--text-primary)',
              pointerEvents: item.activeLink && 'none'
            }}
          >
            <Typography variant='label2' color='var(---secondary)'>
              {item.title}
            </Typography>
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  )
}

export default breadscrumbCustom
