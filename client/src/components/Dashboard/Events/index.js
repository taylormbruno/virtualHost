import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import EventModal from "./modal";
// import Dashboard from "./dashboard.png"
import "./style.css";
// import Events from './Events/index.js'
import { StyledCell, StyledButton } from "./styledComponents";
import API from "../../../utils/API";
import moment from "moment";
import queryString from "query-string";

class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      allEvents: [],
      eventData: []
    };
  }

  componentDidMount() {
    let query = queryString.parse(window.location.search);
    console.log("dashboard events ", query.q);
    this.setState({...this.state, userID: query.q});
    // Need to add that if hostID matches the user ID, map results to different array
    this.retrieveAllEvents().then(response => {
      this.setState({
        ...this.state,
        allEvents: response
      });
    });
  }

  retrieveAllEvents = async () => {
    const master = await API.allEvents();
    return master.data;
  };
  // routeToDetails = () => {
  //   document.getElementsByClassName("clickable").onclick = function(event) {
  //     console.log("clicked")
  //   }}
  // document.getElementById(event._id).onclick = function() {
  //   window.location.href='/vendor/?q='+event._id

  render() {
    return (
      <div id="tableContainer">
        <Table columns={3}>
          <Table.Header id="purple">
            <Table.Row>
              <StyledCell>Event Name</StyledCell>
              <StyledCell>Dates and Times</StyledCell>
              <EventModal 
              userState={this.props.userState}
              />
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.allEvents !== [] ? (
              this.state.allEvents.map(event => {
                let queryString = `/event/?q=${event._id}`;
                if (event.host_id === this.props.userState.userID) {
                  return (
                    <Table.Row
                      onClick={() => {
                        window.location.href = queryString;
                      }}
                      className="hover"
                    >
                      <Table.Cell>{event.event_name}</Table.Cell>
                      <Table.Cell>
                        {moment(event.start_time).format(
                          "MMMM Do YYYY, h:mm a"
                        ) +
                          " - " +
                          moment(event.end_time).format("h:mm a")}
                      </Table.Cell>
                    </Table.Row>
                  );
                }
              })
            ) : (
              <p>No current data</p>
            )}
          </Table.Body>
        </Table>
        <StyledButton href={"/register/?user=" + this.state.userID } circular icon="add" />
      </div>
    );
  }
}

export default MyEvents;
