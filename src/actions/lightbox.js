import { SELECT_PRODUCT, CLOSE } from '../actionTypes/lightbox';

export const selectProduct = product => {
  return {
    type: SELECT_PRODUCT,
    payload: product,
  }
}

export const closeLightbox = () => {
  return {
    type: CLOSE,
  }
}