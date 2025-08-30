import React from 'react';
import { Link } from 'react-router-dom';
import s from './not_found.module.css';
import Layout from '../../widgets/layout/Layout';

const NotFound: React.FC = () => (
  <Layout>
    <div className={s.main}>
      <div>404</div>
      <Link to="/">to home</Link>
    </div>
  </Layout>
);

export default NotFound;
