import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import windowSize from 'react-window-size';
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
// import LoginFooter from '../../components/LoginPage/LoginFooter';
import Footer from '../../components/Footer/Footer';
import ModalRegistration from '../../components/ModalRegistration/ModalRegistration';
import Backdrop from '../../components/Backdrop/Backdrop';
import { getIsOpenModalRegister } from '../../redux/ModalRegistration/ModalRegistrationSelectors';
import { getErrorMessage } from '../../redux/sessionLogin/sessionLoginSelectors';
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
    // windowWidth: null,
  };

  // componentDidMount() {
  //   window.addEventListener('resize', this.windowWidth());
  // }

  // windowWidth = () => {
  //   this.setState({
  //     windowWidth: document.documentElement.clientWidth,
  //   });
  // };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.reset();
  };

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: prevState.showPassword === 'password' ? 'text' : 'password',
    }));
  };

  reset = () => {
    this.setState({
      login: '',
      password: '',
      showPassword: 'password',
    });
  };

  render() {
    const { email, password, showPassword } = this.state;
    const { isModalOpen, onOpenModal, onCloseModal, errorMessage } = this.props;
    const windowWidth = document.documentElement.clientWidth;
    // const windowWidth = window.screen.clientWidth;
    // console.log('windowWidth :', windowWidth);
    return (
      <div className={s.login_page}>
        {isModalOpen && (
          <Backdrop onClose={onCloseModal}>
            <ModalRegistration onClose={onCloseModal} />
          </Backdrop>
        )}
        {/* MOBILE || LOGO */}
        {windowWidth < 768 && (
          <img src={logo} alt="logo" width="104" className={s.logo} />
        )}

        {/* TABLET & DESKTOP || FORM */}
        {windowWidth > 767 && (
          <header className={s.header}>
            <div className={s.header_form}>
              <img src={logo} alt="logo" width="104" className={s.logo} />
              {errorMessage &&
                (errorMessage.includes('40') ||
                  errorMessage.includes('41')) && (
                  <p className={s.error}>
                    Вибачте, але ви вiдправили некоректнi даннi...
                  </p>
                )}
              {errorMessage && errorMessage.includes('50') && (
                <p className={s.error}>
                  Вибачте, але у нас виникли деякi труднощi. Спробуйте
                  пiзнiше...
                </p>
              )}
              <LoginForm
                onOpenModal={onOpenModal}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                onShowPassword={this.onShowPassword}
                showPassword={showPassword}
                email={email}
                password={password}
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
                />
                {errorMessage &&
                  (errorMessage.includes('40') ||
                    errorMessage.includes('41')) && (
                    <p className={s.error}>
                      Вибачте, але ви вiдправили некоректнi даннi...
                    </p>
                  )}
                {errorMessage && errorMessage.includes('50') && (
                  <p className={s.error}>
                    Вибачте, але у нас виникли деякi труднощi. Спробуйте
                    пiзнiше...
                  </p>
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
        {windowWidth > 767 && <Footer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isModalOpen: getIsOpenModalRegister(state),
  errorMessage: getErrorMessage(state),
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
  // windowSize,
)(LoginPage);
