import React from "react";
import Main from "./components/Main";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/flowerForm" component={Form} />
          {/* <Redirect to = '/' /> */}
        </Switch>

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
