export const TypeAddGoal = {
  MODAL_CREATE_GOAL_OPEN: 'MODAL_CREATE_GOAL_OPEN',
  MODAL_CREATE_GOAL_CLOSE: 'MODAL_CREATE_GOAL_CLOSE',
  ADD_GOAL_SUCCESS: 'ADD_GOAL_SUCCESS',
  ADD_GOAL_ERROR: 'ADD_GOAL_ERROR',
  ADD_GOAL_CLEAN_ERROR: 'ADD_GOAL_CLEAN_ERROR',
};

export const openModal = () => ({
  type: TypeAddGoal.MODAL_CREATE_GOAL_OPEN,
});

export const closeModal = () => ({
  type: TypeAddGoal.MODAL_CREATE_GOAL_CLOSE,
});

export const addGoalSuccess = goal => ({
  type: TypeAddGoal.ADD_GOAL_SUCCESS,
  payload: {
    goal,
  },
});

export const addGoalError = error => ({
  type: TypeAddGoal.ADD_GOAL_ERROR,
  payload: {
    error,
  },
});

export const cleanModalGoalErrors = () => ({
  type: TypeAddGoal.ADD_GOAL_CLEAN_ERROR,
});
