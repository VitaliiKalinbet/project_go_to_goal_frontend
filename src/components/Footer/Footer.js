import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//  STYLES
import styles from './Footer.module.css';

class Footer extends Component {
  state = {};

  render() {
    return (
      <div className={styles.footer}>
        <p className={styles.footerText}>
          &#169; Copyright 2019{' '}
          <Link className={styles.footerCopyright} to="/contacts">
            powered by BOOTC@MP#13 team
          </Link>
        </p>
      </div>
    );
  }
}

export default Footer;
