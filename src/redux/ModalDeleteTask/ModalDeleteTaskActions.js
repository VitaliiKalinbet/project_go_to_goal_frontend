export const Type = {
  MODAL_DELETE_TASK_OPEN: 'MODAL_DELETE_TASK_OPEN',
  MODAL_DELETE_TASK_CLOSE: 'MODAL_DELETE_TASK_CLOSE',
  DELETE_SCORES: 'DELETE_SCORES',
};

export const openModal = id => ({
  type: Type.MODAL_DELETE_TASK_OPEN,
  payload: {
    id,
  },
});

export const closeModal = () => ({
  type: Type.MODAL_DELETE_TASK_CLOSE,
});

export const handleScores = scores => ({
  type: Type.DELETE_SCORES,
  payload: {
    scores,
  },
});
