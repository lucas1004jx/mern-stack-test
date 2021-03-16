import { SAVE_USER } from '../Actions/UserActions';

// Initial State
const initialState = {};

const UserReducer = (state = initialState, action) => {
  const { type, user } = action;
  switch (type) {
    case SAVE_USER:
      return user;
    default:
      return state;
  }
};

// Export Reducer
export default UserReducer;
