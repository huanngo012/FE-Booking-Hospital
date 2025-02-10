import './style.scss'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import Slider, { Settings } from 'react-slick'
import { useTranslation } from 'react-i18next'
import { theme } from '~/themes/Theme'
import { BreadscrumbCustom } from '~/components'

const AboutPage = () => {
  const { t } = useTranslation()
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

  const linksBreadcrums = [
    {
      title: t('home.home'),
      link: '/',
      activeLink: false
    },
    {
      title: t('about-page.about-us'),
      link: '',
      activeLink: true
    }
  ]

  return (
    <Box className='about__wrapper'>
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
        <Stack direction='row' gap='20px' margin='30px 0'>
          <Stack flex='0 0 60%' direction='column' maxWidth={isTablet ? '60%' : '100%'} gap='40px'>
            <Stack gap='20px'>
              <Typography variant='h5' color='#00b5f1'>
                {t('about-page.introduction')}
              </Typography>
              <Typography variant='body3'>{t('about-page.des-1')}</Typography>
            </Stack>
            <Box display={isTablet ? 'none' : 'block'} component='img' src='https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroup%2056260.d46edcda.png&w=1920&q=75' />
            <Stack direction='row' flexWrap='wrap' rowGap='20px'>
              <Box maxWidth={isTablet ? '50%' : '100%'} flex={isTablet ? '0 0 50%' : '0 0 100%'} padding='0 10px'>
                <Box
                  sx={{
                    width: '100%',
                    height: '97px',
                    padding: '8px 18px',
                    borderRadius: '16px',
                    gap: '12px',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant='h1' color='#ffb54a'>
                    1
                  </Typography>
                  <Typography variant='button1' color='#00b5f1' textAlign='center' width='100%'>
                    {t('about-page.register and select date')}
                    <Typography variant='button1' color='var(--black)'>
                      {t('about-page.appointment time')}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box maxWidth={isTablet ? '50%' : '100%'} flex={isTablet ? '0 0 50%' : '0 0 100%'} padding='0 10px'>
                <Box
                  sx={{
                    width: '100%',
                    padding: '8px 18px',
                    borderRadius: '16px',
                    gap: '12px',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant='h1' color='#ffb54a'>
                    2
                  </Typography>
                  <Typography variant='button1' color='#00b5f1' textAlign='center' width='100%'>
                    {t('about-page.non-cash')}
                    <Typography variant='button1' color='var(--black)'>
                      {t('about-page.payment of fees')}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box maxWidth={isTablet ? '50%' : '100%'} flex={isTablet ? '0 0 50%' : '0 0 100%'} padding='0 10px'>
                <Box
                  sx={{
                    width: '100%',
                    height: '97px',
                    padding: '8px 18px',
                    borderRadius: '16px',
                    gap: '12px',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant='h1' color='#ffb54a'>
                    3
                  </Typography>
                  <Typography variant='button1' color='#00b5f1' textAlign='center' width='100%'>
                    {t('about-page.appointment management')}
                    <Typography variant='button1' color='var(--black)'>
                      {t('about-page.and follow-up visits')}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box maxWidth={isTablet ? '50%' : '100%'} flex={isTablet ? '0 0 50%' : '0 0 100%'} padding='0 10px'>
                <Box
                  sx={{
                    width: '100%',
                    height: '97px',
                    padding: '8px 18px',
                    borderRadius: '16px',
                    gap: '12px',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant='h1' color='#ffb54a'>
                    4
                  </Typography>
                  <Typography variant='button1' color='#00b5f1' textAlign='center' width='100%'>
                    {t('about-page.patient information')}
                    <Typography variant='button1' color='var(--black)'>
                      {t('about-page.and data management')}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
          <Stack flex='0 0 40%' direction='column' maxWidth={isTablet ? '40%' : '100%'} display={isTablet ? 'flex' : 'none'}>
            <Box component='img' src='https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroup%2056260.d46edcda.png&w=1920&q=75' />
          </Stack>
        </Stack>
        <Stack
          direction='column'
          alignItems='center'
          gap='20px'
          width='100%'
          height='100%'
          borderRadius='20px'
          maxWidth='1180px'
          margin='auto'
          sx={{
            background: '#fff',
            padding: isTablet ? '32px 125px' : '32px 0'
          }}
        >
          <Typography variant='h5' color='#00b5f1'>
            {t('hospital.prominent hospitals')}
          </Typography>
          <Slider className={'custom-slider-1'} {...settings}>
            <Box padding='10px'>
              <Stack direction='row' flexWrap='wrap' gap='45px' height='unset !important'>
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fctchhcm%2Fweb%2Flogo.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Ftrungvuong%2Fweb%2Flogo.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Ftesting-partner.s3-hcm1-r1.longvan.net%2Fdf02bed3-ee39-46d5-af2c-7d58c5ddf99b-nd1.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fdkkvangiang%2Fweb%2Flogo.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fnhidonghcm%2Fweb%2Flogo.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api-testing.medpro.com.vn%2Fstatic%2Fimages%2Fleloi%2Fweb%2Flogo.png%3Ft%3DSat%2520Nov%252027%25202021%252011%3A42%3A44%2520GMT%2B0700%2520(Indochina%2520Time)&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fbinhthanhhcm%2Fweb%2Flogo.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Ftesting-partner.s3-hcm1-r1.longvan.net%2F0df28078-4876-4490-9aee-d9ed667cbd36-chora.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2F115%2Fweb%2Flogo.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api-testing.medpro.com.vn%2Fstatic%2Fimages%2Fumc%2Fweb%2Flogo.png%3Ft%3DWed%2520Jan%252005%25202022%252010%3A31%3A47%2520GMT%2B0700%2520(Indochina%2520Time)&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fbvdktiengiang%2Fweb%2Flogo.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fbvdktiengiang%2Fweb%2Flogo.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Ftvmbaclieu%2Fweb%2Flogo.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fdkdongnai2%2Fweb%2Flogo.png&w=96&q=75'
                />
              </Stack>
            </Box>
            <Box padding='10px'>
              <Stack direction='row' flexWrap='wrap' gap='45px' height='unset !important'>
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fbvmathcm%2Fweb%2Flogo.png%3Ft%3D11&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fdalieuhcm%2Fapp%2Fimage%2Flogo_circle.png%3Ft%3D123&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api-testing.medpro.com.vn%2Fstatic%2Fimages%2Fbvnthcm%2Fapp%2Fimage%2Flogo_circle.png%3Ft%3DWed%2520Apr%252027%25202022%252014%3A42%3A44%2520GMT%2B0700%2520(Indochina%2520Time)&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fvanhanh%2Fweb%2Flogo.png%3Ft%3D2222222&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fhoanmytd%2Fapp%2Fimage%2Flogo_circle.png%3Ft%3D8888888&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fbvtwct%2Fweb%2Flogo.png%3Ft%3D22222&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2F88db2c0f-c134-428e-9fb6-0cb043214cd9-logo-ps-900.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fleloi%2Fapp%2Fimage%2Flogo_circle.png%3Ft%3D1111111&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fdkanphuoc%2Fweb%2Flogo.png%3Ft%3D222222&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2Fc22cfe55-487e-446a-a585-00993303511c-logo_golden_health_1.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fbvmedicbd%2Fapp%2Fimage%2Flogo_phieu_kham.png%3Ft%3DThu%2520Dec%252022%25202022%252009%3A38%3A53%2520GMT%2B0700%2520(Indochina%2520Time)&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2Fa1a543af-a13a-432f-8a17-e48f918f6abf-logo_phuioing_aoing_1.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2F4b1fee11-9767-4673-a0eb-e72a3090a7cd-logo-anvien_1.png&w=96&q=75'
                />
                <Box
                  width='90px'
                  height='85px !important'
                  component='img'
                  src='https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2F783a646d-a76b-427b-9b77-e768d71ce962-logo-sbb.png&w=96&q=75'
                />
              </Stack>
            </Box>
          </Slider>
        </Stack>
      </Stack>
    </Box>
  )
}

export default AboutPage
