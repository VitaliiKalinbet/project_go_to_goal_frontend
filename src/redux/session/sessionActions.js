export const Type = {
  SIGNUP_USER_START: 'SIGNUP_USER_START',
  SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
  SIGNUP_USER_ERROR: 'SIGNUP_USER_ERROR',
};

export const signUpUserStart = () => ({
  type: Type.SIGNUP_USER_START,
});

export const signUpUserSuccess = response => ({
  type: Type.SIGNUP_USER_SUCCESS,
  payload: {
    response,
  },
});

export const signUpUserError = error => ({
  type: Type.SIGNUP_USER_ERROR,
  payload: {
    error,
  },
});
