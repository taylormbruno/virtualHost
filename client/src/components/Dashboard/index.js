import React, { Component } from "react";
import { Image, Segment, Grid } from "semantic-ui-react";
import Dashboard from "./dashboard.png";
import "./style.css";
import EBmodal from './Events/EBmodal';
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
      loggedIn: false,
      update: false
    };
  }

  componentDidMount() {
    const query = queryString.parse(window.location.search);
    if (query.q) {
      this.setState({ ...this.state, currentUser: query.q });
      this.findUser(query.q);
    }
  }
  updateUser = async (change) => {
    this.setState({...this.state, update: true});
    if (change.notes) {
      const update = await API.updateNotes({
        host: this.state.currentUser._id,
        vendorID: change.vendor_id,
        update: change.notes
      });
    } else if (change.favorites) {
      const update = await API.updateFavs({
        filter: { _id: this.state.currentUser._id },
        update: change.vendor_id,
      });
    }
  };

  findUser = async (query) => {
    const master = await API.findUserById(query);

    let user = {
      id: master.data._id,
      first_name: master.data.first_name,
      last_name: master.data.last_name,
      notes: master.data.notes ? master.data.notes : [],
      favorites: master.data.favorites ? master.data.favorites : [],
    };
    window.localStorage.setItem("loggedIn", true);
    window.localStorage.setItem("userID", master.data._id);
    window.localStorage.setItem("fname", master.data.first_name);
    this.setState({
      ...this.state,
      currentUser: user,
      fname: master.data.first_name,
      loggedIn: true,
    });
  };

  render() {
    return (
      <div id="container">
        <Image id="logo" src={Dashboard} />
        <Grid stackable columns={2} textAlign="center" verticalAlign="top">
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
              <EBmodal
              currentUser={this.state.currentUser}
              />            
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MyDashboard;
