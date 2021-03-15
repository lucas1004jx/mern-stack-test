import callApi from '../apiCaller';
import { SIGN_IN, SIGN_UP } from '../Actions/UserActions';

// Initial State
const initialState = { data: [] };

const UserReducer = async (state = initialState, action) => {
  const { type, user } = action;
  switch (type) {
    case SIGN_IN:
      await callApi('user/signin', 'post', {
        user: {
          email: user?.name,
          password: user?.password,
        },
      });
      return state;

    case SIGN_UP:
      await callApi('user/signup', 'post', {
        user: {
          email: user?.name,
          password: user?.password,
        },
      });
      return state;

    default:
      return state;
  }
};

// Export Reducer
export default UserReducer;
