import callApi from 'util/apiCaller';
import jwtDecode from 'jwt-decode';
import { saveUser } from './UserActions';

export const SIGN_UP_SUCCESSED = 'SIGN_UP_SUCCESSED';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export const SIGN_IN_SUCCESSED = 'SIGN_IN_SUCCESSED';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const LOG_OUT = 'LOG_OUT';

const POST_LIST_URL = '/postList';
const SIGNIN_URL = '/login';
const HOME = '/';

export const signInSuccessed = () => ({
  type: SIGN_IN_SUCCESSED,
});

export const signInFailed = (error) => ({
  type: SIGN_IN_FAILED,
  error,
});

export const signUpSuccessed = () => ({
  type: SIGN_UP_SUCCESSED,
});

export const signUpFailed = (error) => ({
  type: SIGN_UP_FAILED,
  error,
});

export const logOuSuccess = () => ({
  type: LOG_OUT,
});

export const userSignUp = ({ email, password, confirmedPassword }, history) => async (dispatch) => {
  try {
    await callApi('auth/signup', 'post', {
      email,
      password,
      confirmedPassword,
    });
    dispatch(signUpSuccessed());
    history.push(SIGNIN_URL);
  } catch (error) {
    console.log('sign up error----', error.message);
    dispatch(signUpFailed(error.message));
  }
};

export const userSignIn = ({ email, password }, history) => async (dispatch) => {
  try {
    const { token } = await callApi('auth/signin', 'post', {
      email,
      password,
    });

    localStorage.setItem('jwt', token);
    const user = jwtDecode(token);

    dispatch(signInSuccessed());
    history.push(POST_LIST_URL);
    dispatch(saveUser({ email: user.email }));
  } catch (error) {
    console.log('sign in error', error.message);
    dispatch(signInFailed(error.message));
  }
};

export const userLogOut = () => (dispath) => {
  dispath(logOuSuccess());
  localStorage.removeItem('jwt');
  window.location.href = HOME;
};
