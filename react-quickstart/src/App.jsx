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

  const friends = ['Justin', 'Nabunturan', 'Balmond']; //

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const [message, setMessage] = useState('Hello, World!');

  const changeMessage = () => {
    setMessage('You changed the message!');
  };

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
      <h1>{message}</h1>
      <button onClick={changeMessage}>Change Message</button>
      <Greeting />

       <h3>Click the button to increase count:</h3>
        <button onClick={handleClick}>Click Me</button>
          <p>Count: {count}</p>

    </div>
  );
};

export default App
