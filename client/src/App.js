import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Body from "./components/Body";
import Signup from "./components/Signup";
import Arrow from "./components/Arrow"
import About from "./components/About"
import Event from "./components/Event"
import Copyright from "./components/Copyright"
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
