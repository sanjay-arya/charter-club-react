import { USER } from './types';

export function signIn(user) {
  return {
    type: USER.SIGN_IN,
    payload: user
  };
}

export function signOut(l) {
  return {
    type: USER.SIGN_OUT,
    payload: null
  };
}

export function updateUser(user) {
  return {
    type: USER.UPDATE,
    payload: user
  };
}