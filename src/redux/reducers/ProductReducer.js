// ProductReducer.js
import { ActionTypes } from '../constants/action-type';

const initialState = {
  products: [],
  cart: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export const cartReducer = (state = initialState.cart, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const existingItem = state.find((item) => item.id === payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { ...payload, quantity: 1 }];
      }

    case ActionTypes.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== payload);

    case ActionTypes.DECREASE_QUANTITY:
      return state.map((item) =>
        item.id === payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
};
