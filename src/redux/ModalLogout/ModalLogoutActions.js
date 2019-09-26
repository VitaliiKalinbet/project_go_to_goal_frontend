export const Type = {
  MODAL_LOGOUT_OPEN: 'MODAL_LOGOUT_OPEN',
  MODAL_LOGOUT_CLOSE: 'MODAL_LOGOUT_CLOSE',
  LOG_OUT_START: 'LOG_OUT_START',
  LOG_OUT_SUCCSES: 'LOG_OUT_SUCCSES',
  LOG_OUT_ERROR: 'LOG_OUT_ERROR',
};

export const openModal = e => ({
  type: Type.MODAL_LOGOUT_OPEN,
  isModalLogoutOpen: true,
});

export const closeModal = e => ({
  type: Type.MODAL_LOGOUT_CLOSE,
  isModalLogoutOpen: false,
});

export const logOutSucsses = session => ({
  type: Type.LOG_OUT_SUCCSES,
});
export const logOutError = error => ({
  type: Type.LOG_OUT_ERROR,
  payload: error,
});
