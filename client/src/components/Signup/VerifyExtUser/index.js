import React, { Component } from "react";
import API from "../../../utils/API";
import { Dimmer, Loader, Icon } from "semantic-ui-react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      externalID: "",
      active: false,
      find: true,
      create: false,
      redirectID: ""
    };
  }

  componentDidMount = () => {
    this.onLoad();
  };

  onLoad = async () => {
    let query = window.location.search;
    let str = decodeURI(query.substring(query.indexOf("=") + 1));
    console.log(JSON.parse(str)); // fires
    const userData = JSON.parse(str);
    if (!userData.first_name) {
      console.log("No user data");
    } else {
      console.log(userData);
      this.setState({
        ...this.state,
        first_name: userData.first_name,
        last_name: userData.last_name,
        externalID: userData.first_name
      });
    }
    this.findUser(userData).then(response => {
      console.log(response);
    });
    this.createExt(userData).then(response => {
      console.log(response);
    });

    this.findUser(userData).then(response => {
      if (!response.first_name || response === null) {
        console.log(response);

        this.createExt().then(response => {
          if (!response.first_name || response === null) {
            console.log(response);
            this.setState({
              ...this.state,
              create: true,
              find: false
            });
          } else {
            console.log(response);
            this.setState({
              ...this.state,
              active: true,
              redirectID: response._id
            });
          }
        });
      } else {
        console.log(response);
        this.setState({
          ...this.state,
          active: true,
          redirectID: response._id
        });
      }
    });
  };

  findUser = async userObj => {
    if (this.state.active === false || this.state.find === true) {
      const user = await API.findAuth({
        first_name: userObj.first_name,
        last_name: userObj.last_name,
        externalID: userObj.externalID,
        externalUser: true
      });
      console.log("47 USER \n", user.data);

      if (user.data.error) {
        console.log("User Not Found", this.state);
        // this.setState({ ...this.state, create: true });
        this.setState({
          ...this.state,
          create: true,
          find: false
        });
        return undefined;
      } else {
        console.log("User found.");
        return user.data;
      }
    }
  };

  createExt = async () => {
    console.log("Creating new user"); // fires
    const create = await API.createAuth({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      externalID: this.state.externalID,
      externalUser: true
    });
    console.log("Heres your user!");
    if (create.data.error) {
      console.log("User not found.");
      return null;
    } else {
      console.log("49 USER \n", create);
      console.log("state", this.state);
      return create.data;
    }
  };

  render() {
    return (
      <div class="ext">
        <br />
        <h1>Welcome {this.state.first_name + " " + this.state.last_name}!</h1>
        {this.state.active ? (
          <a href={"/user/mydashboard/?q=" + this.state.redirectID}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="10x"
              style={{ color: "#C7A7C6", animation: "mymove 5s infinite" }}
            />
            <h4>Take me to my dashboard</h4>
          </a>
        ) : (
          <Dimmer active>
            <Loader size="massive">
              <h3>Please wait while we load your dashboard.</h3>
            </Loader>
            <a href="/" id="return">
              Return to Landing Page
            </a>
          </Dimmer>
        )}
      </div>
    );
  }
}

export default Verify;
