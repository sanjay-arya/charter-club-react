import { useGlobalStore } from '../store';
import bindActions from '../store/bindActions';
import bookingReducer from '../store/booking';

const { actions } = bookingReducer;

/**
 * useBooking Custom Hook
 */
const useBooking = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { booking } = state;

  // List of Actions
  const {
    newBooking,
    approveBooking,
    rejectBooking,
    cancelBooking,
    completeBooking,
    changeBooking
  } = actions;

  // Bind Actions
  const bookingActions = bindActions({
    newBooking,
    approveBooking,
    rejectBooking,
    cancelBooking,
    completeBooking,
    changeBooking
  }, dispatch);

  return { booking, ...bookingActions };
}

export default useBooking;