import React from 'react';
import { ITask } from './TaskList';
import { Button, Segment } from 'semantic-ui-react';
import { start, updateTaskSuccess, failure } from '../store/tasks/taskSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import axios from 'axios';

interface ITaskItemProps {
  task: ITask;
}

export const TaskItem = ({
  task: { title, description, completed, id },
}: ITaskItemProps) => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const changeTaskState = (id: number) => {
    dispatch(start());
    axios
      .put(
        `/api/tasks/${id}`,
        { completed: !completed },
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => dispatch(updateTaskSuccess(res.data)))
      .catch((error) => dispatch(failure(error)));
  };

  return (
    <Segment>
      <h4>{title}</h4>
      <p>{description}</p>
      <Button
        content={completed ? 'Move to Active' : 'Complete'}
        onClick={() => changeTaskState(id)}
      />
    </Segment>
  );
};

export default TaskItem;
