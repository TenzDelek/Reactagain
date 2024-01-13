import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id}=useParams();
  return (
    <div className=' flex justify-center bg-gray-700 text-white p-4'>User:{id}</div>
  )
}

export default User