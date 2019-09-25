import React from 'react';
// import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './CardBodyActive.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ReactComponent as GiftIMG } from '../../assets/icons/gift.svg';
import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';
import * as modalDeleteActions from '../../redux/ModalDeleteTask/ModalDeleteTaskActions';
import { removeCardsSuccess } from '../../redux/Dashboard/DashboardActions';
// import { cardStatus } from '../../redux/Dashboard/DashboardSelectors';

// const pointsS = 500;

const CardBodyActive = ({
  points,
  // onChangeToggle,
  isDone,
  openModal,
  _id,
  getID,
}) => {
  return (
    <>
      <div className={isDone ? styles.isDone : styles.bodyCard}>
        <button
          type="button"
          onClick={() => {
            getID(_id);
            openModal();
          }}
          className={styles.SVG_close_btn}
        >
          <CloseSVG className={styles.SVG_close} />
        </button>
        <GiftIMG className={styles.SVG_gift} />
        <div className={styles.CardBody_div_txt}>
          {/* <p className={styles.points_txt_number}>{pointsS}</p> */}
          <p className={styles.points_txt_number}>{points}</p>
          <p className={styles.points_txt_p}>балів</p>
        </div>
        <ToggleButton
          // onChangeToggle={onChangeToggle}
          checked={isDone}
          id={_id}
        />
      </div>
    </>
  );
};

CardBodyActive.propTypes = {
  points: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  getID: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getID: id => dispatch(removeCardsSuccess(id)),
  openModal: () => dispatch(modalDeleteActions.openModal()),
});

export default connect(
  null,
  mapDispatchToProps,
)(CardBodyActive);
