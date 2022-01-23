import { useGlobalStore } from '../store';
import bindActions from '../store/bindActions';
import userReducer from '../store/user';

const { actions } = userReducer;

/**
 * useUser Custom Hook
 */
const useUser = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { user } = state;

  // List of Actions
  const {
    set,
    add,
    update,
    remove,
    clear
  } = actions;

  // Bind Actions
  const userActions = bindActions({
    set,
    add,
    update,
    remove,
    clear
  }, dispatch);

  return { user, ...userActions };
}

export default useUser;