import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Child Component
const Newsfeed = () => {
  const postStyle = {
    color: 'gray',
  };

  return (
    <>
      <h2>Newsfeed:</h2>
      <h3 style={postStyle}>Popol posted a new photo.</h3>
      <h3 style={postStyle}>Kai posted a new video.</h3>
      <h3 style={postStyle}>Kai just hit a highscore of 8 click counts!</h3>
    </>
  );
};

// Child Component
const StatusReset = () => {
  return <h2>Click here to reset your status</h2>;
};

// Parent Component (App.jsx)
const App = () => {
  const styleOne = {
    color: 'gray',
    fontSize: '1rem',
  };

  const friendListStyle = {
    color: 'gray',
    fontSize: '1rem',
  };

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

   const [message, setMessage] = useState('Hello, World!');

   const changeMessage = () => {
    const newMessage = window.prompt("Enter a new message:");
    if (newMessage) {
      setMessage(newMessage);
    }
  };

  

  
  const isLoggedIn = true; //True or False
  const userName= 'Aaron'; //Displaying Data
  const friends = ['Popol', 'Kai', 'Justin Nabunturan']

  //Here, it shows that when a user is logged in, it will greet the user with it's username, but if the user is not, it will prompt them to login
  return (
    <div>
      <h1>{isLoggedIn ? `Welcome to X, ${userName}!` : 'Please log in'}</h1>
        <p style={styleOne}>How are you doing lately? </p>
         <h1>{message}</h1>
      <button onClick={changeMessage}>Share what's on your mind!</button>
      <h3>Minigame: Click the button to increase count:</h3>
        <button onClick={handleClick}>Click Me</button>
          <p>Count: {count}</p>
      <Newsfeed />
      <h3>Friend List:</h3>
        <ul style={friendListStyle}>
          {friends.map((friend, index) =>(
            <li key={index}>{friend}</li>
          ))}
        </ul>

      <StatusReset message={message} />
      <button onClick={() => setMessage('Status reset. Enter again.')}>
        Reset Status
      </button>
        
    </div>
    
    
  );
};

export default App
