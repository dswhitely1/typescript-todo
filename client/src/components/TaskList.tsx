import React, { useEffect, useState } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import TaskSection from './TaskSection';
import { start, deleteTaskSuccess } from '../store/tasks/taskSlice';
import { useAppDispatch } from '../hooks/useRedux';

export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  userId: number;
}

interface ITaskListProps {
  tasks: ITask[];
}

export const TaskList = ({ tasks }: ITaskListProps) => {
  const dispatch = useAppDispatch();
  const [taskList, setTaskList] = useState<{
    active: ITask[];
    completed: ITask[];
  }>(() => ({
    active: tasks.filter((task) => !task.completed),
    completed: tasks.filter((task) => task.completed),
  }));

  useEffect(() => {
    setTaskList(() => ({
      active: tasks.filter((task) => !task.completed),
      completed: tasks.filter((task) => task.completed),
    }));
  }, [tasks]);

  const clearCompleted = () => {
    const clearIds = taskList.completed.map(({ id }) => id);
    dispatch(start());
    dispatch(deleteTaskSuccess(clearIds));
  };

  return (
    <>
      <Segment.Group>
        <TaskSection sectionTitle="Active Tasks" tasks={taskList.active} />
      </Segment.Group>
      <Segment.Group>
        <TaskSection
          sectionTitle="Completed Tasks"
          tasks={taskList.completed}
        />
      </Segment.Group>
      <Button positive content="Clear Completed" onClick={clearCompleted} />
    </>
  );
};

export default TaskList;
