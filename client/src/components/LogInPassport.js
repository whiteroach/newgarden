import React, { useState } from "react";
import axios from "axios";

const LogInPassport = () => {
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

  // Local Strategy Log in
  const localLogIn = (e) => {
    e.preventDefault();
    // if (login.username !== "" && login.email !== "") {
    //   // Local LogIn
    axios.post("/login/passport/local", login).then((res) => {
      //   console.log(`Data from backend local: ${res.data}`);
      console.log(res.data);
      //   window.location.href = "/flowerForm";
    });
    // }
    // else {
    //   setMsg("all fields are required!");
    // }
  };

  //   // Github authentication
  //   const githubLogIn = () => {
  //     axios.get("/user/login/passport/github").then((res) => {
  //       console.log(`Data from backend github: ${res.data} `);
  //       window.location.href = "/flowerForm";
  //     });
  //   };

  //   // Facebook authentication
  //   const facebookLogIn = () => {
  //     axios.get("/user/login/passport/facebook").then((res) => {
  //       console.log(`Data from backend facebook: ${res.data} `);
  //       window.location.href = "/flowerForm";
  //     });
  //   };

  return (
    <div>
      <form onSubmit={localLogIn}>
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
      {/* <button type="submit" onClick={facebookLogIn}>
        With Facebook
      </button> */}
      {/* <button type="submit" onClick={githubLogIn}>
        With Github
      </button> */}
    </div>
  );
};

export default LogInPassport;
