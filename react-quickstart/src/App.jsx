import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  const userName = "Alex";

  return (
    <div>
      <Welcome name={userName} />
    </div>
  );
}

export default App;












