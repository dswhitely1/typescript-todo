import React from 'react';
import { ITask } from './TaskList';
import { Button, Segment } from 'semantic-ui-react';
import { start, changeTaskStatus } from '../store/tasks/taskSlice';
import { useAppDispatch } from '../hooks/useRedux';

interface ITaskItemProps {
  task: ITask;
}

export const TaskItem = ({
  task: { title, description, completed, id },
}: ITaskItemProps) => {
  const dispatch = useAppDispatch();

  const changeTaskState = (id: number) => {
    dispatch(start());
    dispatch(changeTaskStatus(id));
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
