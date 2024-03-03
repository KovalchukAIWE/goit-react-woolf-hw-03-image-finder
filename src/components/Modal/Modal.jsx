import { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressKey);
  }

  handlePressKey = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.handleOverlayClick}>
        <div className={styles.modal}>
          <img src={this.props.img} alt={this.props.src} />
        </div>
      </div>
    );
  }
}

export default Modal;
