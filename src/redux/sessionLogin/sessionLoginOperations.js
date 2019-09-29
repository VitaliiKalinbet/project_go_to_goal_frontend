import {
  loginRequest,
  loginSuccess,
  loginError,
  refreshRequest,
  refreshSuccess,
  refreshError,
} from './sessionLoginActions';
import { setLogin, setTokenLoginPage } from '../../services/api';
import { getToken } from './sessionLoginSelectors';

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  setLogin(credentials)
    .then(response => {
      dispatch(loginSuccess(response));
    })
    .catch(error => {
      dispatch(loginError(error));
    });
};

export const refresh = () => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) return;

  dispatch(refreshRequest());

  setTokenLoginPage(token)
    .then(response => {
      dispatch(refreshSuccess(response));
    })
    .catch(error => {
      dispatch(refreshError(error));
    });
};
