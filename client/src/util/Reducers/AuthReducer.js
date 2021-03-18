import {
  SIGN_IN_SUCCESSED,
  SIGN_IN_FAILED,
  SIGN_UP_SUCCESSED,
  SIGN_UP_FAILED,
  AUTHENTICATION_FAIL,
} from '../Actions/AuthActions';

// Initial State
const initialState = {};

const AuthReducer = (state = initialState, action) => {
  const { type, redirectUrl, error } = action;
  switch (type) {
    case SIGN_IN_SUCCESSED:
      return { redirectUrl };

    case SIGN_IN_FAILED:
      return { ...state, signInError: error };

    case SIGN_UP_SUCCESSED:
      return { redirectUrl };

    case SIGN_UP_FAILED:
      return { ...state, signUpError: error };
    case AUTHENTICATION_FAIL:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};

// Export Reducer
export default AuthReducer;
