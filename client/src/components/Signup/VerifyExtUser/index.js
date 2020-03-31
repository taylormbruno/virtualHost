import React, { Component } from "react";
import queryString from "query-string";

class Verify extends Component {
  state = {
    newUser: {}
  };
  componentDidMount = () => {
    let query = queryString.parse(window.location.search);
    console.log(query);
  }
  
  render() {
    return (
      <div>
        <h1>Welcome ${"User"}!</h1>

        <h3>
          For full access to our website, we will to save the following data to
          create events or vendors, and save notes or favorites.
        </h3>
        <h3>Your name: ${"User's Name"}</h3>
        
      </div>
    );
  }
}

export default Verify;