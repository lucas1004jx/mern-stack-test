export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';

export const signIn = (user) => ({
  type: SIGN_IN,
  user,
});

export const signUp = (user) => ({
  type: SIGN_UP,
  user,
});
