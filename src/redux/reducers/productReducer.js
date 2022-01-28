import * as types from "../types/productTypes";

const initialState = {
  products: [],
  loading: true,
  filter: {
    _limit: 16,
    _page: 1,
    itemType: undefined,
    _order: "asc",
    _sort: "price",
  },
  totalProductCount: 0,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCT_REQUEST_SUCCES:
      return { ...state, products: payload, loading: false };
    case types.GET_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.GET_PRODUCT_REQUEST_FAIL:
      return { ...state, loading: false };
    case types.GET_TOTAL_PRODUCT_COUNT_SUCCES:
      return { ...state, totalProductCount: payload.length, loading: false };
    case types.GET_TOTAL_PRODUCT_COUNT_FAIL:
      return { ...state, loading: false };
    case types.GET_TOTAL_PRODUCT_COUNT:
      return { ...state, loading: true };
    case types.UPDATE_FILTER_OPTIONS:
      // let updatedFilterOptions = state.filter;
      // updatedFilterOptions[payload.option] = payload.value;
      let updatedFilterOptions = {...state.filter, ...payload}
      return { ...state, filter: updatedFilterOptions};
    default:
      return state;
  }
};
