import * as actionType from "../actions/actionTypes";

const initialState = {
  botMessages: [],
  userMessages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_USER_MESSAGE:
      return {
        ...state,
        userMessages: [...state.userMessages, action.msg]
      };
    default:
      return state;
  }
};

export default reducer;
