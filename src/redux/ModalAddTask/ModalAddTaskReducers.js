import { TypeAddTask } from './ModalAddTaskActions';

export const openCloseReducer = (prevState = false, action) => {
  switch (action.type) {
    case TypeAddTask.MODAL_ADD_TASK_OPEN:
      return true;

    case TypeAddTask.ADD_TASK_SUCCESS:
    case TypeAddTask.MODAL_ADD_TASK_CLOSE:
      return false;

    default:
      return prevState;
  }
};

export const w = () => {};
