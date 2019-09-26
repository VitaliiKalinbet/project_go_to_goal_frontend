import { TypeModalCongrats } from './ModalCongratsActions';

export const openCloseReducer = (prevState = false, action) => {
  switch (action.type) {
    case TypeModalCongrats.MODAL_CONGRATS_OPEN:
      return true;
    case TypeModalCongrats.MODAL_CONGRATS_CLOSE:
      return false;

    default:
      return prevState;
  }
};

export const errorModalCongratsReducer = (prevState = null, action) => {
  switch (action.type) {
    case TypeModalCongrats.MODAL_CONGRATS_ERROR:
      return action.payload.error;

    case TypeModalCongrats.MODAL_CONGRATS_SUCCESS:
      return null;

    default:
      return prevState;
  }
};
