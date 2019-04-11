import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import axios from "axios";
import API from "../../API/apiCalls";
import { text_query_success, event_query_success } from "../actions/botActions";

function* botQueryWorkerSaga(action) {
  //console.log(action);
  try {
    let result = yield axios.post(API.text, action.query);
    let messages = result.data.fulfillmentMessages;

    yield put(text_query_success(messages));
  } catch (e) {
    console.log(e);
  }
}

function* botEventWorkerSaga(action) {
  try {
    let result = yield axios.post(API.event, action.event);
    let message = result.data.fulfillmentMessages;
    yield put(event_query_success(message));
    //console.log(message);
  } catch (e) {
    console.log(e);
  }
}

function* botWatcherSaga() {
  yield takeEvery(actionType.START_TEXT_QUERY, botQueryWorkerSaga);
  yield takeEvery(actionType.START_EVENT_QUERY, botEventWorkerSaga);
}

export default botWatcherSaga;
