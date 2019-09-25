import React, { Component } from 'react';
import windowSize from 'react-window-size';
import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Goal from '../Goal/Goal';
import ProgressBar from '../ProgressBar/ProgressBar';
import User from '../User/User';

class Header extends Component {
  state = {};

  render() {
    const { windowWidth } = this.props;
    return (
      <header className={css.header}>
        <Logo />
        {windowWidth > 320 && <Goal />}
        {windowWidth > 1279 && <ProgressBar />}
        <User />
      </header>
    );
  }
}

export default windowSize(Header);
