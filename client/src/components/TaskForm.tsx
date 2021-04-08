import React from 'react';
import { useForm } from '../hooks/useForm';
import { Form, Button } from 'semantic-ui-react';
import { start, createTaskSuccess, toggleForm } from '../store/tasks/taskSlice';
import { useAppDispatch } from '../hooks/useRedux';

interface ITaskFormValues {
  title: string;
  description: string;
}

export const TaskForm = () => {
  const dispatch = useAppDispatch();
  const {
    values,
    handleChange,
    handleSubmit,
    handleReset,
  } = useForm<ITaskFormValues>({ title: '', description: '' }, () => {
    dispatch(start());
    const newTask = {
      ...values,
      id: Math.floor(Math.random() * 1000) + 1,
      completed: false,
      userId: 1,
    };
    dispatch(createTaskSuccess(newTask));
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
