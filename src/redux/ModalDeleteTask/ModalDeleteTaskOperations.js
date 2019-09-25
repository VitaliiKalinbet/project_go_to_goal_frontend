import {
  removeCardsSuccess,
  removeCardsError,
  deleteTaskLocally,
} from '../Dashboard/DashboardActions';
import { closeModal } from './ModalDeleteTaskActions';
import * as api from '../../services/api';

export const deleteTaskOperation = (id, token) => dispatch => {
  api
    .deleteTask(id, token)
    .then(() => {
      dispatch(removeCardsSuccess(id));
      dispatch(closeModal());
      dispatch(deleteTaskLocally(id));
    })
    .catch(error => {
      dispatch(removeCardsError(error));
    });
};

export const dummy = () => null;
