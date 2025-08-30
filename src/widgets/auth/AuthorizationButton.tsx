import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useModalManager } from '../../hooks/useModalManager';
import { ProfileCompletedForm } from '../form/profile_completed_form';
import Modal from '../modal/Modal';
import { SingInBlock } from '../../pages/auth/sign_in_block/SingInBlock';
import s from './authorization.module.css';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import { SingUpBlock } from '../../pages/auth/sign_up_block/SingUpBlock';
import { useSelector } from 'react-redux';
import { tokenSelectors } from '../../app/store/token';
import { RootState } from '../../app/store';

enum ModalType {
  signIn,
  signUp,
  profile,
}

interface ModalState {
  type: ModalType;
  title?: string;
}

function Content({ type }: ModalState) {
  switch (type) {
    case ModalType.signIn:
      return <SingInBlock className="signIn" />;
    case ModalType.signUp:
      return <SingUpBlock className="signUp" />;
    case ModalType.profile:
      return <ProfileCompletedForm className="profile" />;
  }
}

const AuthorizationButton: React.FC = () => {
  const { t } = useTranslation();
  const { isModalOpen, openModal, closeModal } = useModalManager();
  const styleName = useThemeStyles(s.main, {
    light: s.light,
    dark: s.dark,
  });

  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);
  const [_isAuthorizated, setAuthorizated] = useState<boolean>(token !== null);

  useEffect(() => {
    setAuthorizated(token !== null);
  }, [token]);

  const [modalType, setModalType] = useState(_isAuthorizated ? ModalType.profile : ModalType.signIn);
  const [title, setTitle] = useState(
    _isAuthorizated ? t('widgets.authorization.profile') : t('widgets.authorization.signIn')
  );

  const handleOnCloseModal = () => {
    closeModal();
    setModalType(_isAuthorizated ? ModalType.profile : ModalType.signIn);
  };

  useEffect(() => {
    setModalType(_isAuthorizated ? ModalType.profile : ModalType.signIn);
    closeModal();
  }, [_isAuthorizated, closeModal]);

  useEffect(() => {
    switch (modalType) {
      case ModalType.signIn:
        setTitle(t('widgets.authorization.signIn'));
        break;
      case ModalType.profile:
        setTitle(t('widgets.authorization.profile'));
        break;
    }
  }, [modalType, t]);

  return (
    <>
      <button className={styleName} onClick={openModal}>
        {title}
      </button>
      <Modal className={s.modal} title={title} visible={isModalOpen} onClose={handleOnCloseModal}>
        <Content type={modalType} />
      </Modal>
    </>
  );
};

export default AuthorizationButton;
