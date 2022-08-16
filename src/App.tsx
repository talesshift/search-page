import { useState,createContext } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Header from './components/header';
import Home from './pages/home'
import Results from './pages/results';

const breakpoints = [601, 993, 1201]
const mq = createContext(breakpoints.map(bp => `@media (min-width: ${bp}px)`))


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
