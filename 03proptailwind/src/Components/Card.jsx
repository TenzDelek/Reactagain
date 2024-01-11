import React from 'react'

const Card = ({channel,someobj}) => {
  return (

    <div className="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://images.pexels.com/photos/13200258/pexels-photo-13200258.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{someobj?.name || "default header using obj"}</h1>
      <p className="mt-2 text-sm text-gray-300">
       {channel || "default text"} 
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        View Profile →
      </button>
    </div>
  </div>
  )
}

export default Card