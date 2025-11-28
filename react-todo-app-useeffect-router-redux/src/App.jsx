import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Todos from "./pages/Todos.jsx"

import './App.css'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/todos" element={<Todos/>}/>
        </Routes>
     </BrowserRouter>
        
    </>
  )
}

export default App