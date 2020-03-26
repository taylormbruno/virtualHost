import React from 'react'
import { Modal, Table } from 'semantic-ui-react'
import { StyledCell } from "./styledComponents"
import "./style.css"

export default function EventModal() {
return (
<Modal trigger={<StyledCell>
            No. of Booths 
            <i aria-hidden="true" class="expand icon" id="expandIcon"></i>
        </StyledCell>} basic>
      <Modal.Header>My Events</Modal.Header>
    <Modal.Content>
    <Table columns={4}>
    <Table.Header>
      <Table.Row>
        <StyledCell>Event Name</StyledCell>
        <StyledCell>Date</StyledCell>
        <StyledCell>Times</StyledCell>
        <StyledCell>No. of Booths</StyledCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>UNCC Demo Night</Table.Cell>
        <Table.Cell>April 15, 2020</Table.Cell>
        <Table.Cell>7 PM - 9 PM</Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Small Town Farmers Market</Table.Cell>
        <Table.Cell>May 4th, 2020</Table.Cell>
        <Table.Cell>8 AM - 12 PM</Table.Cell>
        <Table.Cell>32</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Local Art Expo</Table.Cell>
        <Table.Cell>June 28th, 2020</Table.Cell>
        <Table.Cell>6 PM - 9 PM</Table.Cell>
        <Table.Cell>25</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

    </Modal.Content>
  </Modal>
)

}