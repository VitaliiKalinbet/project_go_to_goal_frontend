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

export const modalCreateGoalsErrorsReducers = (prevState = null, action) => {
  switch (action.type) {
    case TypeAddGoal.ADD_GOAL_CLEAN_ERROR:
      return null;
    case TypeAddGoal.ADD_GOAL_ERROR:
      return action.payload.error;
    default:
      return prevState;
  }
};
