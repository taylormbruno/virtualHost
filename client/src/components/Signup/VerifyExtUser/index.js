import React, { Component } from "react";
import API from "../../../utils/API";
import { Dimmer, Loader } from "semantic-ui-react";

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      externalID: "",
      externalUser: false
    };
  }

  componentDidMount = () => {
    this.findUser();
  };

  findUser = async () => {
    let query = window.location.search;
    let str = decodeURI(query.substring(query.indexOf("=") + 1));
    console.log(JSON.parse(str));
    const userData = JSON.parse(str);
    console.log(userData.first_name);
    this.setState({
      ...this.state,
      first_name: userData.first_name,
      last_name: userData.last_name,
      externalID: userData.first_name,
      externalUser: true
    });

    const user = await API.findAuth({
      first_name: userData.first_name,
      last_name: userData.last_name,
      externalID: userData.externalID,
      externalUser: true
    });
    console.log("47 USER \n", user.data);

    if (user.data.error) {
      console.log("User Not Found", userData);
      this.createExt(userData);
    } else {
      console.log("User found.");
    }
  };

  createExt = async () => {
    console.log("Creating new user");
    const create = await API.createAuth(this.state);

    console.log("49 USER \n", create);
    console.log("state", this.state);
  };

  render() {
    return (
      <div>
        <br />
        <h1>Welcome {"User"}!</h1>
        <h3>Please wait while we load your dashboard.</h3>
        <Dimmer active>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      </div>
    );
  }
}

export default Verify;
