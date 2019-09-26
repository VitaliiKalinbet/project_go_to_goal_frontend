import { TypeAddTask } from './ModalAddTaskActions';

export const openCloseReducer = (prevState = false, action) => {
  switch (action.type) {
    case TypeAddTask.MODAL_ADD_TASK_OPEN:
      return true;

    case TypeAddTask.ADD_TASK_SUCCESS:
    case TypeAddTask.MODAL_ADD_TASK_CLOSE:
    case TypeAddTask.CLEAN_MODAL_TASK:
      return false;

    default:
      return prevState;
  }
};

export const modalAddTaskErrorsReducer = (prevState = [], action) => {
  switch (action.type) {
    case TypeAddTask.CLEAN_MODAL_TASK:
      return [];

    case TypeAddTask.ADD_TASK_ERROR:
      return action.payload.error;

    default:
      return prevState;
  }
};
