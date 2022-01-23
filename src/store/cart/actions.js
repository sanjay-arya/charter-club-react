import { CART } from './types';

export function add(product) {
  return {
    type: CART.ADD,
    payload: product
  };
}

export function remove(product) {
  return {
    type: CART.REMOVE,
    payload: product
  }
}

export function increase(product) {
  return {
    type: CART.INCREASE,
    payload: product
  }
}

export function decrease(product) {
  return {
    type: CART.DECREASE,
    payload: product
  }
}

export function changeQuantity(product) {
  return {
    type: CART.CHANGE_QUANTITY,
    payload: product
  }
}

export function checkout() {
  return {
    type: CART.CHECKOUT
  };
}

export function clear() {
  return {
    type: CART.COMPLETE
  };
}