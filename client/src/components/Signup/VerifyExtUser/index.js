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

  onLoad = () => {
    let query = window.location.search;
    let str = decodeURI(query.substring(query.indexOf("=") + 1));
    console.log("----------29----------");
    console.log(JSON.parse(str)); // fires
    console.log("--------------------");
    const userData = JSON.parse(str);
    if (!userData.first_name) {
      console.log("34 No user data");
    } else {
      console.log("----------36 user data----------");
      console.log(userData);
      console.log("----38 setting state----");
      this.setState({
        ...this.state,
        first_name: userData.first_name,
        last_name: userData.last_name,
        externalID: userData.externalID
      });
    }
  };
  componentWillMount() {
    
  }

  findUser = async () => {
    if (this.state.find) {
      const user = await API.findAuth({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        externalID: this.state.externalID,
        externalUser: true
      });
      console.log("56 USER \n", user);
      if (user.data.error) {
        console.log("58 User Not Found", this.state); //fires
        // this.setState({ ...this.state, create: true });
        console.log("----------60 setting state----------"); // fires
        this.setState({
          ...this.state,
          create: true,
          find: false
        });
      } else {
        console.log("67 User found.");
        console.log("---------68 setting state-----------");
        this.setState({
          ...this.state,
          active: true,
          redirectID: user._id
        });
      }
    } else {
      console.log("76 We could not find the user. We must now create the user."); //fires
    }
  };

  createExt = async () => {
    if (this.state.create) {
      console.log("82 Creating new user"); //fires
      const create = await API.createAuth({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        externalID: this.state.externalID,
        externalUser: true
      });
      console.log("89 Heres your user!\n", create);
      console.log("--------------------");

      if (create.data.error) {
        console.log("93 User not found.");
      } else {
        this.setState({
          ...this.state,
          active: true,
          redirectID: create._id
        });
        console.log("98 state\n", this.state);
        console.log("--------------------");
      }
      this.setState({...this.state, create: false});
    } else {
      console.log("102 First you must look for the user.");
    }
  };

  getUser = () => {
    if (this.state.find === true) {
      this.findUser();
    }
    if (this.state.create === true) {
      this.createExt();
    }
    if (this.state.active === true) {
      console.log("Taking you to your dashboard");
    }
    else {
      console.log("Something wrong");
    }
  }

  render() {
    this.getUser();
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
