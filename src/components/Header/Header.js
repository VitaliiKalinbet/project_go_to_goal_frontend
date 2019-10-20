import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// style & npm
import css from './Header.module.css';

// components
import Logo from '../Logo/Logo';
import Goal from '../Goal/Goal';
import User from '../User/User';
import ProgressBar from '../ProgressBar/ProgressBar';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

const Header = ({ goal }) => {
  const windowWidth = document.documentElement.clientWidth;
  return (
    <header className={css.header}>
      <section className={css.content}>
        <Logo />
        {windowWidth >= 768 && (
          <div className={css.info}>
            {goal !== null && <Goal />}
            {goal !== null && <ProgressBar />}
          </div>
        )}
        <User />
      </section>
      {windowWidth < 768 && (
        <div className={css.mobileInfo}>
          {goal !== null && <Goal />}
          {goal !== null && <ProgressBar />}
        </div>
      )}
    </header>
  );
};

const MSTP = s => ({
  goal: dashboardSelectors.getGoal(s),
});

Header.propTypes = {
  goal: PropTypes.shape(),
};

Header.defaultProps = {
  goal: null,
};

export default connect(
  MSTP,
  null,
)(Header);
