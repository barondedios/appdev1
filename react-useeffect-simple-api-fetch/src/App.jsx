import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostFetchAsync from "./PostFetchAsync.jsx";
import TodosFetchAsync from "./TodosFetchAxios.jsx";
import UsersFetch from "./UsersFetch.jsx";

function App() {
  return (
    <div>
      <h1>Data Fetch Examples</h1>
      <PostFetchAsync />
      <TodosFetchAsync />
      <UsersFetch />
    </div>
  );
}

export default App;