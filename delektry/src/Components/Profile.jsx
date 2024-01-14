import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
const Profile = () => {
    const {user}=useContext(UserContext)
  if (!user) return <div>username is not inputed yet</div>

  return <div> hey: {user.name}</div>
}

export default Profile