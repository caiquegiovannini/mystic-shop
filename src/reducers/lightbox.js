import { SELECT_PRODUCT, CLOSE } from '../actionTypes/lightbox';

const lightboxInitialState = {
  lightboxProduct: {},
  lightbox: false,
}

const lightboxReducer = (state = lightboxInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        lightboxProduct: {
          ...payload,
        },
        lightbox: true,
      }

    case CLOSE:
      return {
        ...state,
        lightbox: false,
      }
  
    default:
      return state;
  }
}

export default lightboxReducer;