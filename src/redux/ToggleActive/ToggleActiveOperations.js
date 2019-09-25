// import { taskStatusToggle } from './ToggleActiveActions';
import { taskStatusToggle } from '../Dashboard/DashboardActions';
import * as api from '../../services/api';

export const toggleTaskOperation = (id, update, token) => dispatch => {
  api.toggleTask(id, update, token).then(() => {
    dispatch(taskStatusToggle(id));
  });
};

export const dummy = () => null;
