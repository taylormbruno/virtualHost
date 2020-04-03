// revisit page once initial notes are completed to add functionality to save and delete buttons
// data pulling from seeds...needs to be changed to database

import React, { Component } from "react";
import { Divider, Form, Table, Icon } from "semantic-ui-react";
import { StyledHeader, StyledButton } from "./styledComponents";
// import notes from "./noteseeds.json";
import "./style.css";
import API from "../../../utils/API";

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

  componentDidMount() {
    console.log(this.props.notes);
    
    this.checkState();
  }

checkState = () => {
  this.setState({
    ...this.state,
    currentNotes: this.props.notes
  });
}
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    // handleItemClick = e => {
    //   let clickedID = e.target.className - 1;
    //   this.setState({
    //     eventTitle: notes[clickedID].eventTitle,
    //     boothName: notes[clickedID].boothName,
    //     noteBody: notes[clickedID].noteBody
    //   });
    // };

  render() {
    console.log("rendering events", this.props.notes);
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
            placeholder="Make a note here..."
          />
        </Form>
        <StyledButton>
          <Icon
            name="save"
            onClick={() => this.props.update(this.state.currentNotes)}
          />
          Save Note
        </StyledButton>
        <StyledButton>
          <Icon
            name="delete"
            onClick={() => this.props.update(this.state.currentNotes)}
          />
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
              {(this.props.notes !== undefined
                ? this.props.notes.map(note => (
                    <Table.Row className="hover" name={note.vendor_id}>
                      <Table.Cell
                        onClick={this.handleItemClick}
                        className={note.vendor_id}
                      >
                        {note.vendor_name}
                      </Table.Cell>
                      <Table.Cell
                        onClick={this.handleItemClick}
                        className={note.vendor_id}
                      >
                        {note.event_name}
                      </Table.Cell>
                      <Table.Cell
                        onClick={this.handleItemClick}
                        className={note.vendor_id}
                      >
                        {note.note}
                      </Table.Cell>
                      <Table.Cell>
                        <Icon name="delete" />
                      </Table.Cell>
                    </Table.Row>
                  ))
                : "")}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}
