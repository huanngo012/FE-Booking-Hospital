import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import CommonReducer from '../reducer/Common'
import ClinicReducer from '../reducer/Clinic'
import DoctorReducer from '../reducer/Doctor'
import PatientReducer from '../reducer/Patient'
import BookingReducer from '../reducer/Booking'

export const store = configureStore({
  reducer: {
    common: CommonReducer,
    clinic: ClinicReducer,
    doctor: DoctorReducer,
    patient: PatientReducer,
    booking: BookingReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
