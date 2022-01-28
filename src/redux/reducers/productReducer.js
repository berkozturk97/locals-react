import * as types from "../types/productTypes";
import _ from "lodash";
const initialState = {
  products: [],
  loading: true,
  filter: {
    _limit: 16,
    _page: 1,
    itemType: 'mug',
    _order: "asc",
    _sort: "price",
  },
  totalProductCount: 0,
  companies: {},
  tags: [],
};

const getUniqueTags = (products) => {
  const tags = products.map(product => product.tags).flat(1).sort();
  return [...new Set(tags)];
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCT_REQUEST_SUCCES:
      return { ...state, products: payload, loading: false, companies: _.groupBy(payload, "manufacturer"),
      tags: getUniqueTags(payload) };
    case types.GET_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.GET_PRODUCT_REQUEST_FAIL:
      return { ...state, loading: false };
    case types.GET_TOTAL_PRODUCT_COUNT_SUCCES:
      getUniqueTags(payload)
      return {
        ...state,
        totalProductCount: payload.length,
        loading: false,
        companies: _.groupBy(payload, "manufacturer"),
        tags: getUniqueTags(payload)
      };
    case types.GET_TOTAL_PRODUCT_COUNT_FAIL:
      return { ...state, loading: false };
    case types.GET_TOTAL_PRODUCT_COUNT:
      return { ...state, loading: true };
    case types.UPDATE_FILTER_OPTIONS:
      return { ...state, filter: { ...state.filter, ...payload }};
    default:
      return state;
  }
};
