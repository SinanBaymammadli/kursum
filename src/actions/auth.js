import axios from "axios";
import { LOG_USER_IN, LOG_USER_OUT } from "./types";

export function logUserIn() {
  return {
    type: LOG_USER_IN
  };
}

export function login(data) {
  return dispatch => {
    return axios.post("api/login", data).then(res => {
      if (res.data.success) {
        const token = res.data.data.token;
        localStorage.setItem("userToken", token);
        dispatch(logUserIn());
      } else {
      }
      console.log(res.data);
    });
  };
}

export function logUserOut() {
  return {
    type: LOG_USER_OUT
  };
}

export function logout(data) {
  return dispatch => {
    localStorage.removeItem("userToken");
    dispatch(logUserOut());
  };
}
