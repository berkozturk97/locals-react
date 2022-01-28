import { put, call, takeEvery, delay } from "redux-saga/effects";
import { fetchProducts } from "../../api";
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST_SUCCES,
  GET_PRODUCT_REQUEST_FAIL,
  GET_PRODUCT_REQUESTED,
} from "../types/productTypes";



function* getProducts() {
  try {
    yield put({ type: GET_PRODUCT_REQUEST });
    yield delay(3000);
    const products = yield call(() => fetchProducts());
    yield put({ type: GET_PRODUCT_REQUEST_SUCCES, payload: products });
  } catch (error) {
    yield put({ type: GET_PRODUCT_REQUEST_FAIL });
  }
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT_REQUESTED, getProducts);
}
