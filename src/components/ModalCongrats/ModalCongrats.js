import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ModalCongrats.module.css';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';
import { patchGoalOperation } from '../../redux/ModalCongrats/ModalCongratsOperations';

const ModalCongrats = ({ goal, token, goalOperation }) => {
  let goalId = '';
  let goalTitle = '';
  if (goal) {
    const { _id, title } = goal;
    goalId = _id;
    goalTitle = title;
  }
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.congrats}>Вітаємо!</h1>
        <p className={styles.textInform}>Ти отримуєш</p>
        <div className={styles.flagContainer}>
          <p className={styles.textPrise}>{goalTitle}</p>
          <p className={styles.textNewTask}>Час вибирати нову ціль!</p>
        </div>
        <button
          className={styles.button}
          onClick={() => goalOperation(goalId, token)}
          type="button"
        >
          Так!
        </button>
      </div>
    </div>
  );
};

ModalCongrats.propTypes = {
  goal: PropTypes.shape().isRequired,
  token: PropTypes.string.isRequired,
  goalOperation: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  goal: dashboardSelectors.getGoal(store),
  token: dashboardSelectors.getToken(store),
});

const mapDispatchToProps = dispatch => ({
  goalOperation: (goalId, token) => dispatch(patchGoalOperation(goalId, token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalCongrats);
