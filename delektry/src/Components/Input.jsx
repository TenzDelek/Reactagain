import React, { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'
const Input = () => {
    const {setuser}=useContext(UserContext);
    const [name,setname]=useState("");
    const submitevents =(e)=>{
        e.preventDefault();
        setuser({name})
    }
  return (
    <div>
        <input type="text" 
         placeholder='enter name'
         value={name}
         onChange={(e)=> setname(e.target.value)}
         className=' outline-none text-black p-3 rounded-lg'
        />
        <button className=' ml-2 p-3 bg-orange-500 rounded-lg ' onClick={submitevents}>Send Data</button>
    </div>
  )
}

export default Input