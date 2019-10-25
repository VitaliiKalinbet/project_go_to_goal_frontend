import { combineReducers } from 'redux';
import { ActionType } from './sessionLoginActions';
import { Type } from '../session/sessionActions';
import * as TypeDeleteActions from '../ModalDeleteTask/ModalDeleteTaskActions';

const returnValue = {
  TRUE: true,
  FALSE: false,
};

const user = (prevState = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case Type.SIGNUP_USER_SUCCESS:
    case ActionType.REFRESH_SUCCESS:
      return payload.response.data.user.userData;

    case Type.SIGNUP_USER_ERROR:
    case ActionType.LOGOUT:
      return null;

    //-----------------------------------
    case TypeDeleteActions.Type.DELETE_SCORES:
      return {
        ...prevState,
        scores: payload.scores,
      };

    //-----------------------------------

    default:
      return prevState;
  }
};

const authenticated = (prevState = false, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case ActionType.REFRESH_SUCCESS:
      return true;

    case Type.SIGNUP_USER_SUCCESS:
      return payload.response.data.status === 'success'
        ? returnValue.TRUE
        : returnValue.FALSE;

    case Type.SIGNUP_USER_ERROR:
    case ActionType.LOGOUT:
      return false;

    default:
      return prevState;
  }
};

const token = (prevState = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case Type.SIGNUP_USER_SUCCESS:
      return payload.response.data.user.token;

    case Type.SIGNUP_USER_ERROR:
    case ActionType.LOGOUT:
      return null;

    default:
      return prevState;
  }
};

const errorLogin = (prevState = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_ERROR:
      return payload.error;

    case Type.SIGNUP_USER_SUCCESS:
      return null;

    case ActionType.LOGIN_SUCCESS:
      return null;

    default:
      return prevState;
  }
};

const errorRegistration = (prevState = null, { type, payload }) => {
  switch (type) {
    case Type.SIGNUP_USER_ERROR:
      return payload.error;

    case Type.SIGNUP_USER_SUCCESS:
      return null;

    default:
      return prevState;
  }
};

const loadingReducer = (prevState = false, { type }) => {
  switch (type) {
    case Type.LOGIN_REQUEST:
    case Type.REFRESH_REQUEST:
    case Type.SIGNUP_USER_START:
      return true;

    case Type.LOGIN_SUCCESS:
    case Type.LOGIN_ERROR:
    case Type.REFRESH_SUCCESS:
    case Type.REFRESH_ERROR:
    case Type.SIGNUP_USER_SUCCESS:
    case Type.SIGNUP_USER_ERROR:
      return false;

    default:
      return prevState;
  }
};

export default combineReducers({
  user,
  authenticated,
  token,
  errorLogin,
  errorRegistration,
  loadingReducer,
});
