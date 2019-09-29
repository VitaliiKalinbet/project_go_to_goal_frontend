import {
  getTaskListStart,
  getTaskListSuccess,
  getTaskListError,
  getGoalStart,
  getGoalSuccess,
  getGoalError,
} from './DashboardActions';

import * as apiServices from '../../services/api';

export const getTasksOperation = token => dispatch => {
  dispatch(getTaskListStart());
  apiServices
    .getTasks('tasks', token)
    .then(response => {
      dispatch(getTaskListSuccess(response.data.tasks));
    })
    .catch(error => {
      dispatch(getTaskListError(error));
    });
};

export const getGoalOperation = token => dispatch => {
  dispatch(getGoalStart());

  apiServices
    .getGoal('goals', token)
    .then(response => {
      dispatch(getGoalSuccess(response.data.goals.find(goal => !goal.isDone)));
    })
    .catch(error => {
      dispatch(getGoalError(error));
    });
};

export const getErrorOperation = () => {};
