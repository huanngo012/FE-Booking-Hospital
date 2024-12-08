import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { AboutPage, DoctorPage, HomePage, HospitalPage, LoginPage, NewsPage, NotFoundPage, UserPage } from '~/pages'
import { paths } from '~/utils/constant'

const privateRoutes = [
  {
    path: paths.USER,
    component: UserPage,
    layout: true
  }
]

const publicRoutes = [
  { path: paths.LOGIN, component: LoginPage, layout: false },
  {
    path: paths.HOME,
    component: HomePage,
    layout: true
  },

  {
    path: paths.HOSPITALS,
    component: HospitalPage,
    layout: true
  },
  {
    path: paths.DOCTORS,
    component: DoctorPage,
    layout: true
  },
  // {
  //   path: paths.HOSPITAL_DETAIL,
  //   component: HospitalDetailPage,
  //   layout: true,
  // },
  {
    path: paths.NEWS,
    component: NewsPage,
    layout: true
  },
  {
    path: paths.ABOUT,
    component: AboutPage,
    layout: true
  },
  { path: paths.NOT_FOUND, component: NotFoundPage, layout: false }
]

const IsLogin = () => {
  const { current } = useSelector((state: any) => state.auth)
  return current?.role === 4 ? <Outlet /> : <Navigate to={paths.LOGIN} />
}

export { publicRoutes, privateRoutes, IsLogin }
