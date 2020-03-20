import React from 'react';
// import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import Logo from './locationIcon.png'
import "./style.css"
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoggedIn from "./LoggedIn/index"
import LoggedOut from "./LoggedOut/index"

// if (this.props.login.loggedIn===false)
//   return {
//     loginState= <LoggedOut />
//   }

// const Navbar = () => (
//   <div>
//     {loginState}
//   </div>
// )


function Navbar(props) {
  let loginState = props.login.loggedIn

  switch (loginState) {
    case true:
      return <LoggedIn />;
    case 'false':
      return <LoggedOut />;
    default:
      return <LoggedOut />;
  }
}


function mapStateToProps(state) {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(Navbar);