import { GET_PRODUCTS, SEARCHED_PRODUCTS } from '../actionTypes/products';

export const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  }
}

export const searchProducts = input => {
  return {
    type: SEARCHED_PRODUCTS,
    payload: input,
  }
}