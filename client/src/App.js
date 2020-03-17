import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/index.js"
import Login from "./components/Login/index.js"
import Body from "./components/Body/index.js"
import Signup from "./components/Signup/index.js"
import Arrow from "./components/Arrow/index.js"
import About from "./components/About/index.js"
import Event from "./components/Event/index"
import Copyright from "./components/Copyright/index.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <Body />
        <Switch>
          <Route exact path={["/", "/login"]}>
            <Login />
            <Arrow />
            <About />
          </Route>
          <Route exact path={["/signup"]}>
            <Signup />
          </Route>
          <Route exact path={["/event"]}>
            <Event />
          </Route>
        </Switch>
        <Copyright />
      </div>
    </Router>
    </div>

  );
}

export default App;
