import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import './i18n'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { theme } from '~/themes/Theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Loading, Toast } from './components/index.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale='vi'>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
            <Toast />
          </ThemeProvider>
        </StyledEngineProvider>
      </LocalizationProvider>
    </PersistGate>
  </Provider>
)
