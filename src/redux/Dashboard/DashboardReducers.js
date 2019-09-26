// import { combineReducers } from 'redux';
import { Type } from './DashboardActions';
import { TypeAddTask } from '../ModalAddTask/ModalAddTaskActions';
import { TypeAddGoal } from '../ModalCreateGoal/ModalCreateGoalActions';
import { TypeModalCongrats } from '../ModalCongrats/ModalCongratsActions';
import { ActionType } from '../sessionLogin/sessionLoginActions';

export const tasksReducer = (prevState = [], action) => {
  switch (action.type) {
    case Type.DELETE_TASK_LOCALLY: {
      return prevState.filter(el => el._id !== action.payload._id);
    }

    case Type.TASKLIST_GET_SUCCESS:
      return action.payload.tasks === undefined
        ? prevState
        : action.payload.tasks;

    case TypeAddTask.ADD_TASK_SUCCESS:
      return [...prevState, action.payload.task];

    case Type.TASK_TOGGLE:
      return prevState.map(el => {
        if (el._id === action.payload._id) {
          return { ...el, isComplete: !el.isComplete };
        }
        return el;
      });

    case ActionType.LOGOUT:
      return [];

    default:
      return prevState;
  }
};

export const errorsModalDeleteReducer = (prevState = null, action) => {
  switch (action.type) {
    case Type.DELETE_CARD_ERROR:
      return action.payload.error;

    case ActionType.LOGOUT:
      return null;

    default:
      return prevState;
  }
};

export const goalReducer = (prevState = null, action) => {
  switch (action.type) {
    case Type.GOAL_GET_SUCCESS:
    case TypeAddGoal.ADD_GOAL_SUCCESS:
      return action.payload.goal === undefined
        ? prevState
        : action.payload.goal;

    case TypeModalCongrats.MODAL_CONGRATS_SUCCESS:
    case ActionType.LOGOUT:
      return null;

    default:
      return prevState;
  }
};
export const idForDeleteTaskReducer = (prevState = null, action) => {
  switch (action.type) {
    case Type.DELETE_CARD_SUCCESS:
      return action.payload._id;

    case ActionType.LOGOUT:
      return null;

    default:
      return prevState;
  }
};

export const isLoadingReducer = (prevState = false, action) => {
  switch (action.type) {
    case Type.GOAL_GET_START:
    case Type.TASKLIST_GET_START:
      return true;

    case Type.TASKLIST_GET_SUCCESS:
    case Type.TASKLIST_GET_ERROR:
    case Type.GOAL_GET_SUCCESS:
    case Type.GOAL_GET_ERROR:
    case ActionType.LOGOUT:
      return false;

    default:
      return prevState;
  }
};

export const errorsReducer = (prevState = [], action) => {
  switch (action.type) {
    case Type.GOAL_GET_ERROR:
    case Type.TASKLIST_GET_ERROR:
    case TypeAddTask.ADD_TASK_ERROR:
      return [...prevState, action.payload.error];

    case Type.GOAL_GET_START:
    case Type.TASKLIST_GET_START:
    case Type.TASKLIST_GET_SUCCESS:
    case Type.GOAL_GET_SUCCESS:
    case ActionType.LOGOUT:
    case TypeAddTask.CLEAN_MODAL_TASK:
      return [];

    default:
      return prevState;
  }
};
