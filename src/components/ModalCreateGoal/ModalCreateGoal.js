import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { connect } from 'react-redux';
import styles from './ModalCreateGoal.module.css';
import { addGoal } from '../../redux/ModalCreateGoal/ModalCreateGoalOperations';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';
import * as modalCreateGoalSelectors from '../../redux/ModalCreateGoal/ModalCreateGoalSelectors';

const idForInputGoal = shortid.generate();
const idForInputPoints = shortid.generate();
const keyForErrors = shortid.generate();
const date = new Date().toISOString();

class ModalCreateGoal extends Component {
  state = {
    valueInputGoal: '',
    valueInputPoints: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitForm = async e => {
    e.preventDefault();
    const { postGoal, token } = this.props;
    const { valueInputGoal, valueInputPoints } = this.state;

    await postGoal(
      {
        title: valueInputGoal,
        points: Number(valueInputPoints),
        description: 'goal description',
        dates: [date],
      },
      token,
    );

    await this.setState({
      valueInputGoal: '',
      valueInputPoints: '',
    });
  };

  render() {
    const { valueInputGoal, valueInputPoints } = this.state;
    const { errorMessage } = this.props;
    return (
      <div className={styles.modal}>
        <form onSubmit={this.onSubmitForm} className={styles.form}>
          <label htmlFor={idForInputGoal} className={styles.label}>
            Що я хочу
            <input
              minLength="3"
              maxLength="20"
              name="valueInputGoal"
              value={valueInputGoal}
              onChange={this.handleChange}
              id={idForInputGoal}
              className={styles.input}
              type="text"
              placeholder="Дай своїй цілі назву"
              required
            />
          </label>
          <label htmlFor={idForInputPoints} className={styles.label}>
            Скільки балів треба набрати
            <input
              min="1"
              max="9999"
              name="valueInputPoints"
              value={valueInputPoints}
              onChange={this.handleChange}
              id={idForInputPoints}
              className={styles.input}
              type="number"
              placeholder="Наприклад: 1000"
              required
            />
          </label>
          <p className={styles.text}>
            Дай цілі назву та вибери при якій кількості балів ціль буде
            вважатися досягнутою
          </p>
          <button className={styles.button} type="submit">
            Ok
          </button>
        </form>
        {errorMessage.map(
          el =>
            el.includes(50) && (
              <p key={keyForErrors} className={styles.error}>
                Вибачте за технічні проблеми. Спробуйте, будь ласка, повторно.
              </p>
            ),
        )}
        {errorMessage.map(
          el =>
            el.includes(40) && (
              <p key={keyForErrors} className={styles.error}>
                Ви ввели неповні дані. Будь ласка, заповніть всі поля.
              </p>
            ),
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postGoal: (goal, token) => dispatch(addGoal(goal, token)),
});

const mapStateToProps = store => ({
  token: dashboardSelectors.getToken(store),
  errorMessage: modalCreateGoalSelectors.getMessageErr(store),
});

ModalCreateGoal.propTypes = {
  postGoal: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  errorMessage: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalCreateGoal);
