export const getTaskError = store =>
  store.dashboardErrors.map(el => el.message);

export const getModalErrorClean = store =>
  store.modalAddTaskErrors.error && store.modalAddTaskErrors.error.message;

export const e = () => null;
