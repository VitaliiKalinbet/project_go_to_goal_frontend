import { addGoalSuccess, addGoalError } from './ModalCreateGoalActions';
import * as goalApi from '../../services/api';

export const addGoal = (goal, token) => dispatch => {
  goalApi
    .addNewGoal(goal, token)
    .then(response => {
      dispatch(addGoalSuccess(response.data.goal));
    })
    .catch(error => {
      dispatch(addGoalError(error));
    });
};

export const stub = () => null;
