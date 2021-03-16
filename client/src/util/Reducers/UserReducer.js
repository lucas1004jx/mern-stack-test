import {
  SIGN_IN_SUCCESSED, SIGN_IN_FAILED, SIGN_UP_SUCCESSED, SIGN_UP_FAILED,
} from '../Actions/UserActions';

// Initial State
const initialState = {};

const UserReducer = (state = initialState, action) => {
  const { type, user, error } = action;
  switch (type) {
    case SIGN_IN_SUCCESSED:
      return user;

    case SIGN_IN_FAILED:
      return { ...state, signInerror: error };

    case SIGN_UP_SUCCESSED:
      return user;

    case SIGN_UP_FAILED:
      return { ...state, signUpError: error };

    default:
      return state;
  }
};

// Export Reducer
export default UserReducer;
