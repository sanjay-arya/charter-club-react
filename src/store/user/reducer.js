import { USER } from './types';
import userJson from '../../data/user.json';

export const initialState = {
  userItems: [...userJson],
  currentUser: null
};

export default function userReducer(state = initialState, action) {
  const user = action.payload;

  switch (action.type) {
    case USER.SIGN_IN:
      return {
        ...state,
        currentUser: user
      }
    case USER.SIGN_OUT:
      return {
        ...state,
        currentUser: null
      }
    case USER.UPDATE:
      let userItems = [...state.userItems];

      if (user) {
        const index = userItems.findIndex(item => item.id === user.id);
        if (index > -1) {
          userItems[index] = { ...user }
          return {
            ...state,
            userItems,
            currentUser: user
          }
        }
      }
      return {
        ...state,
        userItems,
      }
    default:
      return state
  }

}