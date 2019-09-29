import * as api from '../../services/api';
import * as congratsActions from './ModalCongratsActions';
import { getTasksOperation } from '../Dashboard/DashboardOperations';
import { handleScores } from '../ModalDeleteTask/ModalDeleteTaskActions';

export const patchGoalOperation = (goalId, tasks, token) => async dispatch => {
  const tasksToToggleDone = tasks.filter(
    task => task.inActive && task.isComplete,
  );

  await tasksToToggleDone.forEach(task =>
    api.toggleTask(task._id, { isDone: true, inActive: false }, token),
  );

  await api
    .patchGoal(goalId, { isDone: true }, token)
    .then(res => {
      dispatch(congratsActions.modalSuccess());
      dispatch(handleScores(res.data.user.scores));
      dispatch(congratsActions.closeModal());
    })
    .catch(err => {
      dispatch(congratsActions.modalError(err));
      dispatch(congratsActions.closeModal());
    })
    .finally(() => dispatch(getTasksOperation(token)));
};

export const w = () => {};
