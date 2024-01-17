import { useEffect, useState } from "react"
import Card from "./Components/Card"
import Toggle from "./Components/Toggle"
import { Themeprovidercontext } from "./Contexts/theme"

function App() {
  const [whattheme,setwhattheme]=useState("light")
  const lightt=()=>{
    setwhattheme("light")
  }
  const darkt =()=>{
    setwhattheme("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(whattheme)
  },[whattheme])
  return (
    <Themeprovidercontext value={{whattheme,lightt,darkt}}>
    <div className=" flex flex-col h-screen w-full items-center justify-center">
      <Toggle/>
    <Card/>
    </div>
    </Themeprovidercontext>
  )
}

export default App
