import { Box, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import moment from 'moment'

const SelectDate = ({ value, setValue, label, highlightedDays }: { value: any; setValue: any; label: string; highlightedDays?: Array<Date> }) => {
  const shouldDisableDate = (date: any) => {
    if (highlightedDays) {
      const selectedMoment = moment(date)
      const highlightedDates = highlightedDays.map((day) => moment(day, 'YYYY/MM/DD'))
      return !highlightedDates.some((highlightedDate) => selectedMoment.isSame(highlightedDate, 'day'))
    }
    return false
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {label && <Typography variant='body2'>{label}</Typography>}
      <DatePicker
        defaultValue={moment(value)}
        format='DD/MM/YYYY'
        disableHighlightToday
        onChange={(e: any) => setValue(new Date(e).getTime())}
        minDate={moment().add(1, 'day')}
        // slots={{ day: CustomDay }}
        sx={{
          '.MuiOutlinedInput-root.Mui-error fieldset': {
            borderColor: 'var(--border-color)'
          }
        }}
        shouldDisableDate={shouldDisableDate}
        slotProps={{
          day: {
            sx: {
              '&.MuiPickersDay-root.Mui-selected': {
                backgroundColor: 'var(--primary)'
              }
            }
          },
          desktopPaper: {
            sx: {
              '.MuiPickersYear-yearButton.Mui-selected': {
                backgroundColor: 'var(--primary)'
              }
            }
          }
        }}
      />
    </Box>
  )
}

export default SelectDate
