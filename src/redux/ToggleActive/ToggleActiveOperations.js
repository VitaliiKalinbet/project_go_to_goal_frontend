// import { taskStatusToggle } from './ToggleActiveActions';
import {
  getTaskListStart,
  getTaskListSuccess,
  taskStatusToggle,
} from '../Dashboard/DashboardActions';
import { handleScores } from '../ModalDeleteTask/ModalDeleteTaskActions';
import { getTasksOperation } from '../Dashboard/DashboardOperations';
import * as api from '../../services/api';

export const toggleTaskOperation = (id, update, token) => async dispatch => {
  dispatch(getTaskListStart());
  await api
    .toggleTask(id, update, token)
    .then(res => {
      dispatch(taskStatusToggle(id));

      console.log('res', res);

      dispatch(handleScores(res.data.user.scores));
    })
    .catch(error => console.log('error', error))
    .finally(() => {
      dispatch(getTasksOperation(token));
      dispatch(getTaskListSuccess());
    });
};

export const dummy = () => null;
