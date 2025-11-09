import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Original HTML (for reference)
  // <div class="container">
  //   <h1>Hello World!</h1>
  //   <p>This is written in HTML.</p>
  // </div>

  // Converted JSX version
  return (
    <div className="container">
      <h1>Hello, React!</h1>
      <p>This is written in JSX instead of plain HTML.</p>
    </div>
  );
}

export default App;
