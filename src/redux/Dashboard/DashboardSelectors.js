export const getTasks = store => store.tasks;

export const getGoal = store => store.goal;

export const hasGoal = store => store.goal !== null;

export const getToken = store => store.session.token;

export const hasDashboardError = store => store.dashboardErrors.length > 0;

export const getDashboardErrors = store => store.dashboardErrors;

export const getUser = store => store.session.user;

export const getAvatar = store => store.session.user.avatar;

export const getGoalPoints = store =>
  store.goal !== null ? store.goal.points : 0;

export const getUserPoints = store => store.session.user.scores;

export const getPercent = store => {
  const goal = getGoalPoints(store);
  const task = getUserPoints(store);
  return (task / goal) * 100;
};

export const cardStatus = (store, _id) =>
  store.tasks.length > 0
    ? store.tasks.find(el => el._id === _id).isDone
    : false;

export const getGoalId = store => store.goal._id;

export const getGoalTitle = store => store.goal.title;
