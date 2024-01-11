import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myobj={
    name:"tenzin",
    password:"123"
  }
  return (
    <>
    <h1 className='  rounded-2xl text-cyan-500 font-bold bg-gray-900 p-5 mb-3'>Tailwind</h1>
   <div className=' flex gap-4'>
   <Card  channel="tenzdelek"/>
   <Card someobj={myobj} channel="monalm"/>
    </div>
    </>
  )
}

export default App
