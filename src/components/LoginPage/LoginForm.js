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
  formValid,
}) => {
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        required
        placeholder="Введiть свiй email..."
      />
      <div>
        <input
          type={showPassword}
          name="password"
          value={password}
          onChange={onChange}
          required
          placeholder="Введiть свiй пароль..."
        />
        <button type="button" onClick={onShowPassword} className={s.btn_eye}>
          {showPassword === 'text' ? (
            <CloseEye className={s.eye} />
          ) : (
            <OpenEye className={s.eye} />
          )}
        </button>
      </div>
      <button type="submit" disabled={!formValid} className={s.log_btn}>
        Увiйти
      </button>
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
  formValid: PropTypes.bool.isRequired,
};

export default LoginForm;
