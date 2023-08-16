import { Reducer } from "redux";
import {
  LoginRequestAction,
  LoginSuccessAction,
  LoginSuccessData,
  LogoutAction,
} from "../actions/user";

interface IinitialState {
  isLoggingIn: boolean;
  data: LoginSuccessData | null;
  loading: boolean;
}
const initialState = {
  isLoggingIn: false,
  data: null,
  loading: false,
};
type LoginActions = LoginSuccessAction | LogoutAction | LoginRequestAction;
const userReducer: Reducer<IinitialState, LoginActions> = (
  prevState = initialState,
  action
) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        data: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};

export default userReducer;
