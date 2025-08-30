import React from 'react';
import { ProfileCompletedForm } from '../../widgets/form/profile_completed_form';
import Layout from '../../widgets/layout/Layout';
import styles from './profile.module.css';
import { useThemeStyles } from '../../hooks/useThemeStyles';

const Profile: React.FC = () => {
  const styleName = useThemeStyles(styles.profile, {
    light: styles.light,
    dark: styles.dark,
  });
  return (
    <Layout>
      <ProfileCompletedForm className={styleName} />
    </Layout>
  );
};

export default Profile;
