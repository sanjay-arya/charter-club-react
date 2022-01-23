import { BOOKING } from './types';

export function newBooking(booking) {
  return {
    type: BOOKING.NEW,
    payload: booking
  };
}

export function approveBooking(booking) {
  return {
    type: BOOKING.APPROVE,
    payload: booking
  }
}

export function rejectBooking(booking) {
  return {
    type: BOOKING.REJECT,
    payload: booking
  }
}

export function cancelBooking(booking) {
  return {
    type: BOOKING.CANCEL,
    payload: booking
  }
}

export function completeBooking(booking) {
  return {
    type: BOOKING.COMPLETE,
    payload: booking
  }
}
