import React from 'react';
import styles from './modal.module.css';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useThemeStyles } from 'src/hooks/useThemeStyles';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ visible = false, children, onClose, title }) => {
  const { t } = useTranslation();
  const styleName = useThemeStyles(styles.modalContent, {
    light: styles.light,
    dark: styles.dark,
  });
  return visible
    ? createPortal(
        <div className={styles.modalOverlay}>
          <div className={styleName}>
            <div className={styles.title}>
              <span>{title}</span>
              <Button
                className={styles.closeButton}
                type="primary"
                icon={<CloseOutlined />}
                onClick={onClose}
                size="small"
                title={t('close')}
              />
            </div>
            <div className={styles.modalBody}>{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
