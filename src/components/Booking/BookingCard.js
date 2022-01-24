import { Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, TableCell, TableRow, Typography } from '@mui/material';
import {
  DoubleArrow as DoubleArrowIcon,
  CarRental as CarRentalIcon
} from '@mui/icons-material';
import { format } from 'date-fns';
import { useBooking } from '../../hooks';

export default function BookingCard({ booking }) {

  const { changeBooking } = useBooking();

  const color = {
    'pending': 'primary',
    'progress': 'secondary',
    'completed': 'success',
    'rejected': 'error',
    'canceled': 'warning',
  }

  const selectOptions = [
    { 'value': 'pending', 'label': 'pending' },
    { 'value': 'progress', 'label': 'approve' },
    { 'value': 'rejected', 'label': 'reject' },
    { 'value': 'completed', 'label': 'complete' },
    { 'value': 'canceled', 'label': 'cancel' }
  ]

  const changeStatus = (event) => {
    changeBooking({ ...booking, status: event.target.value })
  }

  return (
    <TableRow>
      <TableCell>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs={12}>
              <Stack
                direction='row'
                alignItems='center'
                spacing={1}
              >
                <Typography variant='h6' sx={{ fontWeight: 'bold' }} >
                  Sanjay Arya
                </Typography>
                <CarRentalIcon />
                <Typography variant='h6' sx={{ fontWeight: 'medium' }}>
                  {booking.vehicle.title}
                </Typography>
                <Chip
                  label={`$${booking.vehicle.price}`}
                  variant='outlined'
                  size='small'
                  color='info'
                />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack
                direction='row'
                alignItems='center'
                spacing={1}
              >
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                  Location:
                </Typography>
                <Typography variant='body2' sx={{ fontWeight: 'medium' }}>
                  {booking.location[0]}
                </Typography>
                <DoubleArrowIcon />
                <Typography variant='body2' sx={{ fontWeight: 'medium' }}>
                  {booking.location[1]}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack
                direction='row'
                alignItems='center'
                spacing={1}
              >
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                  Date Time:
                </Typography>
                <Typography variant='body2' sx={{ fontWeight: 'medium' }}>
                  {format(new Date(booking.date[0]), 'yyyy/MM/dd hh:mm a')}
                </Typography>
                <DoubleArrowIcon />
                <Typography variant='body2' sx={{ fontWeight: 'medium' }}>
                  {format(new Date(booking.date[1]), 'yyyy/MM/dd hh:mm a')}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          {/* <Chip
            label={booking.status}
            color={color[booking.status]}
            size='small'
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
          /> */}
          <FormControl sx={{ minWidth: 120 }}>
            {/* <InputLabel id='status-select-label'>{booking.status.toUpperCase()}</InputLabel> */}
            <Select
              variant='standard'
              value={booking.status}
              disableUnderline
              labelId='status-select-label'
              // label={booking.status.toUpperCase()}
              onChange={changeStatus}
              renderValue={(selected) => {
                return <Chip
                  label={selected}
                  color={color[selected]}
                  size='small'
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                  }}
                />
              }}
            >
              <Chip
                value={booking.status}
                label={booking.status}
                color={color[booking.status]}
                size='small'
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  display: 'none'
                }}
              />
              {
                selectOptions.filter(({ value }) => value !== booking.status).map(({ value, label }) => (
                  <MenuItem value={value}>
                    <Chip
                      value={value}
                      label={label}
                      color={color[value]}
                      size='small'
                      sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        width: '100%'
                      }}
                    />
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Stack>
      </TableCell>
    </TableRow >
  )
};
