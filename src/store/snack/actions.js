import { SNACK } from './types';

export function successSnack(message) {
  return {
    type: SNACK.SUCCESS,
    payload: message
  };
}

export function warningSnack(message) {
  return {
    type: SNACK.WARNING,
    payload: message
  };
}

export function infoSnack(message) {
  return {
    type: SNACK.INFO,
    payload: message
  };
}

export function errorSnack(message) {
  return {
    type: SNACK.ERROR,
    payload: message
  }
}

export function closeSnack() {
  return {
    type: SNACK.CLOSE,
    payload: ''
  }
}