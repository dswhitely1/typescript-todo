import React from 'react';
import { useForm } from '../hooks/useForm';
import { Button, Container, Form } from 'semantic-ui-react';

interface IRegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const { values, handleChange, handleSubmit } = useForm<IRegisterForm>(
    { username: '', password: '', confirmPassword: '' },
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
