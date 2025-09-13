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
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is a simple JSX markup example.</p>
      <Greeting />
    </div>
  );
};

export default App
