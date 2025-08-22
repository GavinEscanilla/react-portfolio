import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";
import Nav from './components/Nav';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App bg-gray-900 h-full w-full"> 
<Nav />
      </div>
  )
}

export default App
