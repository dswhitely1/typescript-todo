import React from 'react';
import { Segment } from 'semantic-ui-react';
import { ITask } from './TaskList';
import TaskItem from './TaskItem';

interface ITaskSectionProps {
  sectionTitle: string;
  tasks: ITask[];
}

export const TaskSection = ({ sectionTitle, tasks }: ITaskSectionProps) => {
  return (
    <>
      <Segment>{sectionTitle}</Segment>
      <Segment.Group>
        {tasks.map((task, key) => (
          <TaskItem task={task} key={key} />
        ))}
      </Segment.Group>
    </>
  );
};

export default TaskSection;
