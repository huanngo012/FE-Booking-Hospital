import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import './style.scss'
import Slider, { Settings } from 'react-slick'

import { useTranslation } from 'react-i18next'
import { theme } from '~/themes/Theme'
import { BreadscrumbCustom } from '~/components'

const NewsPage = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const slidesToShow = isTablet ? (isDesktop ? 5 : 4) : 3
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  }

  const posts = [
    {
      id: '1',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2Ftopic_aac1bc01270b4df5a1a336b0e7871930_2337d6318f.jpeg&w=1920&q=75',
      category: t('news.medical news'),
      title: 'Review khám da liễu tại khoa da liễu Bệnh viện Đai học Y Dược'
    },
    {
      id: '2',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720174482089_34dd6c0aa2.png&w=1920&q=75',
      category: t('news.medical news'),
      title: 'Chi phí đốt điện tim tại Bệnh viện Chợ Rẫy là bao nhiêu?'
    },
    {
      id: '3',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720173386771_4aff437d2e.png&w=1920&q=75',
      category: t('news.medical news'),
      title: 'Chi phí ghép thận ở Bệnh viện Chợ Rẫy là bao nhiêu?'
    },
    {
      id: '4',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720172042772_79a1fffc7e.png&w=1920&q=75',
      category: t('news.medical news'),
      title: 'Thông tin hữu ích xoay quanh khám dịch vụ bệnh viện Chợ Rẫy'
    },
    {
      id: '5',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720170988041_41795ba99e.png&w=1920&q=75',
      category: t('news.medical news'),
      title: 'Khoa Nội tiêu hóa bệnh viện Chợ Rẫy: Thông tin, cách đặt khám'
    },
    {
      id: '6',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720169113810_1807009941.png&w=1920&q=75',
      category: t('news.medical news'),
      title: 'Khoa U gan bệnh viện Chợ Rẫy: Thông tin và đặt lịch'
    },
    {
      id: '7',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720161547437_a290e8f953.png&w=1920&q=75',
      category: t('news.medical news'),
      title: 'Khám Ung bướu bệnh viện Chợ Rẫy: Thông tin và hướng dẫn khám'
    }
  ]

  const services = [
    {
      id: '1',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1719383471561_f06e63c8cc.png&w=1920&q=75',
      category: t('news.service news'),
      title: 'Review tổng quát Bệnh viện thẩm mỹ Kangnam'
    },
    {
      id: '2',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1712127441463_8ad8764036.png&w=1920&q=75',
      category: t('news.service news'),
      title: 'Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn có trên Medpro'
    },
    {
      id: '3',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1712117427596_474634c999.png&w=1920&q=75',
      category: t('news.service news'),
      title: 'Bệnh viện chuyên khoa Mắt HITEC có mặt trên Medpro '
    },
    {
      id: '4',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1710297482063_a061be24cc.png&w=1920&q=75',
      category: t('news.service news'),
      title: 'Phòng khám Nhi Chất Lượng Cao Kỳ Đồng có mặt trên Medpro'
    },
    {
      id: '5',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2Ftopic_1db23f562aa9410381cefa80fe2941dc_3bc0ed0939.jpg&w=1920&q=75',
      category: t('news.service news'),
      title: 'Lịch nghỉ 30/4 - 1/5/2024 của Bệnh viện Phụ sản TP. Cần Thơ và các Bệnh viện trên hệ thống Medpro'
    },
    {
      id: '6',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1710300714186_ea4e99dd9b.png&w=1920&q=75',
      category: t('news.service news'),
      title: 'Bệnh viện Đa khoa Bảo Sơn đã chính thức có mặt trên Medpro'
    },
    {
      id: '7',
      image: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1712115119393_87c4070e36.png&w=1920&q=75',
      category: t('news.service news'),
      title: 'Phòng khám chuyên khoa cơ xương khớp Mỹ Việt - Sài Gòn có mặt trên Medpro'
    }
  ]

  const linksBreadcrums = [
    {
      title: t('home.home'),
      link: '/',
      activeLink: false
    },
    {
      title: t('news.news'),
      link: '',
      activeLink: true
    }
  ]

  return (
    <Box className='news__wrapper'>
      <Stack
        sx={{
          padding: {
            oversize: '0 160px',
            tablet: '0 64px',
            mobile: '0 32px'
          }
        }}
      >
        {<BreadscrumbCustom data={linksBreadcrums} />}
        <Box className='header-service'>
          <Typography variant='h5' margin='30px 0'>
            {t('news.medical news')}
          </Typography>
        </Box>
        <Stack direction={isTablet ? 'row' : 'column'} gap='30px'>
          <Stack flex='0 0 62.5%' direction='column' maxWidth={isTablet ? '62.5%' : '100%'} gap='40px'>
            <a href='/'>
              <Box className='card__main'>
                <Box className='image'>
                  <span>
                    <img
                      alt='Chi phí nạo VA ở Bệnh viện Nhi Đồng 1: những điều cần lưu ý'
                      sizes='100vw'
                      src='https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2Ftopic_2d675b6cca504e21b43a4ef1acdda424_9375606bde.jpeg&w=1920&q=100'
                      decoding='async'
                      data-nimg='fill'
                    />
                  </span>
                </Box>
                <Typography variant='h5'>Chi phí nạo VA ở Bệnh viện Nhi Đồng 1: những điều cần lưu ý</Typography>
                <Typography variant='body2'>
                  Nạo VA là thủ thuật cần thiết nếu trẻ bị viêm VA nặng, tái phát trên 6 lần mỗi năm. Cùng tìm hiểu về chi phí nạo VA ở Bệnh viện Nhi Đồng 1 trong bài viết.
                </Typography>
                <Stack direction='row' alignItems='center' gap='4px'>
                  <Typography variant='body1' color='#00e0ff'>
                    {t('news.see more')}
                  </Typography>
                  <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 20 20' color='#00e0ff' height='20' width='20' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </Stack>
              </Box>
            </a>

            <a href='/'>
              <Box className='card__main'>
                <Box className='image'>
                  <span>
                    <img
                      alt='Chi phí nạo VA ở Bệnh viện Nhi Đồng 1: những điều cần lưu ý'
                      sizes='100vw'
                      src='https://cms.medpro.com.vn/uploads/topic_df59c0450c054864a8cd28451db03730_61ea94db15.jpeg'
                      decoding='async'
                      data-nimg='fill'
                    />
                  </span>
                </Box>
                <Typography variant='h5'>Tầm soát ung thư Bệnh viện Đại học Y Dược TP. HCM</Typography>
                <Typography variant='body2'>
                  Tầm soát ung thư Bệnh viện Đại học Y Dược TP. HCM: hạng mục khám, chi phí khám, chất lượng dịch vụ, đội ngũ bác sĩ. Tìm hiểu ngay qua bài viết dưới đây.
                </Typography>
                <Stack direction='row' alignItems='center' gap='4px'>
                  <Typography variant='body1' color='#00e0ff'>
                    {t('news.see more')}
                  </Typography>
                  <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 20 20' color='#00e0ff' height='20' width='20' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </Stack>
              </Box>
            </a>
          </Stack>
          <Stack flex='0 0 37.5%' direction='column' maxWidth={isTablet ? '37.5%' : '100%'}>
            <Box className='sidebar-news'>
              <Stack gap='12px'>
                {posts?.map((el, index) => (
                  <Box key={index} className='card-new'>
                    <a href='/'>
                      <Stack direction='row' gap='12px'>
                        <Box className='image'>
                          <span>
                            <img alt='Review khám da liễu tại khoa da liễu Bệnh viện Đai học Y Dược' sizes='100vw' src={el.image} decoding='async' data-nimg='fill' />
                          </span>
                        </Box>
                        <Box>
                          <Stack direction='row' gap='3px' alignItems='center'>
                            <svg width='6' height='6' xmlns='http://www.w3.org/2000/svg' fill='none'>
                              <svg width='6' height='7' viewBox='0 0 6 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <circle id='Ellipse 1880' cx='3' cy='3.23877' r='3' fill='#FFB54A'></circle>
                              </svg>
                            </svg>
                            <Box></Box>
                            <Typography variant='body3' color='#858585'>
                              {el.category}
                            </Typography>
                          </Stack>

                          <Typography variant='label3'>{el.title}</Typography>
                        </Box>
                      </Stack>
                    </a>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>

        <Box className='header-service'>
          <Typography variant='h5' margin='30px 0'>
            {t('news.service news')}
          </Typography>
        </Box>
        <Slider className={isTablet ? 'custom-slider' : 'custom-slider-1'} {...settings}>
          {services?.map((el, index) => (
            <Box key={index} className='card-new' padding='10px'>
              <a href='/'>
                <Stack direction='column' gap='12px'>
                  <Box className='image'>
                    <span>
                      <img alt='Review khám da liễu tại khoa da liễu Bệnh viện Đai học Y Dược' sizes='100vw' src={el.image} decoding='async' data-nimg='fill' />
                    </span>
                  </Box>
                  <Box>
                    <Stack direction='row' gap='3px' alignItems='center'>
                      <svg width='6' height='6' xmlns='http://www.w3.org/2000/svg' fill='none'>
                        <svg width='6' height='7' viewBox='0 0 6 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <circle id='Ellipse 1880' cx='3' cy='3.23877' r='3' fill='#FFB54A'></circle>
                        </svg>
                      </svg>
                      <Box></Box>
                      <Typography variant='body3' color='#858585'>
                        {el.category}
                      </Typography>
                    </Stack>

                    <Typography variant='label3'>{el.title}</Typography>
                  </Box>
                </Stack>
              </a>
            </Box>
          ))}
        </Slider>
      </Stack>
    </Box>
  )
}

export default NewsPage
