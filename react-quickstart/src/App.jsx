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

  const userName = 'Aaron'; // Displaying Data

  const isLoggedIn = true; // Conditional Rendering

  const friends = ['Justin', 'Nabunturan', 'Balmond'];

  return (
    <div>
      <h1>{isLoggedIn ? `Welcome to X, ${userName}!` : 'Please log in'}</h1>
      <p>This is a simple JSX markup example.</p>
        <h1>Friend List:</h1>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
      <Greeting />
    </div>
  );
};

export default App
