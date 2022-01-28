import * as types from "../types/productTypes";

const initialState = {
    products: [],
    loading: true,
   
  };

  export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case types.GET_PRODUCT_REQUEST_SUCCES:
        console.log(payload);
        return { ...state, products: payload, loading: false };
      case types.GET_PRODUCT_REQUEST:
        return { ...state, loading: true };
      case types.GET_PRODUCT_REQUEST_FAIL:
        return { ...state, loading: false };
      default:
        return state;
    }
  };