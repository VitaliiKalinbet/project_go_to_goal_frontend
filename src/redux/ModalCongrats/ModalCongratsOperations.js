import * as api from '../../services/api';
import * as congratsActions from './ModalCongratsActions';

export const patchGoalOperation = (goalId, token) => dispatch => {
  api
    .patchGoal(goalId, token)
    .then(() => {
      dispatch(congratsActions.modalSuccess());
      dispatch(congratsActions.closeModal());
    })
    .catch(err => {
      dispatch(congratsActions.modalError(err));
      dispatch(congratsActions.closeModal());
    });
};

export const w = () => {};
