import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data =useLoaderData();
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/TenzDelek')
    //     .then((res)=> res.json() )
    //     .then((data)=> {console.log(data)
    //     setdata(data)})

    // },[])
  return (
    <div className=' bg-gray-500 flex flex-col items-center justify-center text-center m-4 p-4 text-3xl text-white'>
        Github Followers : {data.followers}
        <img src={data.avatar_url} width={300} />
        </div>
  )
}

export default Github
export const githubinfoloader= async()=>{
 const res =await fetch ('https://api.github.com/users/TenzDelek');
 return res.json()
}