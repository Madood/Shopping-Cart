// Import ActionTypes from your constants file
import { ActionTypes } from "../constants/action-type";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  };
};

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { ...product, quantity: 1 },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
  };
};

export const decreaseQuantity = (productId) => {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: { id: productId },
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT
  };
};
