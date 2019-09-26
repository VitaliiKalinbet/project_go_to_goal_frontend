import {
  removeCardsSuccess,
  removeCardsError,
  deleteTaskLocally,
} from '../Dashboard/DashboardActions';
import { closeModal, handleScores } from './ModalDeleteTaskActions';
import * as api from '../../services/api';

export const deleteTaskOperation = (id, token) => dispatch => {
  api
    .deleteTask(id, token)
    .then(res => {
      dispatch(removeCardsSuccess(id));
      dispatch(closeModal());
      dispatch(deleteTaskLocally(id));
      dispatch(handleScores(res.data.user.scores));
    })
    .catch(error => {
      dispatch(removeCardsError(error));
    });
};

export const dummy = () => null;
