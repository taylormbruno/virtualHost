import React, { useContext } from 'react';
import 'semantic-ui-css/semantic.min.css';
import "./style.css"
import LoggedIn from "./LoggedIn/index"
import LoggedOut from "./LoggedOut/index"
import UserContext from "../../utils/UserContext";


export default function Navbar(props) {

  const { loggedIn, fname } = useContext(UserContext);

  switch (loggedIn) {
    case true:
      return <LoggedIn 
      logout = {props.logout}
      fname = {fname}
      userState={props.userState}
      />;
    case 'false':
      return <LoggedOut 
      />;
    default:
      return <LoggedOut 
      />;
  }
}