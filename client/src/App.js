import React from "react";
import Main from "./components/Main";
import Form from "./components/Form";
import Footer from "./components/Footer";
// import Gallery from "./components/Gallery";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import Cards from './components/Cards';
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch,
  // useLocation,
} from "react-router-dom";

const App = () => {
  // const [msgCenter, setMsg] = useState("");
  // const msgSetter = (msg) => {
  //   setMsg(msg);
  // };

  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/user/login";
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignUp} />

          {/* <Route path="/user/signUp" component={SignUp} /> */}
          <Route path="/user/login" component={Login} />
          <Route exact path="/main" component={Main} />

          {/* <Route path="/gallery" component={Gallery} /> */}
          <Route path="/flowerForm" component={Form} />
          {/* <Redirect to = '/' /> */}
        </Switch>
        {/* <Form/> */}
        {/* <Cards /> */}

        <button type="button" onClick={logout}>
          Logout
        </button>
        <Footer />
      </div>
    </Router>
  );
  /* return (
    <div>
      <Main />
      <Footer />
    </div>
  ) */
};

export default App;
