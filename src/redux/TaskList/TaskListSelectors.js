export const getActivePosts = store =>
  store.tasks.filter(task => task.inActive);

export const getDonePosts = store => store.tasks.filter(task => !task.inActive);
