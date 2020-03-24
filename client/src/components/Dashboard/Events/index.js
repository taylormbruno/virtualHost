import React from 'react'
import { Table, Button } from 'semantic-ui-react'
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
        <StyledCell>
            No. of Booths 
            <i aria-hidden="true" class="expand icon" id="expandIcon"></i>
        </StyledCell>
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