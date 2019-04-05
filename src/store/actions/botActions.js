import * as actionType from "./actionTypes";

export const start_text_query = query => {
  return {
    type: actionType.START_TEXT_QUERY,
    query
  };
};

export const start_event_query = event => {
  return {
    type: actionType.START_TEXT_QUERY,
    event
  };
};
