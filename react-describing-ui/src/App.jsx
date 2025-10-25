import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Profile() {
  return (
    <img
      src="https://i.imgur.com/GqTkybQ_d.webp?maxwidth=520&shape=thumb&fidelity=high"
      alt="Photo of a historian"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing historians</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
