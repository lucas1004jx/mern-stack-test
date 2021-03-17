import {
  SIGN_IN_SUCCESSED, SIGN_IN_FAILED, SIGN_UP_SUCCESSED, SIGN_UP_FAILED,
} from '../Actions/UiActions';

// Initial State
const initialState = {};

const UiReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

// Export Reducer
export default UiReducer;
