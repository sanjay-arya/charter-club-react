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
        bookingItems[index] = { ...bookingItem, status: 'rejected' };
      }

      return {
        ...state,
        bookingItems
      }
    case BOOKING.CANCEL:
      if (index > -1) {
        bookingItems[index] = { ...bookingItem, status: 'canceled' };
      }

      return {
        ...state,
        bookingItems
      }
    case BOOKING.COMPLETE:
      if (index > -1) {
        bookingItems[index] = { ...bookingItem, status: 'completed' };
      }

      return {
        ...state,
        bookingItems
      }
    case BOOKING.BOOKING_CHANGE:
      if (index > -1) {
        bookingItems[index] = { ...bookingItem };
      }

      return {
        ...state,
        bookingItems
      }
    default:
      return state
  }
}