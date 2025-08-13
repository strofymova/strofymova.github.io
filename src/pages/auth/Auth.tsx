import React from 'react';
import Layout from '../../widgets/layout/Layout';
import SingInBlock from './sign_in_block/SingInBlock';
import styles from './auth.module.css';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import { useLocation } from 'react-router-dom';
import SingUp from './SignUp';

const Auth: React.FC = () => {
  const styleName = useThemeStyles(styles.main, {
    light: styles.light,
    dark: styles.dark,
  });
  const location = useLocation();
  const showSignUp = location.pathname.includes('/signUp');
  return (
    <>
      <Layout>
        <SingInBlock className={styleName} />
      </Layout>
      {showSignUp && <SingUp />}
    </>
  );
};

export default Auth;
