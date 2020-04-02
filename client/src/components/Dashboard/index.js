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
    
    console.log("Finding local user");
    this.getLocal(query).then(response => {
      console.log("Mount.onLoad()\n", response);
    });    
    this.findUser(query.q).then(response => {
      console.log(response,'????????');
      this.setState({
        ...this.state,
        currentUser:response
      });
    });
  }
  
  findUser = async (query) => {
    const master = await API.findUserById(query);
    console.log(master.data);
    return master.data;
  };
  
  
  render() {
    console.log('======>',this.state,'<======')
    return (
      <div id="container">
        <Image id="logo" src={Dashboard} />
        <Grid stackable columns={2} textAlign="center" verticalAlign="top">
          <Grid.Column width={7}>
            <Segment>
              <StyledHeader as="h1">My Events</StyledHeader>
              <Events 
              userState={this.state.userState}
              />
            </Segment>
            <Segment>
              <StyledHeader as="h1">My Booths</StyledHeader>
              <Booths 
              userState={this.state.userState}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment>
              <StyledHeader as="h1">My Notes</StyledHeader>
              <Notes user={this.state.currentUser} update={this.updateUser} />
            </Segment>
            <Segment>
              <StyledHeader as="h1">My Favorites</StyledHeader>
              <Favorites user={this.state.currentUser} update={this.updateUser} />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MyDashboard;
