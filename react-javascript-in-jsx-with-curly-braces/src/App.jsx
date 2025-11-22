import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function TodoList() {
  return (
    <ul style={
      {
      backgroundColor: 'black',
      color: 'yellow'
      }
    }>
      <li>Study react</li>
      <li>Finish the deliverables in BPM</li>
      <li>Finish laundry and clean the house</li>
    </ul>
  );
}
