import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const styles = {
  container: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center"
  },
  heading: {
    color: "#007bff"
  }
};

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Styled with Inline CSS</h1>
    </div>
  );
}

export default App;


