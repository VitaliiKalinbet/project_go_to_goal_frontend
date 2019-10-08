import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://go-to-goal.goit.co.ua/api';

export const setToken = Token => ({
  headers: {
    Authorization: `${Token}`,
  },
});

export const setTokenLoginPage = token => axios.get('user', setToken(token));

export const deleteTask = (id, token) =>
  axios.delete(`/tasks/${id}`, setToken(token));

export const addNewGoal = (goal, token) =>
  axios.post('/goals', goal, setToken(token));

export const addTask = (task, token) =>
  axios.post('/tasks', task, setToken(token));

export const toggleTask = (id, status, token) =>
  axios.patch(`/tasks/${id}`, status, setToken(token));

export const signUpUser = credentials =>
  axios.post('/auth/register', credentials);

export const setLogin = credentials => axios.post('/auth/login', credentials);

export const getTasks = (tasksAlias, token) =>
  axios.get(tasksAlias, setToken(token));

export const getGoal = (goalAlias, token) =>
  axios.get(goalAlias, setToken(token));

export const patchGoal = (goalId, patch, token) =>
  axios.patch(`/goals/${goalId}`, patch, setToken(token));
