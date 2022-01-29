import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchProducts } from '../../api';
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST_SUCCES,
  GET_PRODUCT_REQUEST_FAIL,
  GET_PRODUCT_REQUESTED,
  GET_BRAND_AND_TAG,
  GET_BRAND_AND_TAG_SUCCES,
  GET_BRAND_AND_TAG_FAIL,
  GET_BRAND_AND_TAG_REQUESTED,
} from '../types/productTypes';

function* getProducts({ payload }) {
  try {
    yield put({ type: GET_PRODUCT_REQUEST });
    // yield delay(3000);
    const { products, totalProductCount } = yield call(() => fetchProducts(
      { query: payload.query, limitless: false },
    ));
    yield put({
      type: GET_PRODUCT_REQUEST_SUCCES,
      payload: { products, totalProductCount },
    });
  } catch (error) {
    yield put({ type: GET_PRODUCT_REQUEST_FAIL });
  }
}

function* getTotalProductWithoutLimit({ payload }) {
  try {
    const { query, limitless } = payload;
    yield put({ type: GET_BRAND_AND_TAG });
    const { products, totalProductCount } = yield call(() => fetchProducts({ query, limitless }));
    yield put({
      type: GET_BRAND_AND_TAG_SUCCES,
      payload: { products, totalProductCount },
    });
  } catch (error) {
    yield put({ type: GET_BRAND_AND_TAG_FAIL });
  }
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT_REQUESTED, getProducts);
  yield takeEvery(GET_BRAND_AND_TAG_REQUESTED, getTotalProductWithoutLimit);
}
