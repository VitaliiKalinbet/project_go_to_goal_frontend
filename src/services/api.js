import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://go-to-goal.goit.co.ua/api/';

export const setTokenLoginPage = options => axios.get('user', options);

export const setToken = Token => ({
  headers: {
    Authorization: `${Token}`,
  },
});

export const deleteTask = (id, token) =>
  axios.delete(`tasks/${id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });

export const addNewGoal = (goal, token) =>
  axios.post('goals', goal, {
    headers: {
      Authorization: `${token}`,
    },
  });

export const addTask = (task, token) =>
  axios.post('tasks', task, {
    headers: {
      Authorization: `${token}`,
    },
  });

export const toggleTask = (id, status, token) =>
  axios.patch(`tasks/${id}`, status, {
    headers: {
      Authorization: `${token}`,
    },
  });

export const signUpUser = credentials => {
  return axios.post('auth/register', credentials);
};

export const setLogin = credentials => {
  return axios.post('auth/login', credentials);
};

export const getTasks = (tasksAlias, token) =>
  axios.get(tasksAlias, {
    headers: {
      Authorization: token,
    },
  });

export const getGoal = (goalAlias, token) =>
  axios.get(goalAlias, {
    headers: {
      Authorization: token,
    },
  });

export const patchGoal = (goalId, token) =>
  axios.patch(
    `goals/${goalId}`,
    { isDone: true },
    {
      headers: {
        Authorization: `${token}`,
      },
    },
  );
