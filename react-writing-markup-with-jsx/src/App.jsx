import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Aaron";
  const year = new Date().getFullYear();

  return (
    <div className="app">
      {/* One root element rule */}
      <header>
        <h1>JSX Rules Demonstration</h1>
      </header>

      <main>
        {/* Using curly braces for JavaScript expressions */}
        <p>Hello, {name}! Welcome to JSX learning.</p>
        <p>The current year is {year}.</p>

        {/* All tags must be closed properly */}
        <img
          src="https://via.placeholder.com/150"
          alt="Example"
          width="150"
          height="150"
        />

        {/* camelCase attributes example */}
        <button onClick={() => alert("Button clicked!")}>
          Click Me
        </button>
      </main>
    </div>
  );
}

export default App;


