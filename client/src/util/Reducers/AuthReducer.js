import {
  SIGN_IN_SUCCESSED,
  SIGN_IN_FAILED,
  SIGN_UP_SUCCESSED,
  SIGN_UP_FAILED,
  LOG_OUT,
} from '../Actions/AuthActions';

// Initial State
const initialState = {};

const AuthReducer = (state = initialState, action) => {
  const { type, error } = action;
  switch (type) {
    case SIGN_IN_SUCCESSED:
      return { ...state, authenticated: true };

    case SIGN_IN_FAILED:
      return { ...state, signInError: error, authenticated: false };

    case SIGN_UP_SUCCESSED:
      return state;

    case SIGN_UP_FAILED:
      return { ...state, signUpError: error };

    case LOG_OUT:
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
