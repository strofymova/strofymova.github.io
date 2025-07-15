import React, { useContext } from 'react';
import styles from './modal.module.css'; // Assuming CSS Modules
import { useTranslation } from 'react-i18next';
import { LocaleContext } from '../../../app/App'

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible = false, children, onClose }) => {
  const {locale, handleSwitchLocale} = useContext(LocaleContext);
  const {t} = useTranslation();
  
  if (!visible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} title={t("close")}>
          &times;
        </button>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;