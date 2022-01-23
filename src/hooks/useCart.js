import { useGlobalStore } from '../store';
import bindActions from '../store/bindActions';
import cartReducer from '../store/cart';

const { actions } = cartReducer;

/**
 * useCart Custom Hook
 */
const useCart = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { cart } = state;

  // List of Actions
  const {
    add,
    remove,
    increase,
    decrease,
    changeQuantity,
    checkout,
    clear
  } = actions;

  // Bind Actions
  const cartActions = bindActions({
    add,
    remove,
    increase,
    decrease,
    changeQuantity,
    checkout,
    clear
  }, dispatch);

  return { cart, ...cartActions };
}

export default useCart;