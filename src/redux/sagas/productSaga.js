import { put, call, takeEvery, delay } from "redux-saga/effects";
import { fetchProducts } from "../../api";
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST_SUCCES,
  GET_PRODUCT_REQUEST_FAIL,
  GET_PRODUCT_REQUESTED,
  GET_TOTAL_PRODUCT_COUNT,
  GET_TOTAL_PRODUCT_COUNT_SUCCES,
  GET_TOTAL_PRODUCT_COUNT_FAIL,
  GET_TOTAL_PRODUCT_COUNT_REQUESTED
} from "../types/productTypes";

function* getProducts({ payload }) {
  try {
    yield put({ type: GET_PRODUCT_REQUEST });
    // yield delay(3000);
    const products = yield call(() => fetchProducts({ query: payload.query }));
    yield put({ type: GET_PRODUCT_REQUEST_SUCCES, payload: products });
  } catch (error) {
    yield put({ type: GET_PRODUCT_REQUEST_FAIL });
  }
}

function* getTotalProductCount() {
  try {
    console.log('girdi');
    yield put({ type: GET_TOTAL_PRODUCT_COUNT });
    const products = yield call(() => fetchProducts({query: {}}));
    console.log('prod',products);
    yield put({ type: GET_TOTAL_PRODUCT_COUNT_SUCCES, payload: products });
  } catch (error) {
    console.log(error);
    yield put({ type: GET_TOTAL_PRODUCT_COUNT_FAIL });
  }
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT_REQUESTED, getProducts);
  yield takeEvery(GET_TOTAL_PRODUCT_COUNT_REQUESTED, getTotalProductCount);
}
