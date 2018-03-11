import { LOG_USER_IN, LOG_USER_OUT, REGISTER_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isRegisterSuccessful: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER_IN:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOG_USER_OUT:
      return {
        ...state,
        isAuthenticated: false
      };
    case REGISTER_USER:
      return {
        ...state,
        isRegisterSuccessful: true
      };
    default:
      return state;
  }
};
