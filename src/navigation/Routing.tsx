import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from '../pages/profile/Profile';
import Basket from '../pages/basket/Basket';
import NotFound from '../pages/not_found/NotFound';
import Home from '../pages/home/Home';
import Auth from '../pages/auth/Auth';
import { ProtectedRoute } from './ProtectedRoute';
import { GuestRoute } from './GuestRoute';

export type RoutingState = {
  from ?: Location;
};

export type RoutingProps = {
  children: React.ReactNode;
};

export const Routing: FC<RoutingProps> = ({ children }) => (
  <BrowserRouter>
    {children}
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/auth"
        element={
          <GuestRoute>
            <Auth />
          </GuestRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/basket" element={<Basket />} />
      <Route
        path="/signUp"
        element={
          <GuestRoute>
            <Auth />
          </GuestRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
