import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardBodyDone.module.css';
import { ReactComponent as GiftIMG } from '../../assets/icons/gift.svg';

const CardBody = ({ points, createdAt, isChecked }) => {
  return (
    <>
      <div className={isChecked ? styles.isChecked : styles.bodyCard}>
        <GiftIMG className={styles.SVG_gift} />
        <p className={styles.points_txt_number}>{points}</p>
        <p className={styles.points_txt_p}>балів</p>
        <p className={styles.time_p}>{createdAt}</p>
      </div>
    </>
  );
};

CardBody.defaultProps = {
  isChecked: false,
};

CardBody.propTypes = {
  points: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
};

export default CardBody;
