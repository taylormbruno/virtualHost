import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Body from "./components/Body";
import Signup from "./components/Signup";
import Arrow from "./components/Arrow";
import About from "./components/About";
import Events from "./components/Events";
import Event from "./components/Event";
import Vendor from "./components/Vendor";
import Copyright from "./components/Copyright";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./utils/UserContext";

function App() {

  let [userState, setUserState] = useState({
    loggedIn: false,
    fname: "Kacie",
    lname: "Hatley"
  });


  function updateLoginStatus() {
    if (userState.loggedIn === false) {
      userState.loggedIn = true
    }
    else if (userState.loggedIn === true) {
      userState.loggedIn = false
    }
    setUserState({
      ...userState
    });
  } 

  return (
    <div className="App">
      <UserContext.Provider value={userState}>
      <Router>
      <div>
        <Navbar
        // loggedIn={this.state.loggedIn} 
        // fname={this.state.fname} 
        updateLoginStatus = {updateLoginStatus}
        />
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
          <Route exact path={["/events"]}>
            <Events />
          </Route>
          <Route path={["/event/:id", "/vendorsearchtest"]}>
            <Event />
          </Route>
          <Route path={["/vendor/:id"]}>
            <Vendor />
          </Route>
        </Switch>
        <Copyright />
      </div>
    </Router>
    </UserContext.Provider>
    </div>

  );
}

export default App;
