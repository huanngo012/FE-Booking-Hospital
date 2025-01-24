import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './i18n'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { theme } from '~/themes/Theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>
)
