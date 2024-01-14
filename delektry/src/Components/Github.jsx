import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/TenzDelek').then
        ((res)=>res.json()).then
        ((data)=>{
            console.log(data)
            setdata(data)
        })

    },[])
  return (
    <div className=' flex p-3 border-2 rounded-md items-center gap-2' >
        
        <div>
        <h1 className=' text-orange-400 text-lg font-semibold'> Username:{data.login} </h1>
        <h1 className='text-orange-400 text-lg font-semibold'> GitHub Follower:{data.followers}</h1>
        </div>
        <img src={data.avatar_url} height={100} width={100} className=' rounded-lg'/>
    </div>
  )
}

export default Github