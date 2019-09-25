import React from 'react';
import { connect } from 'react-redux';
import styles from './ToggleButton.module.css';
import { toggleTaskOperation } from '../../redux/ToggleActive/ToggleActiveOperations';

const ToggleButton = ({ onChangeToggle, checked, id, token }) => {
  return (
    <div className={styles.div}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChangeToggle(id, `{"isComplete":${!checked}}`, token)}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.session.token,
});

const mapDispatchToProps = dispatch => ({
  onChangeToggle: (id, status, token) =>
    dispatch(toggleTaskOperation(id, status, token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToggleButton);
