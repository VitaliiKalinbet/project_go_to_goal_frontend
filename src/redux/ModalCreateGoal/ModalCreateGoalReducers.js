import { TypeAddGoal } from './ModalCreateGoalActions';

export const openCloseReducer = (prevState = false, action) => {
  switch (action.type) {
    case TypeAddGoal.MODAL_CREATE_GOAL_OPEN:
      return true;
    case TypeAddGoal.ADD_GOAL_SUCCESS:
    case TypeAddGoal.MODAL_CREATE_GOAL_CLOSE:
      return false;

    default:
      return prevState;
  }
};

export const i = () => null;
