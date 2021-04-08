import React from 'react';
import { useForm } from '../hooks/useForm';
import { Button, Container, Form } from 'semantic-ui-react';
import { useAppDispatch } from '../hooks/useRedux';
import { start, success, failure } from '../store/auth/authSlice';
import axios from 'axios';

interface IRegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const dispatch = useAppDispatch();
  const { values, handleChange, handleSubmit } = useForm<IRegisterForm>(
    { username: '', password: '', confirmPassword: '' },
    () => {
      dispatch(start());
      axios
        .post('/api/auth/register', values)
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
        <Form.Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        <Button positive type="submit" content="Register" />
      </Form>
    </Container>
  );
};

export default Register;
