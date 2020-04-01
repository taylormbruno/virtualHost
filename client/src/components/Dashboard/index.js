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
      currentUser: {}
    };
  }

  componentDidMount() {
    const query = queryString.parse(window.location.search);
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
    console.log("Finding local user");
    this.getLocal(query).then(response => {
      console.log("Mount.onLoad()\n", response);
    });
    // }
  }

  // getExt = async id => {
  //   const extUser = await API.getExternalUser(id);
  //   // no logs here.
  //   // if (extUser.data.length === 0) {
  //   //   console.log("No user found\n", extUser);
  //   //   this.createExternal().then(res => {
  //   //     console.log(res); // undefined
  //   //   })
  //   // } else {
  //   //   console.log("Found you!\n", extUser);
  //   //   this.setState({...this.state, currentUser : extUser.data});
  //   //   return extUser.data;
  //   // }
  //   return extUser;
  // };

  // createExternal = async () => {
  //   console.log("creating new user");
  //   const newExt = await API.createExternalUser();
  //   return newExt;
  // };

  getLocal = async query => {
    // figure out how to grab the ID from
    const locUser = await API.getDashboard({ _id: query.id });
    // no logs here.
    if (!locUser._id) {
      console.log("No user found\n", locUser);
    } else {
      console.log("Found you!\n", locUser);
    }
  };

  render() {
    return (
      <div id="container">
        <Image id="logo" src={Dashboard} />
        <Grid stackable columns={2} textAlign="center" verticalAlign="top">
          <Grid.Column width={7}>
            <Segment>
              <StyledHeader as="h1">My Events</StyledHeader>
              <Events 
              userState={this.props.userState}
              />
            </Segment>
            <Segment>
              <StyledHeader as="h1">My Booths</StyledHeader>
              <Booths 
              userState={this.props.userState}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment>
              <StyledHeader as="h1">My Notes</StyledHeader>
              <Notes />
            </Segment>
            <Segment>
              <StyledHeader as="h1">My Favorites</StyledHeader>
              <Favorites />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MyDashboard;
