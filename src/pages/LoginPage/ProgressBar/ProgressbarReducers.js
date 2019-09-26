import { Type } from './ProgressBarActuins';

export const openCloseReducer = (prevState = false, action) => {
  switch (action.type) {
    case Type.MODAL_DELETE_TASK_OPEN:
      return true;
    case Type.MODAL_DELETE_TASK_CLOSE:
      return false;

    default:
      return prevState;
  }
};

export const stub = () => {};
