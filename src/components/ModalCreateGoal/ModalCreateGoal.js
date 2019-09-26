import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { connect } from 'react-redux';
import styles from './ModalCreateGoal.module.css';
import { cleanModalGoalErrors } from '../../redux/ModalCreateGoal/ModalCreateGoalActions';
import { addGoal } from '../../redux/ModalCreateGoal/ModalCreateGoalOperations';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';
import * as modalCreateGoalSelectors from '../../redux/ModalCreateGoal/ModalCreateGoalSelectors';

const idForInputGoal = shortid.generate();
const idForInputPoints = shortid.generate();
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
    const { postGoal, token, cleanErrors } = this.props;
    const { valueInputGoal, valueInputPoints } = this.state;
    cleanErrors();
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
        {errorMessage &&
          (errorMessage.includes('40') || errorMessage.includes('41')) && (
            <p className={styles.error}>
              Ви ввели не всі дані. Будь ласка, заповніть необхідні поля.
            </p>
          )}
        {errorMessage && errorMessage.includes('50') && (
          <p className={styles.error}>
            Вибачте, але в нас виникли деякі труднощі. Спробуйте, будь ласка,
            пізніше.
          </p>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postGoal: (goal, token) => dispatch(addGoal(goal, token)),
  cleanErrors: () => dispatch(cleanModalGoalErrors()),
});

const mapStateToProps = store => ({
  token: dashboardSelectors.getToken(store),
  errorMessage: modalCreateGoalSelectors.getMessageErr(store),
});

ModalCreateGoal.defaultProps = {
  errorMessage: null,
};

ModalCreateGoal.propTypes = {
  postGoal: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  cleanErrors: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalCreateGoal);
