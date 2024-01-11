import { useCallback, useEffect, useRef, useState } from 'react'

//use callback put in caches
function App() {
 const [length,setLength]=useState(8);
const [numallow,setnumallow]=useState(false);
const [charallow,setcharallow]=useState(false);
const [pass,setpass]=useState("");
const passwordref=useRef(null);
const Passwordgenerator =useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numallow) str+="0123456789"
  if(charallow) str+="!@#$%^&*()_-=`~"
  for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random()*str.length+1)
    pass +=str.charAt(char)
  }
  setpass(pass)
},[setpass,numallow,length,charallow])
// in above array we put which is being optimize
const copypass = useCallback(()=>{
  passwordref.current?.select()
  window.navigator.clipboard.writeText(pass)
},[pass])
useEffect(()=>{Passwordgenerator()},[length,charallow.numallow,Passwordgenerator])
  return (
    <>
     <div className=' bg-gray-800 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500'> 
      <h1 className=' text-white text-center my-3'>Password Generator</h1>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={pass} 
        className=' outline-none w-full py-1 px-3'
        placeholder='password'
        ref={passwordref} readOnly/>
        <button onClick={copypass} className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 transition-all duration-300 hover:bg-blue-900'>Copy</button>
      </div>
      <div className=' flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={1}
          max={10}
          value={length}
          className=' cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className=' flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={numallow}
          id='numberinput'
          onChange={()=>{
            setnumallow((prev)=>!prev)
          }} />
          <label htmlFor='numberinput'>Number</label>
        </div>
        <div className=' flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={charallow}
          id='characterinput'
          onChange={()=>{
            setcharallow((prev)=>!prev)
          }} />
          <label htmlFor='characterinput'>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
