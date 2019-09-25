import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ModalRegistration.module.css';
// import logo from '../../assets/images/zaglushka.PNG';
import * as sessionOperations from '../../redux/session/sessionOperations';
import { closeModal } from '../../redux/ModalRegistration/ModalRegistrationActions';
import IconsAvatar from '../IconAvatar/IconAvatar';
// import passwordValidation from './signUpValidations';

class ModalRegistration extends Component {
  static propTypes = {
    onSignUp: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    age: '',
    email: '',
    password: '',
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
        errorPassword: 'Пароли не совпадают!!!',
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

  render() {
    const {
      username,
      age,
      email,
      password,
      correctPassword,
      errorPassword,
    } = this.state;
    return (
      <div className={s.formContainer}>
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
                    className={s.userName}
                    type="text"
                    placeholder="Ім'я"
                    value={username}
                    name="username"
                    onChange={this.HandleChange}
                    required="Вкажіть Ім'я"
                    maxLength="16"
                  />
                  <input
                    className={s.userAge}
                    type="number"
                    placeholder="Вік"
                    value={age}
                    name="age"
                    min="3"
                    max="99"
                    onChange={this.HandleChange}
                    required
                  />
                </div>
                <input
                  className={s.inputText}
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  name="email"
                  onChange={this.HandleChange}
                />
                <input
                  className={s.inputText}
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  name="password"
                  onChange={this.HandleChange}
                  minLength="6"
                  maxLength="12"
                />
                <input
                  className={s.inputText}
                  type="password"
                  placeholder="Підтвердити пароль"
                  value={correctPassword}
                  name="correctPassword"
                  onChange={this.HandleChange}
                  minLength="6"
                  maxLength="12"
                />
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
                  OK
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

const mapDispatchToProps = {
  onSignUp: sessionOperations.signupOperation,
  closeModal,
};

export default connect(
  null,
  mapDispatchToProps,
)(ModalRegistration);
