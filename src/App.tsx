import { Fragment, Suspense } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout, Loading } from '~/components'
import { IsLogin, privateRoutes, publicRoutes } from './routes/Routes'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let LayoutTag

            if (route.layout) {
              LayoutTag = Layout
            } else {
              LayoutTag = Fragment
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <LayoutTag>
                    <Page />
                  </LayoutTag>
                }
              />
            )
          })}
          <Route element={<IsLogin />}>
            {privateRoutes.map((route, index) => {
              const Page = route.component
              let LayoutTag

              if (route.layout) {
                LayoutTag = Layout
              } else {
                LayoutTag = Fragment
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <LayoutTag>
                      <Page />
                    </LayoutTag>
                  }
                />
              )
            })}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
