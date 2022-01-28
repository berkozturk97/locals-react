import { put, call, takeEvery } from "redux-saga/effects";
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST_SUCCES,
  GET_PRODUCT_REQUEST_FAIL,
  GET_PRODUCT_REQUESTED,
} from "../types/productTypes";

import { fetchProducts } from "../api";

function* getProducts() {
  try {
    yield put({ type: GET_PRODUCT_REQUEST });
    const products = yield call(() => fetchProducts());
    yield put({ type: GET_PRODUCT_REQUEST_SUCCES, products });
  } catch (error) {
    yield put({ type: GET_PRODUCT_REQUEST_FAIL });
  }
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT_REQUESTED, getProducts);
}
