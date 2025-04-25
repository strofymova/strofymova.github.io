import React from 'react';
import styles from './modal.module.css'; // Assuming CSS Modules

interface ModalProps {
  visible?: boolean;
  onClose?: () => void; // Optional for Storybook controls
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible = false, children }) => {
  if (!visible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} aria-label="Закрыть">
          &times;
        </button>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
