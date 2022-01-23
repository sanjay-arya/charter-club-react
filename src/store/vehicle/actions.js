import { VEHICLE } from './types';

export function set(vehicle) {
  return {
    type: VEHICLE.SET,
    payload: vehicle
  };
}

export function add(vehicle) {
  return {
    type: VEHICLE.ADD,
    payload: vehicle
  };
}

export function update(vehicle) {
  return {
    type: VEHICLE.UPDATE,
    payload: vehicle
  };
}

export function remove(vehicle) {
  return {
    type: VEHICLE.REMOVE,
    payload: vehicle
  }
}

export function clear() {
  return {
    type: VEHICLE.CLEAR
  };
}