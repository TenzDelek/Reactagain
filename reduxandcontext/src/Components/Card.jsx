import React from 'react'

const Card = () => {
  return (
    <div className=' flex flex-col border-2 p-3 rounded-md  w-fit dark:bg-black' >
    <p className=' dark:text-white'>I am a Card</p>
    <button className=' mt-3 px-3 py-2 border-2 rounded-lg dark:bg-slate-700 dark:text-white ' >
    Click me    
    </button></div>
  )
}

export default Card