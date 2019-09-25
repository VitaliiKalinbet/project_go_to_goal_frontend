import { combineReducers } from 'redux';
import { ActionType } from './sessionLoginActions';
// import Sign UP  actions
import { Type } from '../session/sessionActions';

const returnValue = {
  TRUE: true,
  FALSE: false,
};

const user = (prevState = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case ActionType.REFRESH_SUCCESS:
      return payload.response.data.user.userData;

    // case ActionType.REFRESH_SUCCESS:
    //   return payload.response.data.user;

    case ActionType.LOGOUT:
      return null;
    // ----------SIGN UP ACTIONS---------
    case Type.SIGNUP_USER_SUCCESS:
      return payload.response.user.userData;

    case Type.SIGNUP_USER_ERROR:
      return null;
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

    case ActionType.LOGOUT:
      return false;
    // ----------SIGN UP ACTIONS---------
    case Type.SIGNUP_USER_SUCCESS:
      return payload.response.status === 'success'
        ? returnValue.TRUE
        : returnValue.FALSE;

    case Type.SIGNUP_USER_ERROR:
      return false;
    //-----------------------------------
    default:
      return prevState;
  }
};

const token = (prevState = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
      return payload.response.data.user.token;

    case ActionType.LOGOUT:
      return null;
    // ----------SIGN UP ACTIONS---------
    case Type.SIGNUP_USER_SUCCESS:
      return payload.response.user.token;

    case Type.SIGNUP_USER_ERROR:
      return null;
    //-----------------------------------
    default:
      return prevState;
  }
};

const error = (prevState = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_ERROR:
      return payload.error;
    // ----------SIGN UP ACTIONS---------
    case Type.SIGNUP_USER_ERROR:
      return payload.error;

    case Type.SIGNUP_USER_SUCCESS:
      return null;
    //-----------------------------------
    default:
      return prevState;
  }
};
// ----------SIGN UP ACTIONS---------
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
//-----------------------------------

export default combineReducers({
  user,
  authenticated,
  token,
  error,
  loadingReducer,
});
