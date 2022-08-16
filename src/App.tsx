import { useState,createContext, useContext } from 'react'
import { Routes, Route, Link } from "react-router-dom";
// CSS - imports
import './App.css'
// ASSETS - imports

// COMPONENTS - imports
import Header from './components/header';
import Home from './pages/home'
import Results from './pages/results';




function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/results' element={<Results/>}/>
      </Routes>
    </div>
  )
}

export default App
