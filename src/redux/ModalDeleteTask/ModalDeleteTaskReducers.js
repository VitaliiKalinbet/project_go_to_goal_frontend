import { Type } from '../Dashboard/DashboardActions';

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

export const deleteTaskReducer = (prevState, action) => {
  switch (action.type) {
    case Type.DELETE_CARD_SUCCESS:
      return prevState;
    case Type.DELETE_CARD_ERROR:
      return prevState;
    default:
      return prevState;
  }
};
