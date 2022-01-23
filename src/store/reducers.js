import cartReducer from './cart';
import userReducer from './user';
import vehicleReducer from './vehicle';
import snackReducer from './snack';

export const initialState = {
  cart: cartReducer.initialState,
  user: userReducer.initialState,
  vehicle: vehicleReducer.initialState,
  snack: snackReducer.initialState,
};

export default function mainReducer({ cart, user, vehicle, snack }, action) {
  return {
    cart: cartReducer.reducer(cart, action),
    user: userReducer.reducer(user, action),
    vehicle: vehicleReducer.reducer(vehicle, action),
    snack: snackReducer.reducer(snack, action),
  }
};
