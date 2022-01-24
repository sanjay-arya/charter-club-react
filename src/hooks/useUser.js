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
    signIn,
    signOut,
    updateUser,
    themeToggle
  } = actions;

  // Bind Actions
  const userActions = bindActions({
    signIn,
    signOut,
    updateUser,
    themeToggle
  }, dispatch);

  return { user, ...userActions };
}

export default useUser;