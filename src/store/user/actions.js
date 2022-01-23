import { USER } from './types';

export function set(user) {
  return {
    type: USER.SET,
    payload: user
  };
}

export function add(user) {
  return {
    type: USER.ADD,
    payload: user
  };
}

export function update(user) {
  return {
    type: USER.UPDATE,
    payload: user
  };
}

export function remove(user) {
  return {
    type: USER.REMOVE,
    payload: user
  }
}

export function clear() {
  return {
    type: USER.CLEAR
  };
}