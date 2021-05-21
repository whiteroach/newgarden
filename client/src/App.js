import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Form from './components/Form';
// import Cards from './components/Cards';
import {
  BrowserRouter as Router,
    Redirect,
    Route,
  Switch,
  useLocation
} from "react-router-dom";



const App = () => {

  return (
    <Router>
        <div>
            <Switch>
                <Route exact path = '/' component = { Main } />
                <Route exact path = '/gallery' component = { Gallery }/>
                <Redirect to = '/' />
            </Switch>
            <Form/>
            {/* <Cards /> */}
            <Footer />
           
        </div>
    </Router>
)
  /* return (
    <div>
      <Main />
      <Footer />
    </div>
  ) */
}

export default App 
