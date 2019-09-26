import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// style & npm
import { Progress } from 'react-sweet-progress';
import css from './ProgressBar.module.css';

// redux
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

const ProgressBar = ({ goalPoints, taskPoints, percent }) => {
  if ((percent, taskPoints, goalPoints !== null)) {
    return (
      <>
        <div className={css.progress}>
          <p className={css.progressScore}>
            {taskPoints} <span className={css.total}> / {goalPoints}</span>
          </p>
          <Progress
            className={css.progresBar}
            percent={percent}
            symbol="none"
            theme={{
              success: {
                symbol: ' ',
                color: '#9ecb45',
              },
              active: {
                symbol: ' ',
                color: '#f1c540',
              },
              default: {
                symbol: ' ',
                color: '#fbc630',
              },
            }}
          />
        </div>
      </>
    );
  }
  return '';
};

const MSTP = store => ({
  goalPoints: dashboardSelectors.getGoalPoints(store),
  taskPoints: dashboardSelectors.getUserPoints(store),
  percent: dashboardSelectors.getPercent(store),
});

ProgressBar.propTypes = {
  goalPoints: PropTypes.number.isRequired,
  taskPoints: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default connect(
  MSTP,
  null,
)(ProgressBar);
