import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";

function* botWorkerSaga(action) {
  yield console.log(action);
}

function* botWatcherSaga() {
  yield takeEvery(actionType.START_TEXT_QUERY, botWorkerSaga);
}

export default botWatcherSaga;
