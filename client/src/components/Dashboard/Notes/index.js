// revisit page once initial notes are completed to add functionality to save and delete buttons
// data pulling from seeds...needs to be changed to database

import React, { Component } from "react";
import { Divider, Form, Table, Icon } from "semantic-ui-react";
import { StyledHeader, StyledButton } from "./styledComponents";
import notes from "./noteseeds.json";
import "./style.css";

export default class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {
        eventTitle: "",
        boothName: "",
        noteBody: "",
        currentNotes: []
        };
      }



  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleItemClick = e => {
    let clickedID = e.target.className - 1;
    this.setState({
      eventTitle: notes[clickedID].eventTitle,
      boothName: notes[clickedID].boothName,
      noteBody: notes[clickedID].noteBody
    });
  };

  render() {
    return (
      <div>
        <StyledHeader as="h2">{this.state.boothName}</StyledHeader>
        <StyledHeader as="h4" className="noPadding">
          {this.state.eventTitle}
        </StyledHeader>
        <Divider />
        <Form>
          <Form.TextArea
            value={this.state.noteBody}
            placeholder="Tell us more about you..."
          />
        </Form>
        <StyledButton>
          <Icon name="save" />
          Save Note
        </StyledButton>
        <StyledButton>
          <Icon name="delete" />
          Delete Note
        </StyledButton>
        <div id="notesContainer">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Booth</Table.HeaderCell>
                <Table.HeaderCell>Event</Table.HeaderCell>
                <Table.HeaderCell>Note</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {notes.map(notes => (
                <Table.Row className="hover" name={notes.id}>
                  <Table.Cell
                    onClick={this.handleItemClick}
                    className={notes.id}
                  >
                    {notes.boothName}
                  </Table.Cell>
                  <Table.Cell
                    onClick={this.handleItemClick}
                    className={notes.id}
                  >
                    {notes.eventTitle}
                  </Table.Cell>
                  <Table.Cell
                    onClick={this.handleItemClick}
                    className={notes.id}
                  >
                    {notes.noteBody}
                  </Table.Cell>
                  <Table.Cell>
                    <Icon name="delete" />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}
