export const Type = {
  MODAL_DELETE_TASK_OPEN: 'MODAL_DELETE_TASK_OPEN',
  MODAL_DELETE_TASK_CLOSE: 'MODAL_DELETE_TASK_CLOSE',
};

export const openModal = () => ({
  type: Type.MODAL_DELETE_TASK_OPEN,
});

export const closeModal = () => ({
  type: Type.MODAL_DELETE_TASK_CLOSE,
});
