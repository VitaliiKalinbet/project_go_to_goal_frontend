import { Type } from './ModalAddTaskActions';

export const openCloseReducer = (prevState = 0, action) => {
  switch (action.type) {
    case Type.MODAL_ADD_TASK_OPEN:
      return true;
    case Type.MODAL_ADD_TASK_CLOSE:
      return false;

    default:
      return prevState;
  }
};

export const w = () => {};
