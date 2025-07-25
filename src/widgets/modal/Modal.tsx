import React from 'react';
import styles from './modal.module.css';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible = false, children, onClose }) => {
  const { t } = useTranslation();

  return visible
    ? createPortal(
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={onClose} title={t('close')}>
              &times;
            </button>
            <div className={styles.modalBody}>{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
