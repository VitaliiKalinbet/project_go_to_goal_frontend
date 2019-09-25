import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/dashboard" className={style.logo}>
      <img src={LogoImg} alt="logo" className={style.logoImg} />
    </Link>
  );
};
export default Logo;
