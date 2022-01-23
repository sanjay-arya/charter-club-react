import bookingReducer from './booking';
import userReducer from './user';
import vehicleReducer from './vehicle';
import snackReducer from './snack';

export const initialState = {
  booking: bookingReducer.initialState,
  user: userReducer.initialState,
  vehicle: vehicleReducer.initialState,
  snack: snackReducer.initialState,
};

export default function mainReducer({ booking, user, vehicle, snack }, action) {
  return {
    booking: bookingReducer.reducer(booking, action),
    user: userReducer.reducer(user, action),
    vehicle: vehicleReducer.reducer(vehicle, action),
    snack: snackReducer.reducer(snack, action),
  }
};
