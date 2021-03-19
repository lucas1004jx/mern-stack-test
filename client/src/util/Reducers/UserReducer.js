import { SAVE_USER } from '../Actions/UserActions';
import { LOG_OUT } from '../Actions/AuthActions';

// Initial State
const initialState = {};

const UserReducer = (state = initialState, action) => {
  const { type, user } = action;
  switch (type) {
    case SAVE_USER:
      return user;
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

// Export Reducer
export default UserReducer;
