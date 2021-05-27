import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  // const [user, setUser] = useState();
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const send = (e) => {
    e.preventDefault();
    if (login.username !== "" && login.email !== "") {
      axios.post("/user/login", login).then((res) => {
        console.log(res.data);

        setLogin({
          username: "",
          password: "",
        });
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        window.location.href = "/flowerForm";
      });
    } else {
      setMsg("all fields are required!");
    }
  };

  return (
    <div>
      <form onSubmit={send}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <button type="submit">log in</button>
      </form>
      <p>{msg} </p>
    </div>
  );
};

export default Login;
