import React from 'react';
import { useAppSelector } from '../hooks/useRedux';
import { Grid, Container } from 'semantic-ui-react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export const Task = () => {
  const { tasks, showForm } = useAppSelector((state) => state.tasks);
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
