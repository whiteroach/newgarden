import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };

  const send = (e) => {
    e.preventDefault();
    if (
      signUp.username !== "" &&
      signUp.password !== "" &&
      signUp.email !== ""
    ) {
      axios.post("/user/signUp", signUp).then((res) => {
        setSignUp({
          username: "",
          email: "",
          password: "",
        });
        // setMsg(res.data.msg);
        window.location.href = "/user/login";
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
          value={signUp.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={signUp.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={signUp.password}
          onChange={handleChange}
        />
        <button type="submit">sign up</button>
      </form>
      <p>{msg} </p>
    </div>
  );
};

export default SignUp;
