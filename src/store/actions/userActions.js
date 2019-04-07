import * as actionType from "./actionTypes";

export const record_user_msg = msg => {
  return {
    type: actionType.STORE_USER_MESSAGE,
    msg
  };
};
