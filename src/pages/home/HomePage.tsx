import './style.scss'
import { Stack } from '@mui/material'
import IntroSection from './IntroSection'
import { useEffect } from 'react'
import InfoSection from './InfoSection'
import DownloadSection from './DownloadSection'
import HospitalSection from './HospitalSection'
const HomePage = () => {
  useEffect(() => {
    reveal()
  }, [])
  window.addEventListener('scroll', reveal)
  return (
    <Stack flexDirection='column' paddingBottom='30px'>
      <IntroSection />
      <InfoSection />
      <HospitalSection />
      <DownloadSection />
    </Stack>
  )
}

export default HomePage

const reveal = () => {
  var reveals = document.querySelectorAll('.reveal')
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active')
    }
  }
}
