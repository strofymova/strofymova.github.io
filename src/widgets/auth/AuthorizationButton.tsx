import React, { ReactNode, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useModalManager } from 'src/hooks/useModalManager';
import { ProfileCompletedForm } from '../form/profile_completed_form';
import Modal from '../modal/Modal';
import { SingInBlock } from 'src/pages/auth/SingInBlock/SingInBlock';
import s from './authorization.module.css';
import { useThemeStyles } from 'src/hooks/useThemeStyles';
import { SingUpBlock } from 'src/pages/auth/SingUpBlock';
import { Button } from 'antd';

interface IAuthorizationButtonProps {
  isAuthorizated?: boolean;
}

enum ModalType {
  signIn,
  signUp,
  profile,
}

interface ModalState {
  type: ModalType;
  handleOnClickSignUp?: () => void;
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

function SignUpButton({ type, handleOnClickSignUp, title }: ModalState): ReactNode {
  if (type === ModalType.signIn) {
    return (
      <Button className={s.signUpBtn} type="primary" onClick={handleOnClickSignUp}>
        {title}
      </Button>
    );
  }
  return null;
}

const AuthorizationButton: React.FC<IAuthorizationButtonProps> = ({
  isAuthorizated: isAuthorizated = false,
}: IAuthorizationButtonProps) => {
  // console.log("update AuthorizationButton")
  const { t } = useTranslation();
  const { isModalOpen, openModal, closeModal } = useModalManager();
  const [modalType, setModalType] = useState(isAuthorizated ? ModalType.profile : ModalType.signIn);
  const [title, setTitle] = useState(
    isAuthorizated ? t('widgets.authorization.profile') : t('widgets.authorization.signIn')
  );

  const styleName = useThemeStyles(s.main, {
    light: s.light,
    dark: s.dark,
  });

  const handleOnClickSignUp = () => {
    setModalType(ModalType.signUp);
  };

  const handleOnCloseModal = () => {
    closeModal();
    setModalType(isAuthorizated ? ModalType.profile : ModalType.signIn);
  };

  useEffect(() => {
    setModalType(isAuthorizated ? ModalType.profile : ModalType.signIn);
    closeModal();
  }, [isAuthorizated, closeModal]);

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
      <Modal visible={isModalOpen} onClose={handleOnCloseModal}>
        <Content type={modalType} />
        <SignUpButton
          type={modalType}
          handleOnClickSignUp={handleOnClickSignUp}
          title={t('widgets.authorization.signUp')}
        />
      </Modal>
    </>
  );
};

export default AuthorizationButton;
