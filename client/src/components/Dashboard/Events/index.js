import React from 'react'
import { Table } from 'semantic-ui-react'
<<<<<<< HEAD
=======
import EventModal from "./modal"
>>>>>>> 70d1fe29317b974528bdc6cf5d2b0ce0c6041104
// import Dashboard from "./dashboard.png"
import "./style.css"
// import Events from './Events/index.js'
import { StyledCell, StyledButton } from "./styledComponents"

const MyEvents = () => (
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
      <Table.Row>
        <Table.Cell>UNCC Demo Night</Table.Cell>
        <Table.Cell>April 15, 2020</Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Small Town Farmers Market</Table.Cell>
        <Table.Cell>May 4th, 2020</Table.Cell>
        <Table.Cell>32</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Local Art Expo</Table.Cell>
        <Table.Cell>June 28th, 2020</Table.Cell>
        <Table.Cell>25</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  <StyledButton circular icon='add' />
    </div>       
)

export default MyEvents