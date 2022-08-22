import { useState,createContext, useContext } from 'react'
import { Routes, Route, Link } from "react-router-dom";
// CSS - imports
import './App.css'
// ASSETS - imports

// COMPONENTS - imports
import Header from './components/header';
import { SearchContextProvider } from './components/searchContext';
import Home from './pages/home'
import Results from './pages/results';

function App() {
  return (
    
    <div className='App'>
      <SearchContextProvider>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/results' element={<Results/>}/>
        </Routes>
      </SearchContextProvider>
    </div>

  )
}

export default App
