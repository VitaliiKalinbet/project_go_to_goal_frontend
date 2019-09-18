import React, { Component } from 'react';
import styles from './backdropComponent.module.css';

const backdropComponent = ({ closeOnEsc, closeOnclick }) => BaseComponent => {
  return class BackdropComponent extends Component {
    state = {
      showModal: true,
      closeOnEsc,
      closeOnclick,
    };

    componentDidMount() {
      if (this.state.closeOnEsc) {
        window.addEventListener('keydown', this.closeOnEsc);
      }
    }

    componentWillUnmount() {
      if (this.state.closeOnEsc) {
        window.removeEventListener('keydown', this.closeOnEsc);
      }
    }

    closeOnEsc = e => {
      if (e.code === 'Escape') {
        this.setState({ showModal: false });
      }
    };

    closeModal = e => {
      if (
        this.state.showModal === true &&
        this.state.closeOnclick === true &&
        e.target.id === 'BaseComponent'
      ) {
        this.setState({ showModal: false });
      }
    };

    closeBackdrop = () => {
      if (this.state.showModal === true) {
        this.setState({ showModal: false });
      }
    };

    render() {
      return this.props.children({
        showModal: this.state.showModal,
        closeOnEsc: this.state.closeOnEsc,
      });
    }
  };
};

export default backdropComponent;

// render() {
//   const { showModal } = this.state;
//   return showModal ? (
//     <div
//       className={styles.overlay}
//       onClick={this.closeModal}
//       id="BaseComponent"
//     >
//       <div className={styles.modal}>
//         <BaseComponent />
//       </div>
//     </div>
//   ) : (
//     <BaseComponent />
//   );
// }
