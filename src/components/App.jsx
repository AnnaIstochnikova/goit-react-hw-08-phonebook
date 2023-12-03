import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/home/home';
import { Login } from 'pages/login/login';
import { Layout } from 'pages/layout/layout';
import { Contacts } from 'pages/contacts/contacts';
import { Register } from 'pages/register/register';
import { NotFound } from 'pages/not-found/not-found';
import { PrivateRoute } from './phonebook/private-route/private-route';
import { ProtectedRoute } from './phonebook/protected-route/protected-route';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <ProtectedRoute element={<Register />} redirect="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute element={<Login />} redirect="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute element={<Contacts />} redirect="/login" />}
          />
        </Route>
        <Route path="*" element={<NotFound />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
