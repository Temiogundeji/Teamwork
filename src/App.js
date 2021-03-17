import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import LoginPage from './pages/login-page/loginPage';
import LandingPage from './pages/landing-page/landingPage';
import RegisterPage from './pages/register-page/registerPage';
import ProfilePage from './pages/profile';

function App() {
  return (
    <Router>       
      <LandingPage path="/" /> 
      <LoginPage path="/login" />
      <RegisterPage path="/register" />
      <ProfilePage path="/profile" />
    </Router>
  );
}

export default App;
