import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting';
import Greeting from './Greeting';
import { WelcomeMessage, GoodbyeMessage } from './Messages';

function App() {
  return (
    <div>
      <h1>Welcome to Importing and Exporting Components</h1>
      <Greeting />
      <WelcomeMessage />
      <GoodbyeMessage />
    </div>
  );
}

export default App;
