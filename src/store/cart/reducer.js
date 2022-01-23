import { CART } from './types';

const IS_SERVER = typeof window === 'undefined';

const SetStorage = (cartItems) => {
  if (!IS_SERVER) {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
  }
}

const GetStorage = (cartItems) => {
  if (!IS_SERVER) {
    try {
      return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    } catch (error) {
      return [];
    }
  }
  return [];
}

const sumItems = cartItems => {
  SetStorage(cartItems);
  let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
  let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  return { itemCount, total }
}

const storage = GetStorage();

export const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false
};

export default function CartReducer(state = initialState, action) {

  const cartItem = action.payload;
  let cartItems = [...state.cartItems];
  const index = cartItems.findIndex(item => item.id === cartItem.id);

  switch (action.type) {
    case CART.ADD:
      // const cartItem = action.payload;
      // const currentItems = state.cartItems;
      // const index = currentItems.findIndex(item => item.id === cartItem.id)

      if (index > -1) {
        const oldItem = cartItems[index];
        cartItems[index] = { ...oldItem, quantity: oldItem.quantity + cartItem.quantity };
        // cartItems = cartItems.map((item, i) => {
        //   return i === index ? { ...item, quantity: item.quantity + cartItem.quantity } : item;
        // })
      } else {
        cartItems = [...cartItems, cartItem]
      }

      // if (!state.cartItems.find(item => item.id === action.payload.id)) {
      //   state.cartItems.push({
      //     ...action.payload
      //   })
      // } else {
      //   state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity += action.payload.quantity ? action.payload.quantity : 1;
      // }

      return {
        ...state,
        ...sumItems(cartItems),
        cartItems
      }
    case CART.REMOVE:
      // const cartItem = action.payload;
      cartItems = cartItems.filter(item => item.id !== cartItem.id);

      return {
        ...state,
        ...sumItems(cartItems),
        cartItems
      }
    case CART.INCREASE:
      // state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
      cartItems[index].quantity++;
      return {
        ...state,
        ...sumItems(cartItems),
        cartItems
      }
    case CART.DECREASE:
      // state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
      cartItems[index].quantity--;
      return {
        ...state,
        ...sumItems(cartItems),
        cartItems
      }

    case CART.CHANGE_QUANTITY:
      // state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
      cartItems[index].quantity = cartItem.quantity;
      return {
        ...state,
        ...sumItems(cartItems),
        cartItems
      }

    case CART.CHECKOUT:
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      }
    case CART.CLEAR:
      return {
        cartItems: [],
        checkout: false,
        ...sumItems([]),
      }
    default:
      return state
  }
}

// export default function CartReducer(initialState) {
//   const { state, dispatch } = useReducer(reducer, initialState);

//   return [state, dispatch];
// };