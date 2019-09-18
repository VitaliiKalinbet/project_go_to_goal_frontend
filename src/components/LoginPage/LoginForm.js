import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onSubmit, onChange, login, password, sForm, sRegBtn }) => {
  return (
    <form onSubmit={onSubmit} className={sForm}>
      <input
        type="text"
        name="login"
        value={login}
        onChange={onChange}
        placeholder="Enter your login/email..."
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Enter your password..."
      />
      <button type="submit">Увiйти</button>
      <button type="button" className={sRegBtn}>
        Реєстрація
      </button>
    </form>
  );
};

LoginForm.defaultProps = {
  sRegBtn: '',
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sForm: PropTypes.string.isRequired,
  sRegBtn: PropTypes.string,
};

export default LoginForm;