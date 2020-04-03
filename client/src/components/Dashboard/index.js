import React, { Component } from "react";
import { Image, Segment, Grid } from "semantic-ui-react";
import Dashboard from "./dashboard.png";
import "./style.css";
import Events from "./Events/index.js";
import Booths from "./Booths/index.js";
import Notes from "./Notes/index.js";
import Favorites from "./Favorites/index.js";
import { StyledHeader } from "./styledComponents";
import API from "../../utils/API";
import queryString from "query-string";

class MyDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      userID: "",
      fname: "",
      loggedIn: false
    };
  }

  componentDidMount() {
    const query = queryString.parse(window.location.search);
    console.log("Finding local user");
    if (query.q) {
      this.findUser(query.q);
    }
  }

  findUser = async query => {
    console.log("Sending api call to find user");
    const master = await API.findUserById(query);
    console.log(master.data.notes);
    let user = {
      id: master.data._id,
      first_name: master.data.first_name,
      last_name: master.data.last_name,
      notes: master.data.notes ? master.data.notes : [],
      favorites: master.data.favorites ? master.data.favorites : []
    };
    window.localStorage.setItem("loggedIn", true);
    window.localStorage.setItem("userID", master.data._id);
    window.localStorage.setItem("fname", master.data.first_name);
    this.setState({
      ...this.state,
      currentUser: user,
      fname: master.data.first_name,
      loggedIn: true
    });
  };

  // if (query.extid) {
  //   console.log("Finding external user"); //fires
  //   this.getExt(query.extid).then(response => {
  //     console.log("Mount.getExt()\n", response); // undefined
  //     if (response.data.length === 0) {
  //       console.log("No user found\n", response);
  //       this.createExternal().then(res => {
  //         console.log(res); // undefined
  //       });
  //     } else {
  //       console.log("Found you!\n", response.data);
  //       this.setState({ ...this.state, currentUser: response.data });
  //     }
  //   });
  // } else {
  render() {
    console.log("Rendering dashboard", this.state);
    return (
      <div id="container">
        <Image id="logo" src={Dashboard} />
        <Grid stackable columns={2} textAlign="center" verticalAlign="top">
          <Grid.Column width={7}>
            <Segment>
              <StyledHeader as="h1">My Events</StyledHeader>
              <Events userState={this.state.currentUser} />
            </Segment>
            <Segment>
              <StyledHeader as="h1">My Booths</StyledHeader>
              <Booths userState={this.state.currentUser} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment>
              <StyledHeader as="h1">My Notes</StyledHeader>
              <Notes
                notes={this.state.currentUser.notes}
                update={this.updateUser}
              />
            </Segment>
            <Segment>
              <StyledHeader as="h1">My Favorites</StyledHeader>
              <Favorites
                favs={this.state.currentUser.favorites}
                update={this.updateUser}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MyDashboard;
