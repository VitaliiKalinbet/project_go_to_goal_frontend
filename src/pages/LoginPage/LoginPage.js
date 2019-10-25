import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/sessionLogin/sessionLoginOperations';
import withAuthRedirect from '../../hoc/withAuthRedirect';

// HTML & CSS
import s from './LoginPage.module.css';
import logo from '../../assets/images/login-page-logo@1X.png';
import { ReactComponent as Party } from '../../assets/svg/party.svg';
import LoginForm from '../../components/LoginPage/LoginForm';
import LoginCover from '../../components/LoginPage/LoginCover';
import LoginGreeting from '../../components/LoginPage/LoginGreeting';
import LoginGreetingTitle from '../../components/LoginPage/LoginGreetingTitle';
import LoadingGreetingBtn from '../../components/LoginPage/LoadingGreetingBtn';
import Footer from '../../components/Footer/Footer';
import ModalRegistration from '../../components/ModalRegistration/ModalRegistration';
import Backdrop from '../../components/Backdrop/Backdrop';
import { getIsOpenModalRegister } from '../../redux/ModalRegistration/ModalRegistrationSelectors';
import { getErrorMessageLogin } from '../../redux/sessionLogin/sessionLoginSelectors';
import {
  openModal,
  closeModal,
} from '../../redux/ModalRegistration/ModalRegistrationActions';

class LoginPage extends Component {
  static propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    onOpenModal: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
  };

  static defaultProps = {
    errorMessage: '',
  };

  state = {
    email: '',
    password: '',
    showPassword: 'password',
    formErrors: { email: '', password: '' },
    emailValid: false,
    passwordValid: false,
    formValid: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateField(name, value));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.onLogin({ email, password });
    this.reset();
  };

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: prevState.showPassword === 'password' ? 'text' : 'password',
    }));
  };

  validateField = (fieldName, value) => {
    const { formErrors, emailValid, passwordValid } = this.state;
    const fieldValidationErrors = formErrors;
    let fieldEmailValid = emailValid;
    let fieldPasswordValid = passwordValid;
    switch (fieldName) {
      case 'email':
        fieldEmailValid =
          // eslint-disable-next-line no-useless-escape
          /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(value);
        fieldValidationErrors.email = fieldEmailValid
          ? ''
          : 'Нажаль, таких email адрес не iснує...';
        break;
      case 'password':
        fieldPasswordValid = value.length >= 6 && value.length <= 12;
        fieldValidationErrors.password = fieldPasswordValid
          ? ''
          : 'Вибач, але нам потрiбен пароль вiд 6 до 12 символiв...';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: fieldEmailValid,
        passwordValid: fieldPasswordValid,
      },
      this.validateForm,
    );
  };

  validateForm = () => {
    const { emailValid, passwordValid } = this.state;
    this.setState({
      formValid: emailValid && passwordValid,
    });
  };

  reset = () => {
    this.setState({
      email: '',
      password: '',
      showPassword: 'password',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    });
  };

  render() {
    const {
      email,
      password,
      showPassword,
      formErrors,
      emailValid,
      passwordValid,
      formValid,
    } = this.state;
    const { isModalOpen, onOpenModal, onCloseModal, errorMessage } = this.props;
    const windowWidth = document.documentElement.clientWidth;
    return (
      <div className={s.login_page}>
        {isModalOpen &&
          (windowWidth >= 768 ? (
            <Backdrop onClose={onCloseModal}>
              <ModalRegistration onClose={onCloseModal} />
            </Backdrop>
          ) : (
            <ModalRegistration onClose={onCloseModal} />
          ))}
        {/* MOBILE || LOGO */}
        {windowWidth < 768 && (
          <img src={logo} alt="logo" width="104" className={s.logo} />
        )}

        {/* TABLET & DESKTOP || FORM */}
        {windowWidth > 767 && (
          <header className={s.header}>
            <div className={s.header_form}>
              <img src={logo} alt="logo" width="104" className={s.logo} />
              {!formValid && !emailValid && (
                <i className={s.error}>{formErrors.email}</i>
              )}
              {!formValid && !passwordValid && (
                <i className={s.error}>{formErrors.password}</i>
              )}
              {errorMessage && (
                <i className={s.error}>
                  Введіть, будь ласка, пошту та пароль вказані при реєстрації
                </i>
              )}
              <LoginForm
                onOpenModal={onOpenModal}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                onShowPassword={this.onShowPassword}
                showPassword={showPassword}
                email={email}
                password={password}
                formValid={formValid}
              />
            </div>
          </header>
        )}
        <main className={s.main}>
          {/* TABLET & DESKTOP || COVER */}
          {windowWidth > 767 && <LoginCover />}
          <div className={s.greeting}>
            {/* ALL || TITLE */}
            <LoginGreetingTitle />

            {/* MOBILE ||FORM */}
            {windowWidth < 768 && (
              <>
                <LoginForm
                  onOpenModal={onOpenModal}
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}
                  onShowPassword={this.onShowPassword}
                  showPassword={showPassword}
                  email={email}
                  password={password}
                  formValid={formValid}
                />
                {!formValid && !emailValid && (
                  <i className={s.error}>{formErrors.email}</i>
                )}
                {!formValid && !passwordValid && (
                  <i className={s.error}>{formErrors.password}</i>
                )}
                {errorMessage && (
                  <i className={s.error}>
                    Введіть, будь ласка, пошту та пароль вказані при реєстрації
                  </i>
                )}
              </>
            )}

            {/* TABLET & DESKTOP ||GREETING */}
            {windowWidth > 767 && <LoginGreeting />}
            {windowWidth > 767 && <Party className={s.decor} />}

            {/* ALL || BTN REG */}
            <LoadingGreetingBtn onOpenModal={onOpenModal} />
          </div>
        </main>

        {/* TABLET & DESKTOP || FOOTER */}
        {windowWidth >= 768 && <Footer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isModalOpen: getIsOpenModalRegister(state),
  errorMessage: getErrorMessageLogin(state),
});

const mapDispatchToProps = {
  onLogin: login,
  onOpenModal: openModal,
  onCloseModal: closeModal,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withAuthRedirect,
)(LoginPage);
