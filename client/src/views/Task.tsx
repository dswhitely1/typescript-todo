import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { Grid, Container } from 'semantic-ui-react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { getTasksSuccess, start, failure } from '../store/tasks/taskSlice';
import axios from 'axios';

export const Task = () => {
  const dispatch = useAppDispatch();
  const {
    tasks: { tasks, showForm },
    auth: { token },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(start());
    axios
      .get('/api/tasks', { headers: { authorization: `Bearer ${token}` } })
      .then((res) => dispatch(getTasksSuccess(res.data)))
      .catch((error) => dispatch(failure(error)));
  }, []);

  return (
    <Container>
      <Grid>
        <Grid.Column width={showForm ? 10 : 16}>
          <TaskList tasks={tasks} />
        </Grid.Column>
        {showForm && (
          <Grid.Column width={6}>
            <TaskForm />
          </Grid.Column>
        )}
      </Grid>
    </Container>
  );
};

export default Task;
