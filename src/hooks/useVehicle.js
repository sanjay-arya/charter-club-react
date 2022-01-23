import { useGlobalStore } from '../store';
import bindActions from '../store/bindActions';
import vehicleReducer from '../store/vehicle';

const { actions } = vehicleReducer;

/**
 * useVehicle Custom Hook
 */
const useVehicle = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { vehicle } = state;

  // List of Actions
  const {
    set,
    add,
    update,
    remove,
    clear
  } = actions;

  // Bind Actions
  const vehicleActions = bindActions({
    set,
    add,
    update,
    remove,
    clear
  }, dispatch);

  return { vehicle, ...vehicleActions };
}

export default useVehicle;