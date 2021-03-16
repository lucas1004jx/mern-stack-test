import callApi from 'util/apiCaller';

export const SIGN_UP_SUCCESSED = 'SIGN_UP_SUCCESSED';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export const SIGN_IN_SUCCESSED = 'SIGN_IN_SUCCESSED';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';

export const signInSuccessed = (user) => ({
  type: SIGN_IN_SUCCESSED,
  user,
});

export const signInFailed = (error) => ({
  type: SIGN_IN_FAILED,
  error,
});

export const signUpSuccessed = (user) => ({
  type: SIGN_UP_SUCCESSED,
  user,
});

export const signUpFailed = (error) => ({
  type: SIGN_UP_FAILED,
  error,
});

export const userSignUp = ({ email, password, confirmedPassword }) => async (dispatch) => {
  try {
    const user = await callApi('user/signup', 'post', {
      user: {
        email,
        password,
        confirmedPassword,
      },
    });
    console.log('sign up success---', user);
    dispatch(signUpSuccessed(user));
  } catch (error) {
    console.log('sign up error----', error.message);
    dispatch(signUpFailed(error.message));
  }
};

export const userSignIn = ({ email, password }) => async (dispatch) => {
  try {
    const user = await callApi('user/signin', 'post', {
      user: {
        email,
        password,
      },
    });
    console.log('sign in success');
    dispatch(signInSuccessed(user));
  } catch (error) {
    console.log('sign in error', error.message);
    dispatch(signInFailed(error.message));
  }
};
