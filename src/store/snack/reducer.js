import { SNACK } from './types';

export const initialState = {
  open: false,
  vertical: 'top',
  horizontal: 'center',
  severity: 'info',
  message: '',
  autoHideDuration: 6000,
};

export default function snackReducer(state = initialState, action) {
  const message = action.payload;

  switch (action.type) {
    case SNACK.SUCCESS:
      return {
        ...state,
        open: true,
        severity: 'success',
        message
      }
    case SNACK.WARNING:
      return {
        ...state,
        open: true,
        severity: 'warning',
        message
      }
    case SNACK.INFO:
      return {
        ...state,
        open: true,
        severity: 'info',
        message
      }
    case SNACK.ERROR:
      return {
        ...state,
        open: true,
        severity: 'error',
        message
      }
    case SNACK.CLOSE:
      return {
        ...state,
        open: false,
      }
    default:
      return state
  }
}