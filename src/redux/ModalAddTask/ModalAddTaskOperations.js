/* eslint-disable import/prefer-default-export */
import { postSuccessModal, postErrorModal } from './ModalAddTaskActions';
import * as postsAPI from '../../services/api';

export const postSuccess = (task, token) => dispatch => {
  postsAPI
    .addTask(task, token)
    .then(response => {
      dispatch(postSuccessModal(response.data.task));
    })
    .catch(error => {
      dispatch(postErrorModal(error));
    });
};
