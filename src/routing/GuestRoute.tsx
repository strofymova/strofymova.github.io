import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../app/store';
import { tokenSelectors } from '../app/store/token';

export type GuestRouteProps = {
  children: React.ReactNode;
};

export const GuestRoute: FC<GuestRouteProps> = ({ children }) => {
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);
  if (token) {
    return <Navigate to="/profile" replace />;
  } else {
    return <>{children}</>;
  }
};
