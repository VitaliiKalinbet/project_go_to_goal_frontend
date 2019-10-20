import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// style & npm
import 'react-sweet-progress/lib/style.css';
import css from './Goal.module.css';
import * as congratsActions from '../../redux/ModalCongrats/ModalCongratsActions';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';
import Arrow from '../../assets/images/arrow.png';

const Goal = ({ goal, openModalCongrats, percent }) => {
  let btn;
  if (percent < 100) {
    btn = 'disabled';
  }
  const { title } = goal;
  return (
    <div className={css.goal}>
      <div className={css.goalLogo}>
        <p className={css.goalName}> Mоя ціль:</p>
        <button
          type="button"
          className={percent < 100 ? css.goalBtn : css.goalBtnActive}
          onClick={openModalCongrats}
          disabled={btn}
        >
          {title}
        </button>
        <div
          style={{
            display: percent < 100 ? 'none' : 'block',
          }}
          className={css.attention}
        >
          <img className={css.attentionArrow} src={Arrow} alt="arrow" />
          <p className={css.attentionLabel}>Натисни мене !</p>
        </div>
      </div>
    </div>
  );
};

const MSTP = store => ({
  percent: dashboardSelectors.getPercent(store),
  goal: dashboardSelectors.getGoal(store),
});

const MDTP = dispatch => ({
  openModalCongrats: e => dispatch(congratsActions.openModal(e)),
});

Goal.propTypes = {
  goal: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  percent: PropTypes.number.isRequired,
  openModalCongrats: PropTypes.func.isRequired,
};
export default connect(
  MSTP,
  MDTP,
)(Goal);
