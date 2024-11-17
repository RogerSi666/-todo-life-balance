import React from 'react';
import { Task } from '../types';

type Props = {
  tasks: Task[];
};

export const Result: React.FC<Props> = ({ tasks }) => {
  const totals = tasks.reduce(
    (acc, task) => {
      acc[task.category] += task.timeSpent;
      return acc;
    },
    { Work: 0, Health: 0, Leisure: 0, Family: 0 }
  );

  return (
    <div>
      <h2>Results</h2>
      <p>Work: {totals.Work} min</p>
      <p>Health: {totals.Health} min</p>
      <p>Leisure: {totals.Leisure} min</p>
      <p>Family: {totals.Family} min</p>
    </div>
  );
};
