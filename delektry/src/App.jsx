import { useCallback } from "react";
import { useState } from "react"

function App() {
  const arr=["Superman","badman","siatama","tibetman"]
  const [animename,setanimename]=useState("");
  const generate= useCallback(()=>{
    const getindex= Math.floor(Math.random()*arr.length)
    console.log(getindex)
    setanimename(arr[getindex])
  },[animename])

  const copytoclip=()=>{
      window.navigator.clipboard.writeText(animename)
  }
  return (
     <div className=" bg-[#212121] h-screen w-full text-white flex items-center justify-center flex-col">
      <h1 className=" text-lg ">Anime Name Generator</h1>
      <div className=" bg-slate-50 px-3 py-4 text-black rounded-lg ">
      <input type="text" className=" border-none outline-none w-full " value={animename} placeholder="Random" readOnly/>
      </div>
      <div className=" flex gap-3 items-center justify-center">
        <button className="bg-slate-600  py-3 px-3 mt-3 rounded-full" onClick={generate}>Generate</button> 
        <button className="bg-blue-600  py-3 px-4 mt-3 rounded-full" onClick={copytoclip} >Copy</button> 
      </div>
     </div>
  )
}

export default App
