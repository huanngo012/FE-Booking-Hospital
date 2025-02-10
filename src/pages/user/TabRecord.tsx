import { Stack, Typography } from '@mui/material'
import { PatientList, PopupPatientCreate } from '~/components'

const TabRecord = () => {
  return (
    <Stack gap='16px'>
      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography variant='label1'>Danh sách hồ sơ bệnh nhân</Typography>
        <PopupPatientCreate />
      </Stack>
      <PatientList />
    </Stack>
  )
}

export default TabRecord
