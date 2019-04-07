import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import axios from "axios";
import API from "../../API/apiCalls";
import { text_query_success } from "../actions/botActions";

function* botWorkerSaga(action) {
  try {
    let result = yield axios.post(API.text, action.query);
    let messages = result.data.fulfillmentMessages;
    yield put(text_query_success(messages));
  } catch (e) {
    console.log(e);
  }
}

function* botWatcherSaga() {
  yield takeEvery(actionType.START_TEXT_QUERY, botWorkerSaga);
  //yield takeEvery(actionType.START_EVENT_QUERY);
}

export default botWatcherSaga;
