import { useState } from "react";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon
} from "@mui/icons-material";
import { TableRow, TableCell, IconButton, Typography, Collapse, Box, Button, Divider, Stack, Grid, TextField, Switch, FormControlLabel, FormControl, InputLabel, Select, OutlinedInput, MenuItem } from "@mui/material";
import { useSnack, useVehicle } from "../../hooks";

export default function VehicleInventory({ sx = [], vehicle }) {

  const { update, remove } = useVehicle();
  const { successSnack } = useSnack();

  const [open, setOpen] = useState(false);

  const [updateVehicle, setUpdateVehicle] = useState(vehicle);

  const showEdit = (isEdit = true) => {
    if (isEdit) {
      setUpdateVehicle(vehicle);
    }
    setOpen(isEdit);
  }

  const handleChange = (key, value) => {
    setUpdateVehicle(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            size='small'
            onClick={() => showEdit(!open)}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>{vehicle.title}</TableCell>
        <TableCell component='th' scope='row'>{vehicle.price}</TableCell>
        <TableCell component='th' scope='row'>
          {vehicle.available ?
            <Typography sx={{ color: 'success.main' }}>Available</Typography> :
            <Typography sx={{ color: 'info.main' }}>Not Available</Typography>
          }
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} unmountOnExit>

            <Box
              sx={{
                mt: 4,
                mb: 4,
              }}
            >
              <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Vehicle details</Typography>

              <Divider sx={{ mt: 2, mb: 2 }} />

              <Grid container spacing={2} alignItems='center'>
                <Grid item>
                  <TextField
                    id='title'
                    label='Title'
                    value={updateVehicle.title}
                    onChange={(event) => {
                      handleChange('title', event.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id='engine'
                    label='Engine'
                    value={updateVehicle.engine}
                    onChange={(event) => {
                      handleChange('engine', event.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id='color'
                    label='Color'
                    value={updateVehicle.color}
                    onChange={(event) => {
                      handleChange('color', event.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <FormControl sx={{ width: 195 }}>
                    <InputLabel id='transmission-label'>Transmission</InputLabel>
                    <Select
                      labelId='transmission-label'
                      value={updateVehicle.transmission}
                      input={<OutlinedInput label='Transmission' />}
                      onChange={(event) => {
                        handleChange('transmission', event.target.value)
                      }}
                    >
                      <MenuItem value='Auto'>Auto</MenuItem>
                      <MenuItem value='Manual'>Manual</MenuItem>
                      <MenuItem value='Dual-Cluth'>Dual-Cluth</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField
                    id='gear'
                    label='Gear'
                    type='number'
                    value={updateVehicle.gear}
                    onChange={(event) => {
                      handleChange('gear', event.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id='passenger'
                    label='Passenger'
                    type='number'
                    // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    value={updateVehicle.passenger}
                    onChange={(event) => {
                      handleChange('passenger', event.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id='door'
                    label='Door'
                    type='number'
                    value={updateVehicle.door}
                    onChange={(event) => {
                      handleChange('door', event.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id='mileage'
                    label='Mileage'
                    type='number'
                    value={updateVehicle.mileage}
                    onChange={(event) => {
                      handleChange('mileage', event.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id='price'
                    label='Price'
                    type='number'
                    value={updateVehicle.price}
                    onChange={(event) => {
                      handleChange('price', event.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={updateVehicle.available}
                        label='Available'
                        onChange={(event) => {
                          handleChange('available', event.target.checked);
                        }}
                      />
                    }
                    label='Available'
                  />
                </Grid>
              </Grid>
            </Box>

          </Collapse>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} unmountOnExit>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mt: 2,
                mb: 2,
              }}
            >
              <Button
                variant='contained'
                sx={{ mr: 2 }}
                onClick={() => {
                  update({ ...updateVehicle });
                  showEdit(false)
                  successSnack('Vehicle updated successfully!');
                }}
              >
                Update
              </Button>

              <Button
                variant='outlined'
                onClick={() => { showEdit(false) }}
              >
                Cancel
              </Button>

              <Box sx={{ flexGrow: 1 }} />

              <Button
                color="error"
                onClick={() => {
                  remove(vehicle);
                  successSnack('Vehicle removed successfully!');
                }}
              >
                Delete vehicle
              </Button>
            </Box>

          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
};
