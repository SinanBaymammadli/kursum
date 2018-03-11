import { LOG_USER_IN, LOG_USER_OUT } from "../actions/types";

const initialState = {
  isAuthenticated: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER_IN:
      return {
        isAuthenticated: true
      };
    case LOG_USER_OUT:
      return {
        isAuthenticated: false
      };
    default:
      return state;
  }
};
