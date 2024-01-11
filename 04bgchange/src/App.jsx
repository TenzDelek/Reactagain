import { useState } from "react"

function App() {
 const[color,setcolor]=useState("bg-amber-600")

  return (
    <div className={`w-full h-screen ${color} duration-700 `}>
        <div className=" text-white  h-screen flex justify-center items-center flex-col">
          TAILWIND BACKGROUND CHANGER
          <p className=" text-sm">By Tenzin Delek</p>
        </div>
      <div className=" fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-3 ">
      <div className=" flex flex-wrap gap-3 shadow-xl justify-center  bg-white text-white px-3 py-2 rounded-2xl">
      <button onClick={()=>setcolor("bg-black")} className=" outline-none px-4 py-1 bg-black rounded-full shadow-lg"> Black</button>
      <button onClick={()=>setcolor("bg-blue-600")} className=" outline-none px-4 py-1  bg-blue-600 rounded-full shadow-lg"> Blue</button>
      <button onClick={()=>setcolor("bg-green-500")} className=" outline-none px-4 py-1 bg-green-500 rounded-full shadow-lg"> Green</button>
      </div>
      </div>
    </div>
  )
}
//onclick want a function not its execution return 
//for example the reference is fine but run() is not as it will run in it
//so we use callback
export default App
