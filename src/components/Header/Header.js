import React from 'react';
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
  return (
    <div className={css.bg}>
      <header className={css.header}>
        <div className={css.order1}>
          <Logo />
        </div>
        <div className={css.center}>
          {goal !== null && <Goal />}
          {goal !== null && <ProgressBar />}
        </div>
        <div className={css.order2} />
        <User />
      </header>
    </div>
  );
};
const MSTP = s => ({
  goal: dashboardSelectors.getGoal(s),
});

export default connect(
  MSTP,
  null,
)(Header);
