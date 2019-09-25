import { Type } from './ModalLogoutActions';
import { ActionType } from '../sessionLogin/sessionLoginActions';

export const openCloseReducer = (prevState = false, action) => {
  switch (action.type) {
    case Type.MODAL_LOGOUT_OPEN:
      return true;

    case Type.MODAL_LOGOUT_CLOSE:
    case ActionType.LOGOUT:
      return false;

    default:
      return prevState;
  }
};

export const w = () => {};
