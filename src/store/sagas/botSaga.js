import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import axios from "axios";
import API from "../../API/apiCalls";

function* botWorkerSaga(action) {
  try {
    let result = yield axios.post(API.text, action.query);
    console.log(result.data.fulfillmentMessages);
  } catch (e) {
    console.log(e);
  }
}

function* botWatcherSaga() {
  yield takeEvery(actionType.START_TEXT_QUERY, botWorkerSaga);
}

export default botWatcherSaga;
