import {
  Button,
  Grid,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Stack,
  Divider,
  InputLabel,
  OutlinedInput,
  Slider
} from '@mui/material';
import {
  DirectionsCarOutlined as DirectionsCarOutlinedIcon,
  SearchOutlined as SearchOutlinedIcon,
  AttachMoney as AttachMoneyIcon,
  AirlineSeatReclineNormal as AirlineSeatReclineNormalIcon
} from '@mui/icons-material';
import { DateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useState } from 'react';
import { addHours, addDays } from 'date-fns';

export default function BookVehicleSearch({ sx = [], onSearch }) {

  const today = new Date();
  const [isSameLoc, setIsSameLoc] = useState(true);

  const [isError, setIsError] = useState({ startDate: false, endDate: false });

  const [data, setData] = useState({
    fromLocation: '',
    toLocation: '',
    startDate: addHours(today, 1),
    endDate: addDays(today, 7),
    passenger: '1',
    transmission: 'Auto',
    price: [200, 500]
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (onSearch && typeof onSearch === 'function') {
      if (!isError.startDate && !isError.endDate) {
        onSearch({ ...data });
      }
    }
  }

  return (
    <>
      <Box
        sx={[
          { flexGrow: 1 }, ...(Array.isArray(sx) ? sx : [sx])
        ]}
        component='form' onSubmit={handleSubmit}
      >
        <FormControl>
          <Select
            variant='standard'
            value={isSameLoc}
            disableUnderline
            onChange={(event) => { setIsSameLoc(event.target.value) }}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={true}>Same drop-off</MenuItem>
            <MenuItem value={false}>Different drop-off</MenuItem>
          </Select>
        </FormControl>
        <Stack
          direction={{ xs: 'column' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          mt={1}
        >
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            spacing={1}
          >
            <Grid item xs={12} sm={12} md={isSameLoc ? 6 : 3}>
              <TextField
                fullWidth
                required
                variant='outlined'
                label='From'
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DirectionsCarOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                value={data.fromLocation}
                onChange={(event) => {
                  setData(prevData => ({
                    ...prevData,
                    fromLocation: event.target.value,
                    toLocation: isSameLoc ? event.target.value : prevData.toLocation,
                  }))
                }}
              />
            </Grid>

            {!isSameLoc &&
              <Grid item xs={12} sm={12} md>
                <TextField
                  fullWidth
                  required
                  variant='outlined'
                  label='To'
                  size='small'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DirectionsCarOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={data.toLocation}
                  onChange={(event) => {
                    setData(prevData => ({
                      ...prevData,
                      toLocation: event.target.value
                    }))
                  }}
                />
              </Grid>
            }

            <Grid item xs={12} sm={6} md>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Start Date"
                  value={data.startDate}
                  onError={(error) => {
                    setIsError(prev => ({
                      ...prev,
                      startDate: error ? true : false
                    }))
                  }}
                  onChange={(newValue) => {
                    setData(prev => ({
                      ...prev,
                      startDate: newValue
                    }))
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth size='small' />}
                  minDateTime={today}
                  InputAdornmentProps={{ position: 'start' }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6} md>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="End Date"
                  value={data.endDate}
                  onError={(error) => {
                    setIsError(prev => ({
                      ...prev,
                      endDate: error ? true : false
                    }))
                  }}
                  onChange={(newValue) => {
                    setData(prev => ({
                      ...prev,
                      endDate: newValue
                    }))
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth size='small' />}
                  minDateTime={data.startDate}
                  InputAdornmentProps={{ position: 'start' }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          <Divider sx={{ width: '100%' }} />

          <Grid container spacing={1} alignItems='center'>
            <Grid item xs={12} sm={6} md>
              <TextField
                fullWidth
                required
                id='passenger'
                label='Passenger'
                size='small'
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AirlineSeatReclineNormalIcon />
                    </InputAdornment>
                  ),
                }}
                value={data.passenger}
                onChange={(event) => {
                  setData(prevData => ({
                    ...prevData,
                    passenger: event.target.value
                  }))
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md>
              <FormControl fullWidth>
                <InputLabel id='transmission-label'>Transmission</InputLabel>
                <Select
                  labelId='transmission-label'
                  size='small'
                  input={<OutlinedInput label='Transmission' />}
                  value={data.transmission}
                  onChange={(event) => {
                    setData(prevData => ({
                      ...prevData,
                      transmission: event.target.value
                    }))
                  }}
                >
                  <MenuItem value='Auto'>Auto</MenuItem>
                  <MenuItem value='Manual'>Manual</MenuItem>
                  <MenuItem value='Dual-Cluth'>Dual-Cluth</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md>
              <Stack spacing={1} direction='row' alignItems='center'>
                <AttachMoneyIcon />
                <Slider
                  label='Price'
                  valueLabelDisplay='auto'
                  step={100}
                  marks
                  min={100}
                  max={1000}
                  value={data.price}
                  onChange={(event, newValue) => {
                    setData(prevData => ({
                      ...prevData,
                      price: newValue
                    }))
                  }}
                />
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md>
              <Button
                fullWidth
                variant='contained'
                type='submit'
                startIcon={<SearchOutlinedIcon />}
              >
                {/* <SearchOutlinedIcon /> */}
                Search
              </Button>
            </Grid>

          </Grid>
        </Stack>
      </Box>
    </>
  )
};
