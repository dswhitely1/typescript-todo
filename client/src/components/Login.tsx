import React from 'react';
import { useForm } from '../hooks/useForm';
import { Container, Grid, Form, Button } from 'semantic-ui-react';

interface ILoginForm {
  username: string;
  password: string;
}

export const Login = () => {
  const { values, handleChange, handleSubmit } = useForm<ILoginForm>(
    { username: '', password: '' },
    () => console.log(values)
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
