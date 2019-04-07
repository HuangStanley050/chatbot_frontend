import * as actionType from "../actions/actionTypes";

const initialState = {
  //whospeaks: "",
  messages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.START_EVENT_QUERY_SUCCESS:
      return {
        ...state,
        whospeaks: "AI",
        messages: [...state.messages, ...action.msg]
      };
    case actionType.STORE_USER_MESSAGE:
      return {
        ...state,
        whospeaks: "user",
        messages: [...state.messages, action.msg]
      };
    case actionType.START_TEXT_QUERY_SUCCESS:
      return {
        ...state,
        whospeaks: "AI",
        messages: [...state.messages, ...action.msg]
      };
    default:
      return state;
  }
};

export default reducer;
