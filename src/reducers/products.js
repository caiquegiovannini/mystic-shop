import { GET_PRODUCTS, SEARCHED_PRODUCTS } from '../actionTypes/products';

const productsInitialState = {
  products: [],
  searchedProducts: [],
  searchInput: '',
}

const productsReducer = (state = productsInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [
          ...state.products,
          ...payload,
        ],
      }

    case SEARCHED_PRODUCTS: {
      const productsFinded = state.products.filter(product => {
        const name = product.name.toLowerCase();
        return name.includes(payload.toLowerCase());
      });

      return {
        ...state,
        searchedProducts: productsFinded,
        searchInput: payload,
      }
    }
  
    default:
      return state;
  }
}

export default productsReducer;