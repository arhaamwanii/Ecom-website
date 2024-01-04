import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  <h1> Trial code</h1>
    </>
  )
}

export default App
//
