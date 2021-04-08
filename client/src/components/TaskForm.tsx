import React from 'react';
import { useForm } from '../hooks/useForm';
import { Form, Button } from 'semantic-ui-react';
import {
  start,
  createTaskSuccess,
  toggleForm,
  failure,
} from '../store/tasks/taskSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import axios from 'axios';

interface ITaskFormValues {
  title: string;
  description: string;
}

export const TaskForm = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const {
    values,
    handleChange,
    handleSubmit,
    handleReset,
  } = useForm<ITaskFormValues>({ title: '', description: '' }, () => {
    dispatch(start());
    axios
      .post('/api/tasks', values, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => dispatch(createTaskSuccess(res.data)))
      .catch((error) => dispatch(failure(error)));
    handleReset();
    dispatch(toggleForm());
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        fluid
        label="Title"
        placeholder="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <Form.TextArea
        label="Description"
        placeholder="Enter your description"
        name="description"
        onChange={handleChange}
        value={values.description}
      />
      <Button positive type="submit" content="Submit" />
    </Form>
  );
};

export default TaskForm;
