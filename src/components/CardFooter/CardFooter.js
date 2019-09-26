import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardFooter.module.css';

const CardFooter = ({ title, deadline }) => {
  return (
    <div className={styles.cardFooter_div}>
      <p className={styles.CardFooter_task}>{title}</p>
      <p className={styles.CardFooter_timeFrames}>{deadline}</p>
    </div>
  );
};

CardFooter.propTypes = {
  title: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
};

export default CardFooter;
