import { useState } from 'react'

import './App.css'

function App() {
  
  const[counter,setCounter]=useState(0);


  const addvalue = () => {
    setCounter(counter+1) 
  }
  const removeValue = () => {
    setCounter(counter-1) 
  }
  return (
    <>
        <h1>Counter Value: {counter}</h1>

        <button 
        onClick={addvalue}>Add Value:{counter}</button>
         <br/>
        <button
        onClick={removeValue}>Remove Value:{counter}</button>
      
      
    </>
  )
}

export default App
