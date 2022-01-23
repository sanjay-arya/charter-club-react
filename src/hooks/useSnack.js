import { useGlobalStore } from '../store';
import bindActions from '../store/bindActions';
import snackReducer from '../store/snack';

const { actions } = snackReducer;

/**
 * useSnack Custom Hook
 */
const useSnack = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { snack } = state;

  // List of Actions
  const {
    successSnack,
    warningSnack,
    infoSnack,
    errorSnack,
    closeSnack
  } = actions;

  // Bind Actions
  const snackActions = bindActions({
    successSnack,
    warningSnack,
    infoSnack,
    errorSnack,
    closeSnack
  }, dispatch);

  return { snack, ...snackActions };
}

export default useSnack;