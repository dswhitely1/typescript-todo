import React from 'react';
import { useForm } from '../hooks/useForm';
import { Container, Form, Button } from 'semantic-ui-react';
import { useAppDispatch } from '../hooks/useRedux';
import { start, success, failure } from '../store/auth/authSlice';
import axios from 'axios';

interface ILoginForm {
  username: string;
  password: string;
}

export const Login = () => {
  const dispatch = useAppDispatch();
  const { values, handleChange, handleSubmit } = useForm<ILoginForm>(
    { username: '', password: '' },
    () => {
      dispatch(start());
      const authToken = btoa(`${values.username}:${values.password}`);
      axios
        .get('/api/auth/login', {
          headers: { authorization: `Basic ${authToken}` },
        })
        .then((res) => dispatch(success(res.data.token)))
        .catch((error) => dispatch(failure(error)));
    }
  );

  return (
    <Container style={{ width: 300 }}>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Username"
          placeholder="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <Form.Input
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <Button positive type="submit" content="Login" />
      </Form>
    </Container>
  );
};

export default Login;
