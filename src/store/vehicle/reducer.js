import { VEHICLE } from './types';
import userJson from '../../data/user.json';
import vehicleJson from '../../data/vehicle.json';

const generateVehicles = () => {
  let vehicles = [];
  const users = userJson.filter((user) => user.isAdmin);

  for (const user of users) {
    for (const vehicle of vehicleJson)
      vehicles.push({
        ...vehicle,
        id: `${user.id}-${vehicle.id}`,
        ownerId: user.id
      });
  }
  return vehicles;
}

export const initialState = {
  vehicleItems: generateVehicles()
};

export default function vehicleReducer(state = initialState, action) {
  const vehicleItem = action.payload;
  let vehicleItems = [...state.vehicleItems];

  const index = vehicleItems.findIndex(item => item.id === vehicleItem.id);

  switch (action.type) {
    case VEHICLE.SET:
      if (Array.isArray(vehicleItem)) {
        vehicleItems = [...vehicleItem]
      } else {
        vehicleItems = [vehicleItem]
      }

      return {
        ...state,
        vehicleItems
      }
    case VEHICLE.ADD:
      if (Array.isArray(vehicleItem)) {
        vehicleItems = [...vehicleItems, ...vehicleItem]
      } else {
        vehicleItems = [...vehicleItems, { ...vehicleItem }]
      }

      return {
        ...state,
        vehicleItems,
      }
    case VEHICLE.UPDATE:
      if (index > -1) {
        vehicleItems[index] = { ...vehicleItem };
      }

      return {
        ...state,
        vehicleItems
      }
    case VEHICLE.REMOVE:
      vehicleItems = vehicleItems.filter(item => item.id !== vehicleItem.id);

      return {
        ...state,
        vehicleItems
      }
    case VEHICLE.CLEAR:
      return {
        vehicleItems: [],
      }
    default:
      return state
  }
}