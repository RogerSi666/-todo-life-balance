import React, { useState } from 'react';
import { Task } from '../types';

type Props = {
  addTask: (task: Task) => void;
};

export const TaskForm: React.FC<Props> = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [timeSpent, setTimeSpent] = useState(0);
  const [category, setCategory] = useState<Task['category']>('Work');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || timeSpent <= 0) return;
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      timeSpent,
      category,
    };
    addTask(newTask);
    setTitle('');
    setTimeSpent(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Time spent (min)"
        value={timeSpent}
        onChange={(e) => setTimeSpent(Number(e.target.value))}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value as Task['category'])}>
        <option value="Work">Work</option>
        <option value="Health">Health</option>
        <option value="Leisure">Leisure</option>
        <option value="Family">Family</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};
