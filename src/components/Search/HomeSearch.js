import {
  Button,
  Grid,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Stack
} from '@mui/material';
import {
  DirectionsCarOutlined as DirectionsCarOutlinedIcon,
  SearchOutlined as SearchOutlinedIcon
} from '@mui/icons-material';
import { DateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useState } from 'react';
import { addDays } from 'date-fns';

export default function HomeSearch({ sx = [], onSearch }) {

  const today = new Date();
  const [isSameLoc, setIsSameLoc] = useState(true);

  const [isError, setIsError] = useState({ startDate: false, endDate: false });

  const [data, setData] = useState({
    fromLocation: '',
    toLocation: '',
    startDate: today,
    endDate: addDays(today, 7),
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (onSearch && typeof onSearch === 'function') {
      // if (!isError.startDate && !isError.endDate) {
      //   onSearch(data);
      // }
      onSearch(data);
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
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
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

            {/* <Grid item xs={12} sm={12} md={1}>
              <Button
                fullWidth
                variant='contained'
                type='submit'
              >
                <SearchOutlinedIcon />
              </Button>
            </Grid> */}

          </Grid>
          <Button
            variant='contained'
            type='submit'
            sx={{ width: { xs: '100%', md: 'auto' } }}
            startIcon={<SearchOutlinedIcon />}
          >
            {/* <SearchOutlinedIcon /> */}
            Search
          </Button>
        </Stack>
      </Box>
    </>
  )
};
