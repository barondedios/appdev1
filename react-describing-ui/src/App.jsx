import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { people } from './data.js';
import { getImageUrl } from './utils.js';
import ComponentA from './ComponentA';
import ComponentC from './ComponentC';

function RootComponent() {
  return (
    <div>
      <h1>Why understanding your UI as trees is useful?</h1>
      <ComponentA />
      <ComponentC />
    </div>
  );
}

export default RootComponent;

