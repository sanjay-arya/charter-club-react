import { USER } from './types';
import userJson from '../../data/user.json';

export const initialState = {
  userItems: [...userJson]
};

export default function userReducer(state = initialState, action) {
  const userItem = action.payload;
  let userItems = [...state.userItems];

  const index = userItems.findIndex(item => item.id === userItem.id);

  switch (action.type) {
    case USER.SET:
      if (Array.isArray(userItem)) {
        userItems = [...userItem]
      } else {
        userItems = [userItem]
      }

      return {
        ...state,
        userItems
      }
    case USER.ADD:
      if (Array.isArray(userItem)) {
        userItems = [...userItems, ...userItem]
      } else {
        userItems = [...userItems, { ...userItem }]
      }

      return {
        ...state,
        userItems,
      }
    case USER.UPDATE:
      if (index > -1) {
        userItems[index] = { ...userItem };
      }

      return {
        ...state,
        userItems
      }
    case USER.REMOVE:
      userItems = userItems.filter(item => item.id !== userItem.id);

      return {
        ...state,
        userItems
      }
    case USER.CLEAR:
      return {
        userItems: [],
      }
    default:
      return state
  }

}