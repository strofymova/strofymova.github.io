import React, { useState, useEffect } from 'react';
import styles from './modal_manager.module.css';
import Modal from '../modal/Modal';
import { useTranslation } from 'react-i18next';
interface IModalManagerProps {
  initialText?: string;
}

const ModalManager: React.FC<IModalManagerProps> = ({ initialText }) => {
  const { t } = useTranslation();
  const isShowingModal = false;
  const [showModal, setShowModal] = useState(isShowingModal);
  const [inputText, setInputText] = useState(initialText);
  useEffect(() => {
    setInputText(initialText);
  }, [initialText]);

  const handleOpenModalClick = () => {
    setShowModal(true);
  };
  const handleCloseModalClick = () => {
    setShowModal(false);
  };
  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className={styles.main}>
      <input type="text" value={inputText} onChange={handleChangeInput}></input>
      <button onClick={handleOpenModalClick}>{t('open')}</button>
      <Modal visible={showModal} onClose={handleCloseModalClick}>
        <div>{inputText}</div>
      </Modal>
    </div>
  );
};

export default ModalManager;
