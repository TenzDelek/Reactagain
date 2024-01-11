import { useState } from 'react'
import './App.css'

function App() {
 const [counter,setcounter]=useState(0);//remember set counter is a function
 
  return (
    <>
     <h1>Tenzin Delek and Code</h1>
     <p>Counter is {counter}</p>
     
     <button onClick={()=> counter<20 && setcounter(prev => prev +1)}>Add</button> 
     <button onClick={()=>counter>0 && setcounter(counter-1)}>Subtract</button>
    
    </>
  )
}
//here in button sometime in the interview they copy the setcounter multipe times and ask for the output
//the output will be same (here the setcounter is use on counter variable)as usestate update the ui in batch so it consider the double or triple action as one
//if you want to get the counter to increament by the setcounter three four times there is prev
//prev is the last updated state
//setcounter(prev => prev +1) here this is a callback but the ( ) and {} is not written
//now if we write multiple setcounter the update will be like that like 0, 3,5

//above i have written both the example but it is best practise to use one as the code become inconsistent
export default App
