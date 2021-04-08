import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { toggleForm } from '../store/tasks/taskSlice';
import { toggleRegister, logout } from '../store/auth/authSlice';

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const {
    tasks: { showForm },
    auth: { token, register },
  } = useAppSelector((state) => state);
  return (
    <Menu size="large">
      <Container>
        <Menu.Item header>Task Application</Menu.Item>
        <Menu.Menu position="right">
          {token && (
            <Menu.Item>
              <Button
                inverted
                positive
                content={showForm ? 'Close' : 'Add Task'}
                onClick={() => dispatch(toggleForm())}
              />
            </Menu.Item>
          )}
          {token ? (
            <Menu.Item>
              <Button
                inverted
                positive
                content="Sign Out"
                onClick={() => dispatch(logout())}
              />
            </Menu.Item>
          ) : (
            <Menu.Item>
              <Button
                inverted
                positive
                content={register ? 'Log In' : 'Register'}
                onClick={() => dispatch(toggleRegister())}
              />
            </Menu.Item>
          )}
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navigation;
