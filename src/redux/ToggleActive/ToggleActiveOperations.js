// import { taskStatusToggle } from './ToggleActiveActions';
import { taskStatusToggle } from '../Dashboard/DashboardActions';
import { handleScores } from '../ModalDeleteTask/ModalDeleteTaskActions';
import * as api from '../../services/api';

export const toggleTaskOperation = (id, update, token) => dispatch => {
  api
    .toggleTask(id, update, token)
    .then(res => {
      dispatch(taskStatusToggle(id));

      console.log('res.data.user', res.data.user);

      // dispatch(handleScores(res.data.user.scores));
    })
    .catch(res => console.log('res.error', res.error));
};

export const dummy = () => null;
