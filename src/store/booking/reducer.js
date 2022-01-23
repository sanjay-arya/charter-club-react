import { BOOKING } from './types';

export const initialState = {
  bookingItems: []
};

export default function bookingReducer(state = initialState, action) {
  const bookingItem = action.payload;
  let bookingItems = [...state.bookingItems];

  const index = bookingItems.findIndex(item => item.id === bookingItem.id);

  switch (action.type) {
    case BOOKING.NEW:
      bookingItem.id = bookingItems.length + 1;
      bookingItem.status = 'pending';

      bookingItems = [...bookingItems, { ...bookingItem }];

      return {
        ...state,
        bookingItems
      }
    case BOOKING.APPROVE:
      if (index > -1) {
        bookingItems[index] = { ...bookingItem, status: 'progress' };
      }

      return {
        ...state,
        bookingItems,
      }
    case BOOKING.REJECT:
      if (index > -1) {
        bookingItems[index] = { ...bookingItem, status: 'reject' };
      }

      return {
        ...state,
        bookingItems
      }
    case BOOKING.CANCEL:
      if (index > -1) {
        bookingItems[index] = { ...bookingItem, status: 'cancel' };
      }

      return {
        ...state,
        bookingItems
      }
    case BOOKING.COMPLETE:
      if (index > -1) {
        bookingItems[index] = { ...bookingItem, status: 'complete' };
      }

      return {
        ...state,
        bookingItems
      }
    default:
      return state
  }
}