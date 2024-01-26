import React, { useEffect ,useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

//the authlayout is used in many project like the capstone proj i made
export default function Protected({children,authentication=true}) {
    const navigate=useNavigate()
    const [loader,setloader]=useState(true);
    const authstatus=useSelector(state=>state.auth.status)

    useEffect(()=>{
        //here the if the authstatus is false then then condition is true so it navigate to login as he is
        //not the user
        if(authentication && authstatus !==authentication)
        {
            navigate('/login')
        }
       else if(!authentication && authstatus !==authentication)
       {
        navigate('/')
       }
       setloader(false)
    },[authstatus,navigate,authentication])
    return loader ? <h1>Loading</h1>:<> {children}</>
}

