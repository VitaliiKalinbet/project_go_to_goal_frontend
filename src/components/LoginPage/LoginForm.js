import React from 'react';
import PropTypes from 'prop-types';
import s from '../../pages/LoginPage/LoginPage.module.css';
import { ReactComponent as OpenEye } from '../../assets/svg/openEye.svg';
import { ReactComponent as CloseEye } from '../../assets/svg/closeEye.svg';

const LoginForm = ({
  onOpenModal,
  onSubmit,
  onChange,
  email,
  password,
  showPassword,
  onShowPassword,
}) => {
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        required
        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
        placeholder="Enter your login/email..."
      />
      <div>
        <input
          type={showPassword}
          name="password"
          value={password}
          onChange={onChange}
          required
          minLength="6"
          maxLength="12"
          placeholder="Enter your password..."
        />
        <button type="button" onClick={onShowPassword} className={s.btn_eye}>
          {showPassword === 'text' ? (
            <OpenEye className={s.eye} />
          ) : (
            <CloseEye className={s.eye} />
          )}
        </button>
      </div>
      <button type="submit">Увiйти</button>
      <button onClick={onOpenModal} type="button" className={s.reg_btn}>
        Реєстрація
      </button>
    </form>
  );
};

LoginForm.defaultProps = {
  email: '',
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onShowPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.string.isRequired,
};

export default LoginForm;
