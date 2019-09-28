export const Type = {
  MODAL_DELETE_TASK_OPEN: 'MODAL_DELETE_TASK_OPEN',
  MODAL_DELETE_TASK_CLOSE: 'MODAL_DELETE_TASK_CLOSE',
  DELETE_CARD_SUCCESS: 'DELETE_CARD_SUCCESS',
  DELETE_TASK_LOCALLY: 'DELETE_CARD_LOCALLY',
  DELETE_CARD_ERROR: 'DELETE_CARD_ERROR',
  TASKLIST_GET_START: 'TASKLIST_GET_START',
  TASKLIST_GET_SUCCESS: 'TASKLIST_GET_SUCCESS',
  TASKLIST_GET_ERROR: 'TASKLIST_GET_ERROR',
  TASK_TOGGLE: 'TASK_TOGGLE',

  GOAL_GET_START: 'GOAL_GET_START',
  GOAL_GET_SUCCESS: 'GOAL_GET_SUCCESS',
  GOAL_GET_ERROR: 'GOAL_GET_ERROR',
};

// CARD DELETE
export const removeCardsSuccess = _id => ({
  type: Type.DELETE_CARD_SUCCESS,
  payload: {
    _id,
  },
});

export const removeCardsError = error => ({
  type: Type.DELETE_CARD_ERROR,
  payload: {
    error,
  },
});

// TASK LIST ACTIONS
export const getTaskListStart = () => ({
  type: Type.TASKLIST_GET_START,
});

export const getTaskListSuccess = tasks => ({
  type: Type.TASKLIST_GET_SUCCESS,
  payload: {
    tasks,
  },
});

export const getTaskListError = error => ({
  type: Type.TASKLIST_GET_ERROR,
  payload: {
    error,
  },
});

// GOAL ACTIONS
export const getGoalStart = () => ({
  type: Type.GOAL_GET_START,
});

export const getGoalSuccess = goal => ({
  type: Type.GOAL_GET_SUCCESS,
  payload: {
    goal,
  },
});

export const getGoalError = error => ({
  type: Type.GOAL_GET_ERROR,
  payload: {
    error,
  },
});

export const deleteTaskLocally = _id => ({
  type: Type.DELETE_TASK_LOCALLY,
  payload: {
    _id,
  },
});

export const taskStatusToggle = _id => ({
  type: Type.TASK_TOGGLE,
  payload: {
    _id,
  },
});
