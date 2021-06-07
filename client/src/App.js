import React from "react";
import Main from "./components/Main";
import FlowerForm from "./components/FlowerForm";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import LogInPassport from "./components/LogInPassport";
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
    localStorage.removeItem("currentToken");
    window.location.href = "/user/login";
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignUp} />

          {/* <Route path="/user/signUp" component={SignUp} /> */}
          <Route path="/user/login" component={Login} />
          {/* <Route path="/user/loginpassport" component={LogInPassport} /> */}

          <Route path="/main" component={Main} />

          <Route path="/gallery" component={Gallery} />
          <Route path="/flowerForm" component={FlowerForm} />
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
};

export default App;
