import React, { useState, useEffect } from 'react';
import styles from './modal_manager.module.css';
import Modal from '../modal/Modal';
import { useTranslation } from 'react-i18next';
import { useModalManager } from '../../hooks/useModalShowing';

interface IModalManagerProps {
  initialText?: string;
}

const ModalManager: React.FC<IModalManagerProps> = ({ initialText }) => {
  const { t } = useTranslation();
  const { isModalOpen, openModal, closeModal } = useModalManager();

  const [inputText, setInputText] = useState(initialText);
  useEffect(() => {
    setInputText(initialText);
  }, [initialText]);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className={styles.main}>
      <input type="text" value={inputText} onChange={handleChangeInput}></input>
      <button onClick={openModal}>{t('open')}</button>
      <Modal visible={isModalOpen} onClose={closeModal}>
        <div>{inputText}</div>
      </Modal>
    </div>
  );
};

export default ModalManager;
