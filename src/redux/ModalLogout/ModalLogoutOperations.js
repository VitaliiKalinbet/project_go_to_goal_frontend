import axios from 'axios';
import { logOutSucsses, logOutError, closeModal } from './ModalLogoutActions';

export const logOut = () => dispatch => {
  axios
    .post('auth/logout')
    .then(response => {
      dispatch(logOutSucsses(response.data));
      dispatch(closeModal());
    })
    .catch(error => {
      dispatch(logOutError(error));
    });
};

export const stub = () => {};
