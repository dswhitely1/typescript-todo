import React from 'react';
import { useAppSelector } from '../hooks/useRedux';
import Register from '../components/Register';
import Login from '../components/Login';

export const Auth = () => {
  const { register } = useAppSelector((state) => state.auth);

  return <>{register ? <Register /> : <Login />}</>;
};

export default Auth;
