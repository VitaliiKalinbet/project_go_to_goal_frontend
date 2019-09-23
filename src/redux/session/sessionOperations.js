/* eslint-disable import/prefer-default-export */
import {
  signUpUserStart,
  signUpUserSuccess,
  signUpUserError,
} from './sessionActions';
import * as API from '../../services/api';

export const signupOperation = credentials => dispatch => {
  dispatch(signUpUserStart());

  API.signUpUser(credentials)
    .then(response => {
      dispatch(signUpUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(signUpUserError(error));
    });
};
