import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting() {
  return <h1>Hello from Greeting!</h1>;
}

function App() {
  return (
    <div>
      <Greeting />
      <p>This is nested inside App.</p>
    </div>
  );
}

export default App;
