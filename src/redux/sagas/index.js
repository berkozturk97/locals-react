import { spawn } from "redux-saga/effects";

// Sagas
import productSaga from "./productSaga";

export default function* rootSaga() {
  yield spawn(productSaga);
}
