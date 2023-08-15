import { AnyAction, Dispatch } from "redux";

export type LoginRequestData = { nickname: string; password: number };
export const logIn = (data: LoginRequestData) => {
  // async action creator
  return (dispatch: Dispatch<AnyAction>, getState: () => any) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};
export type LoginRequestAction = {
  type: "LOG_IN_REQUEST";
  data: LoginRequestData;
};
const logInRequest = (data: LoginRequestData): LoginRequestAction => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};
export interface LoginSuccessData {
  userId: number;
  nickname: string;
}
export interface LoginSuccessAction {
  type: "LOG_IN_SUCCESS";
  data: LoginSuccessData;
}
const logInSuccess = (data: LoginSuccessData): LoginSuccessAction => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const logInFailure = (error: unknown) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};
export interface LogoutAction {
  type: "LOG_OUT";
}
export const logOut = (): LogoutAction => {
  return {
    // action
    type: "LOG_OUT",
  };
};

export default {
  logIn,
  logOut,
};
