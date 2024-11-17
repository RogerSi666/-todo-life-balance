import React, { useState } from 'react';
import { Header } from '../components/Header';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { Result } from '../components/Result';
import { Task } from '../types';

export const Test: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
      {tasks.length > 0 && <Result tasks={tasks} />}
    </div>
  );
};
