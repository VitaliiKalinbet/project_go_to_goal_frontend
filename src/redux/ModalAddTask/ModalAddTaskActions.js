export const TypeAddTask = {
  MODAL_ADD_TASK_OPEN: 'MODAL_ADD_TASK_OPEN',
  MODAL_ADD_TASK_CLOSE: 'MODAL_ADD_TASK_CLOSE',
  ADD_TASK_SUCCESS: 'ADD_TASK_SUCCESS',
  ADD_TASK_ERROR: 'ADD_TASK_ERROR',
  CLEAN_MODAL_TASK: 'CLEAN_MODAL_TASK',
};

export const openModal = () => ({
  type: TypeAddTask.MODAL_ADD_TASK_OPEN,
});

export const closeModal = () => ({
  type: TypeAddTask.MODAL_ADD_TASK_CLOSE,
});

/*
 * action for create task operation
 */

export const postSuccessModal = task => ({
  type: TypeAddTask.ADD_TASK_SUCCESS,
  payload: {
    task,
  },
});

export const postErrorModal = error => ({
  type: TypeAddTask.ADD_TASK_ERROR,
  payload: {
    error,
  },
});

export const cleanModalTask = () => ({
  type: TypeAddTask.CLEAN_MODAL_TASK,
});
