import callApi from 'util/apiCaller';
import jwtDecode from 'jwt-decode';
import { saveUser } from './UserActions';

export const SIGN_UP_SUCCESSED = 'SIGN_UP_SUCCESSED';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export const SIGN_IN_SUCCESSED = 'SIGN_IN_SUCCESSED';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const AUTHENTICATION_FAIL = 'AUTHENTICATION_FAIL';

const POST_LIST_URL = '/postList';
const SIGNIN_URL = '/login';

export const signInSuccessed = (url) => ({
  type: SIGN_IN_SUCCESSED,
  redirectUrl: url,
});

export const signInFailed = (error) => ({
  type: SIGN_IN_FAILED,
  error,
});

export const signUpSuccessed = (url) => ({
  type: SIGN_UP_SUCCESSED,
  redirectUrl: url,
});

export const signUpFailed = (error) => ({
  type: SIGN_UP_FAILED,
  error,
});

export const userSignUp = ({ email, password, confirmedPassword }) => async (dispatch) => {
  try {
    const user = await callApi('auth/signup', 'post', {
      email,
      password,
      confirmedPassword,
    });
    console.log('sign up success---', user);
    dispatch(signUpSuccessed(SIGNIN_URL));
    dispatch(saveUser(user));
  } catch (error) {
    console.log('sign up error----', error.message);
    dispatch(signUpFailed(error.message));
  }
};

export const userSignIn = ({ email, password }) => async (dispatch) => {
  try {
    const { token } = await callApi('auth/signin', 'post', {
      email,
      password,
    });
    console.log('sign in success token', token);

    localStorage.setItem('jwt', token);
    const user = jwtDecode(token);
    console.log('sign in success user', user);

    dispatch(signInSuccessed(POST_LIST_URL));
    dispatch(saveUser({ email: user.email }));
  } catch (error) {
    console.log('sign in error', error.message);
    dispatch(signInFailed(error.message));
  }
};
