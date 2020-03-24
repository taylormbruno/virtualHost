import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Body from "./components/Body";
import Signup from "./components/Signup";
<<<<<<< HEAD
import Arrow from "./components/Arrow"
import About from "./components/About"
import Event from "./components/Event"
import Copyright from "./components/Copyright"
import Dashboard from "./components/Dashboard"
=======
import Arrow from "./components/Arrow";
import About from "./components/About";
import Events from "./components/Events";
import Event from "./components/Event";
import Vendor from "./components/Vendor";
import Copyright from "./components/Copyright";
>>>>>>> 280ff3adbfae0282a0b81fcbdb9a6e000953e5aa
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
          <Route path={["/event/:id"]}>
            <Event />
          </Route>
<<<<<<< HEAD
          <Route exact path={"/mydashboard"}>
            <Dashboard />
=======
          <Route path={["/vendor/:id"]}>
            <Vendor />
>>>>>>> 280ff3adbfae0282a0b81fcbdb9a6e000953e5aa
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
