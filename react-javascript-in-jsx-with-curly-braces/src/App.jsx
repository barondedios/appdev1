import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const dog = {
  name: 'Browny',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function EatList() {
  return (
    <div style={dog.theme}>
      <h1>{dog.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.pinimg.com/736x/f1/97/40/f1974036c73e5421aced96730d6ed335.jpg"
        alt="Browny"
      />
      <ul>
        <li>Eat</li>
        <li>Sleep</li>
        <li>Repeat</li>
      </ul>
    </div>
  );
}
