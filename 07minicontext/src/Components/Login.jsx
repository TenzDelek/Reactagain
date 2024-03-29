import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  //remembet the setuser is made in contextprovider file
  const {setuser}=useContext(UserContext)
  const handlesubmit = (e) => {
    e.preventDefault();
    setuser({username,password})

  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type=" text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="username"
      />
      {" "}
      <input
        type=" text"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        placeholder="password"
      />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
};

export default Login;
