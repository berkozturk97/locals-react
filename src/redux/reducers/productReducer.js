import _ from 'lodash';
import * as types from '../types/productTypes';
import { Global } from '../../constants/global';

const initialState = {
  products: [],
  loading: true,
  filter: {
    _limit: 16,
    _page: 1,
    itemType: undefined,
    _order: 'asc',
    _sort: 'price',
  },
  totalProductCount: 0,
  companies: [],
  tags: [],
};

const createCompanyObject = (products) => {
  const grouppedCompanies = _.groupBy(products, Global.MANUFACTURER);
  const companies = Object.keys(grouppedCompanies).map((company) => ({
    companyName: company,
    productCount: grouppedCompanies[company].length,
  }));

  return companies.sort((a, b) => b.companyName - a.companyName);
};

const createTagObject = (productTags) => {
  const grouppedTags = _.countBy(
    productTags
      .map((product) => product.tags)
      .flat(1)
      .sort(),
  );
  const tags = Object.keys(grouppedTags).map((tag) => ({
    tagName: tag,
    tagCount: grouppedTags[tag],
  }));

  return tags.sort((a, b) => b.tagName - a.tagName);
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCT_REQUEST_SUCCES:
      return {
        ...state,
        products: payload.products,
        totalProductCount: payload.totalProductCount,
        loading: false,
      };
    case types.GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCT_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
      };
    case types.GET_BRAND_AND_TAG_SUCCES:
      return {
        ...state,
        companies: createCompanyObject(payload.products),
        tags: createTagObject(payload.products),
      };
    case types.GET_BRAND_AND_TAG_FAIL:
      return {
        ...state,
        loading: false,
      };
    case types.GET_BRAND_AND_TAG:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_FILTER_OPTIONS:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...payload,
        },
      };
    default:
      return state;
  }
};
