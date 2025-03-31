import { actionType } from "../action/actionType";
const { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, REGISTER_SUCESS } =
  actionType;

const initState = {
  isLoggedIn: false,
  token: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
