import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from '../pages/profile/Profile';
import Basket from '../pages/basket/Basket';
import NotFound from '../pages/not_found/NotFound';
import Home from '../pages/home/Home';
import Auth from '../pages/auth/Auth';
import SingUp from '../pages/auth/SignUp';

export type NavigationState = {
  from?: Location;
};

export type NavigationProps = {
  children: React.ReactNode;
};

export const Navigation: FC<NavigationProps> = ({ children }) => (
  <BrowserRouter>
    {children}
    <Routes>
      <Route index element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/signUp" element={<SingUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
