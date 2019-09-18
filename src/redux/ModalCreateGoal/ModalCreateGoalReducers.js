import { Type } from './ModalCreateGoalActions';

export const openCloseReducer = (prevState = false, action) => {
  switch (action.type) {
    case Type.MODAL_CREATE_GOAL_OPEN:
      return true;
    case Type.MODAL_CREATE_GOAL_CLOSE:
      return false;

    default:
      return prevState;
  }
};

export const w = () => {};
