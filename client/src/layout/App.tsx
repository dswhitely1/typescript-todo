import React from 'react';
import Navigation from '../views/Navigation';
import Task from '../views/Task';
import { useAppSelector } from '../hooks/useRedux';
import Auth from '../views/Auth';

export const App = () => {
  const { token } = useAppSelector((state) => state.auth);
  return (
    <>
      <Navigation />
      {token ? <Task /> : <Auth />}
    </>
  );
};

export default App;
