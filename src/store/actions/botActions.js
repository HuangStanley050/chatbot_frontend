import * as actionType from "./actionTypes";

export const start_text_query = query => {
  return {
    type: actionType.START_TEXT_QUERY,
    query
  };
};

export const text_query_success = msg => {
  console.log(msg);
  return {
    type: actionType.START_TEXT_QUERY_SUCCESS,
    msg
  };
};

export const start_event_query = event => {
  return {
    type: actionType.START_TEXT_QUERY,
    event
  };
};
