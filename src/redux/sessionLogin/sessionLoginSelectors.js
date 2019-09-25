export const getIsAuthenticated = store => store.session.authenticated;

export const getToken = store => store.session.token;

export const getErrorMessage = store =>
  store.session.error && store.session.error.message;
