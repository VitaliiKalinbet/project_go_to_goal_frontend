import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './User.module.css';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';
import * as logoutActions from '../../redux/ModalLogout/ModalLogoutActions';

const User = ({ user, avatar, openModalLogout }) => {
  const { name, age } = user;

  return (
    <>
      <div className={style.userInfo}>
        <img
          src={avatar}
          width="58"
          height="50"
          alt="Вася Пупкін"
          className={style.avatar}
        />
        <div className={style.colum}>
          <span className={style.userName}>{name}</span>
          <span className={style.userAge}>{age} років</span>
        </div>
        <button type="button" className={style.btn} onClick={openModalLogout} />
      </div>
    </>
  );
};

const MSTP = s => ({
  user: dashboardSelectors.getUser(s),
  avatar: dashboardSelectors.getAvatar(s),
});

const MDTP = dispatch => ({
  openModalLogout: e => dispatch(logoutActions.openModal(e)),
});

User.propTypes = {
  avatar: PropTypes.string,
  openModalLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

User.defaultProps = {
  avatar: '',
};

export default connect(
  MSTP,
  MDTP,
)(User);
