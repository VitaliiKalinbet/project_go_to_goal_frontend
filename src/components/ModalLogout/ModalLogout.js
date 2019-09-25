import React from 'react';
import PropTypes from 'prop-types';
import style from './ModalLogout.module.css';

const ModalLogout = ({ onLogout, onClose }) => {
  return (
    <div className={style.modalContent}>
      <h2 className={style.h2}>Ви впевнені, що хочете покинути сторінку?</h2>
      <div className={style.btnConteiner}>
        <button type="button" className={style.btn} onClick={onLogout}>
          ТАК
        </button>
        <button type="button" className={style.btn} onClick={onClose}>
          НІ
        </button>
      </div>
    </div>
  );
};

ModalLogout.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalLogout;
