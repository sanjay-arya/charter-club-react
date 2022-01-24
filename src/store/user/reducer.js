import { USER } from './types';
import userJson from '../../data/user.json';

export const initialState = {
  userItems: [...userJson],
  currentUser: null
};

export default function userReducer(state = initialState, action) {
  const currentUser = action.payload;

  switch (action.type) {
    case USER.SIGN_IN:
      return {
        ...state,
        currentUser
      }
    case USER.SIGN_OUT:
      return {
        ...state,
        currentUser: null
      }
    default:
      return state
  }

}