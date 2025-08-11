import React from 'react';
import { ProfileCompletedForm } from 'src/widgets/form/profile_completed_form';
import Layout from 'src/widgets/layout/Layout';

const Profile: React.FC = () => (
  <Layout>
    <ProfileCompletedForm className="profile" />
  </Layout>
);

export default Profile;
