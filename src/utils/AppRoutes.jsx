import React from 'react'
import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from '../modules/landing/LoginPage';
import CheckAuth from "../lib/CheckAuth"
import DashboardPage from '../modules/dashboard/DashboardPage';

const AppRoutes = () => [
  <Fragment>
    <Route
      path="/"
      element={
        <CheckAuth>
          <Login />
        </CheckAuth>
      }
    />
    <Route
      path="/dashboard"
      element={
        <CheckAuth>
          <DashboardPage />
        </CheckAuth>
      }
    />
  </Fragment>
]

export default AppRoutes;
