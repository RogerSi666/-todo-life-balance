import React from 'react';
import { Task } from '../types';

type Props = {
  tasks: Task[];
};

export const TaskList: React.FC<Props> = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        {task.title} - {task.timeSpent} min ({task.category})
      </li>
    ))}
  </ul>
);
