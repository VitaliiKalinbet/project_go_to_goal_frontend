import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//  STYLES
import styles from './Footer.module.css';

function Footer({ stylesModalReg }) {
  const stylesFooter = [styles.footer];
  stylesFooter.push(stylesModalReg);
  return (
    <div className={stylesFooter.join(' ')}>
      <p className={styles.footerText}>
        &#169; Copyright 2019
        <Link className={styles.footerCopyright} to="/contacts">
          powered by BOOTC@MP#13 team
        </Link>
      </p>
    </div>
  );
}

Footer.propTypes = {
  stylesModalReg: PropTypes.string.isRequired,
};

export default Footer;
