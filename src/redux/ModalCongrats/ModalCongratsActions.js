export const TypeModalCongrats = {
  MODAL_CONGRATS_OPEN: 'MODAL_CONGRATS_OPEN',
  MODAL_CONGRATS_CLOSE: 'MODAL_CONGRATS_CLOSE',
  MODAL_CONGRATS_SUCCESS: 'MODAL_CONGRATS_SUCCESS',
  MODAL_CONGRATS_ERROR: 'MODAL_CONGRATS_ERROR',
};

export const openModal = () => ({
  type: TypeModalCongrats.MODAL_CONGRATS_OPEN,
});

export const closeModal = () => ({
  type: TypeModalCongrats.MODAL_CONGRATS_CLOSE,
});

/*
 * actions for deleting target
 */

export const modalSuccess = () => ({
  type: TypeModalCongrats.MODAL_CONGRATS_SUCCESS,
});

export const modalError = error => ({
  type: TypeModalCongrats.MODAL_CONGRATS_ERROR,
  payload: {
    error,
  },
});
