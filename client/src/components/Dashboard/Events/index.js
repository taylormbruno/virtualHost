import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import EventModal from "./modal"
// import Dashboard from "./dashboard.png"
import "./style.css"
// import Events from './Events/index.js'
import { StyledCell, StyledButton } from "./styledComponents"
import API from "../../../utils/API";

class MyEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterList: [],
      eventData: []      
    };
  }

  componentDidMount() {
    // Need to add that if hostID matches the user ID, map results to different array
    this.retrieveAll().then(response => {
      console.log(response);
      this.setState({
        ...this.state,
        masterList: response
      });
    });
  }

  retrieveAll = async () => {
    const master = await API.allEvents();
    console.log(master.data);
    return master.data;
  };

  render () {
    return (
<div id="tableContainer">
  <Table columns={3}>
    <Table.Header id="purple">
      <Table.Row>
        <StyledCell>Event Name</StyledCell>
        <StyledCell>Date</StyledCell>
        <EventModal />
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {this.state.masterList !== []
      ? this.state.masterList.map(event => {
          console.log(event);
        return (<Table.Row>
        <Table.Cell>{event.event_name}</Table.Cell>
        <Table.Cell>{event.start_time}</Table.Cell>
        <Table.Cell>{event.vendors.length}</Table.Cell>
        </Table.Row>)
        ;
        })
          : <p>No current data</p>}

    </Table.Body>
  </Table>
  <StyledButton href="/register" circular icon='add' />
    </div>       
)}}

export default MyEvents