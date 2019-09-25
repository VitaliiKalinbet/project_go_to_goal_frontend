export const ActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  REFRESH_REQUEST: 'REFRESH_REQUEST',
  REFRESH_SUCCESS: 'REFRESH_SUCCESS',
  REFRESH_ERROR: 'REFRESH_ERROR',
};

// LOGIN

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

// REFRESH

export const refreshRequest = () => ({
  type: ActionType.REFRESH_REQUEST,
});

export const refreshSuccess = response => ({
  type: ActionType.REFRESH_SUCCESS,
  payload: { response },
});

export const refreshError = error => ({
  type: ActionType.REFRESH_ERROR,
  payload: { error },
});

// LOGOUT

export const logout = () => ({
  type: ActionType.LOGOUT,
});
