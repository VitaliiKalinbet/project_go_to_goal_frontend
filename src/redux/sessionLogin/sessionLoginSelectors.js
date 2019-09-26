export const getIsAuthenticated = store => store.session.authenticated;

export const getToken = store => store.session.token;

export const getErrorMessageLogin = store =>
  store.session.errorLogin && store.session.errorLogin.message;

export const getErrorMessageRegistration = store =>
  store.session.errorRegistration && store.session.errorRegistration.message;
