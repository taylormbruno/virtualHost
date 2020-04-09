import React, { Component } from "react";
import { Modal, Table } from "semantic-ui-react";
import { StyledCell } from "./styledComponents";
import "./style.css";
import API from "../../../utils/API";
import moment from "moment";
import queryString from "query-string";

export default class EventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [],
      eventData: []
    };
  }

  componentDidMount() {
    let query = queryString.parse(window.location.search);
    console.log("dashboard events ", query.q);
    // Need to add that if hostID matches the user ID, map results to different array
    this.retrieveAll(query.q).then(response => {
      console.log(response);
      this.setState({
        ...this.state,
        allEvents: response
      });
    });
  }

  retrieveAll = async (query) => {
    const master = await API.allEventsByUser(query);
    console.log("RETRIEVE ALL EVENTS");
    console.log(master.data)
    return master.data;
  };

  render() {
    return (
      <Modal
        id="eventModal"
        trigger={
          <StyledCell>
            <i aria-hidden="true" className="expand icon" id="expandIcon"></i>
          </StyledCell>
        }
        basic
      >
        <Modal.Header>My Events</Modal.Header>
        <Modal.Content>
          <Table columns={4}>
            <Table.Header>
              <Table.Row>
                <StyledCell>Event Name</StyledCell>
                <StyledCell>Dates and Times</StyledCell>
                <StyledCell></StyledCell>
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
        </Modal.Content>
      </Modal>
    );
  }
}
