import callApi from 'util/apiCaller';
import { FETCHING_START, FETCHING_END } from './UiActions';

export const SAVE_USER = 'SAVE_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch({ type: FETCHING_START });
    const user = await callApi('user/profile');
    dispatch(saveUser(user));
    dispatch({ type: FETCHING_END });
  } catch (error) {
    console.log('fetchUser error', error);
    dispatch(clearUser());
    dispatch({ type: FETCHING_END });
  }
};
