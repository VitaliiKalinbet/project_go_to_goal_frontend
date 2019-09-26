import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ModalRegistration.module.css';
import * as sessionOperations from '../../redux/session/sessionOperations';
import { closeModal } from '../../redux/ModalRegistration/ModalRegistrationActions';
import { getErrorMessageRegistration } from '../../redux/sessionLogin/sessionLoginSelectors';
import IconsAvatar from '../IconAvatar/IconAvatar';
import { ReactComponent as OpenEye } from '../../assets/svg/openEye.svg';
import { ReactComponent as CloseEye } from '../../assets/svg/closeEye.svg';

class ModalRegistration extends Component {
  static propTypes = {
    onSignUp: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
  };

  static defaultProps = {
    errorMessage: '',
  };

  state = {
    username: '',
    age: '',
    email: '',
    password: '',
    showPassword: 'password',
    correctPassword: '',
    errorPassword: '',
    avatar: 'https://go-to-goal.goit.co.ua/image/avatar_008.png',
  };

  HandleSubmitForm = e => {
    e.preventDefault();
    if (this.state.password === this.state.correctPassword) {
      // тут запускать операцию
      const { onSignUp } = this.props;
      const { username, password, email, age, avatar } = this.state;
      onSignUp({
        email,
        password,
        name: username,
        age,
        avatar,
        isChild: true,
      });
    } else {
      this.setState({
        errorPassword: 'Паролі не співпадають!!!',
      });
    }
  };

  handleCloseModal = () => {
    // eslint-disable-next-line no-shadow
    const { closeModal } = this.props;

    closeModal();
  };

  HandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeUserPic = avatar => {
    return this.setState({ avatar });
  };

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: prevState.showPassword === 'password' ? 'text' : 'password',
    }));
  };

  render() {
    const {
      username,
      age,
      email,
      password,
      showPassword,
      correctPassword,
      errorPassword,
    } = this.state;
    const { errorMessage } = this.props;
    return (
      <div className={s.formContainer}>
        {errorMessage &&
          (errorMessage.includes('40') || errorMessage.includes('41')) && (
            <p className={s.error}>
              Вибачте, але ви вiдправили некоректнi даннi...
            </p>
          )}
        {errorMessage && errorMessage.includes('50') && (
          <p className={s.error}>
            Вибачте, але у нас виникли деякi труднощi. Спробуйте пiзнiше...
          </p>
        )}
        <div className={s.textContainer}>
          <h1 className={s.text}>Реєстрація</h1>
          <h2 className={s.text_2}>Дитина</h2>
        </div>
        <div className={s.image_form}>
          <div className={s.image}>
            <IconsAvatar
              className={s.user_image_component}
              changeAvatar={this.changeUserPic}
            />
          </div>
          <form className={s.form} onSubmit={this.HandleSubmitForm}>
            <div className={s.wrapper}>
              <div className={s.inputContant}>
                <div className={s.nameSurname}>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.HandleChange}
                    required
                    minLength="2"
                    maxLength="12"
                    placeholder="Вкажiть своє iм'я..."
                    className={s.userName}
                  />
                  <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={this.HandleChange}
                    required
                    min="3"
                    max="99"
                    placeholder="Вкажiть свій вік..."
                    className={s.userAge}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.HandleChange}
                  required
                  pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                  placeholder="Введiть свiй email..."
                  className={s.inputText}
                />
                {/* <div> */}
                <input
                  type={showPassword}
                  name="password"
                  value={password}
                  onChange={this.HandleChange}
                  minLength="6"
                  maxLength="12"
                  placeholder="Введiть свiй пароль..."
                  className={s.inputText}
                />
                {/* <button
                    type="button"
                    onClick={this.onShowPassword}
                    className={s.btn_eye}
                  >
                    {showPassword === 'text' ? (
                      <OpenEye className={s.eye} />
                    ) : (
                      <CloseEye className={s.eye} />
                    )}
                  </button> */}
                {/* </div>
                <div> */}
                <input
                  type={showPassword}
                  name="correctPassword"
                  value={correctPassword}
                  onChange={this.HandleChange}
                  minLength="6"
                  maxLength="12"
                  placeholder="Підтвердiть пароль..."
                  className={s.inputText}
                />
                {/* </div> */}
                <button
                  type="button"
                  onClick={this.onShowPassword}
                  className={s.btn_eye}
                >
                  {showPassword === 'text' ? (
                    <OpenEye className={s.eye} />
                  ) : (
                    <CloseEye className={s.eye} />
                  )}
                </button>
              </div>
              <div className={s.buttonDiv}>
                <button
                  className={s.button}
                  onClick={this.handleCloseModal}
                  type="button"
                >
                  Назад
                </button>
                <button className={s.button} type="submit">
                  Зареєструватися
                </button>
              </div>
            </div>
            <p className={s.passwordError}>{errorPassword || ''}</p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  errorMessage: getErrorMessageRegistration(store),
});

const mapDispatchToProps = {
  onSignUp: sessionOperations.signupOperation,
  closeModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalRegistration);
