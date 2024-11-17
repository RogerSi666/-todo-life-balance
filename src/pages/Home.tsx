import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => (
  <div>
    <h1>Welcome to Life Balance Todo</h1>
    <Link to="/test">Start Test</Link>
  </div>
);
