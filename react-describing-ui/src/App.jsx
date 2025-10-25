import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile.jsx';

const person = {
  name: 'Zebra',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.pinimg.com/736x/80/dc/cf/80dccf1b9be4d877a362b913b93b2258.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Eat</li>
        <li>Sleep</li>
        <li>Work, repeat</li>
      </ul>
    </div>
  );
}



