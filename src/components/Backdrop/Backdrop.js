/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

class Backdrop extends Component {
  state = {
    showModal: true,
    closeOnEsc: true,
    closeOnclick: true,
  };

  componentDidMount() {
    const { closeOnEsc } = this.state;
    if (closeOnEsc) {
      window.addEventListener('keydown', this.closeOnEsc);
    }
  }

  componentWillUnmount() {
    const { closeOnEsc } = this.state;
    if (closeOnEsc) {
      window.removeEventListener('keydown', this.closeOnEsc);
    }
  }

  closeOnEsc = e => {
    if (e.code === 'Escape') {
      this.setState({ showModal: false });
      this.props.onClose();
    }
  };

  closeModal = e => {
    if (
      this.state.showModal === true &&
      this.state.closeOnclick === true &&
      e.target.id === 'BaseComponent'
    ) {
      this.setState({ showModal: false });
      this.props.onClose();
    }
  };

  render() {
    const { showModal } = this.state;
    const { children } = this.props;
    return showModal ? (
      <div
        className={styles.overlay}
        onClick={this.closeModal}
        id="BaseComponent"
      >
        <div className={styles.modal} />
        {children}
      </div>
    ) : null;
  }
}

Backdrop.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Backdrop;
