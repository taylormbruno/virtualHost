import React, { useState } from 'react';
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
          <Route exact path={["/event"]}>
            <Event />
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
