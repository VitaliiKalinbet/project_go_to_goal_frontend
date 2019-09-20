export const ActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
};

export const loginRequest = () => ({
  type: ActionType.LOGIN_REQUEST,
});

export const loginSuccess = response => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: { response },
});

export const loginError = error => ({
  type: ActionType.LOGIN_ERROR,
  payload: { error },
});

export const logout = () => ({
  type: ActionType.LOGIN_ERROR,
});
