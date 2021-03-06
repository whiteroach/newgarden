import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const [user, setUser] = useState();
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const send = (e) => {
    e.preventDefault();
    if (user.email !== "") {
      // JWT (JsonWebToken)
      axios.post("/user/loginByJWT", user).then((res) => {
        console.log(res.data);
        localStorage.setItem("currentToken", res.data);
        window.location.href = "/flowerForm";
      });
    } else {
      setMsg("all fields are required!");
    }
  };

  return (
    <div>
      <form onSubmit={send}>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
      </form>
      <p>{msg} </p>
    </div>
  );
};

export default Login;
