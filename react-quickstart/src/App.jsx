import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Child Component
const Greeting = () => {
  return <h2>Hello from Greeting Component!</h2>;
};

// Parent Component (App.jsx)
const App = () => {
  const headingStyle = {
    color: 'Gray',
    fontSize: '2rem',
  };

  const userName = 'Aaron';

  return (
    <div>
      <h1 style={headingStyle}>Welcome to React, {userName}!</h1>
      <p>This is a simple JSX markup example.</p>
      <Greeting />
    </div>
  );
};

export default App
