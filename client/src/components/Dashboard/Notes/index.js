// revisit page once initial notes are completed to add functionality to save and delete buttons
// data pulling from seeds...needs to be changed to database

import React, { Component } from "react";
import { Divider, Form, Table, Icon, TextArea } from "semantic-ui-react";
import { StyledHeader, StyledButton } from "./styledComponents";
// import notes from "./noteseeds.json";
import "./style.css";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateNote: {},
      currentNotes: [],
    };
  }

  componentDidMount() {
    console.log(this.props.notes);
    this.checkState();
  }

  checkState = () => {
    this.setState({
      ...this.state,
      currentNotes: this.props.notes,
    });
  };

  selectNote = (note) => {
    console.log(note);
    this.setState({ ...this.state, updateNote: note });
  };

  changeNote = (event, data) => {
    // console.log(data.value);
    this.setState({
      ...this.state,
      updateNote: { ...this.state.updateNote, note: data.value },
    });
  };

  saveNote = () => {
    console.log('saving note');
    // let newSet = this.props.notes.map((note) => {
    //   if (note.vendor_id === this.state.updateNote.note) {
    //     console.log("found your note");
    //     return this.state.updateNote;
    //   } else {
    //     console.log("this is not your note");
    //     return note;
    //   }
    // });
    // console.log(newSet);
    // this.props.update({vendor_id: this.state.updateNote});
  };

  deleteNote = (id) => {
    console.log(id)
    // let newSet = this.props.notes.map((note) => {
    //   if (note.vendor_id === id) {
    //     console.log("found your note");
    //     return this.state.updateNote;
    //   } else {
    //     console.log("this is not your note");
    //     return note;
    //   }
    // });
    // console.log(newSet);
    // this.props.update({notes: newSet});
  };

  render() {
    console.log("rendering events", this.props.notes);
    return (
      <div>
        <StyledHeader as="h2">{this.state.updateNote.vendor_name}</StyledHeader>
        <StyledHeader as="h4" className="noPadding">
          {this.state.updateNote.event_name}
        </StyledHeader>
        <Divider />
        <Form>
          <Form.TextArea
            defaultValue={this.state.updateNote.note}
            placeholder="Make a note here..."
            onChange={this.changeNote}
            rows={2}
            type="text"
          />
        </Form>
        <StyledButton onClick={() => this.saveNote()}>
          <Icon id="save" name="save" />
          Save Note
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
              {this.props.notes !== undefined
                ? this.props.notes.map((note) => (
                    <Table.Row
                      className="hover"
                      name={note.vendor_id}
                      onClick={() => this.selectNote(note)}
                    >
                      <Table.Cell className={note.vendor_id}>
                        {note.vendor_name}
                      </Table.Cell>
                      <Table.Cell className={note.vendor_id}>
                        {note.event_name}
                      </Table.Cell>
                      <Table.Cell className={note.vendor_id}>
                        {note.note}
                      </Table.Cell>
                      <Table.Cell onClick={this.deleteNote(note.vendor_id)}>
                        <Icon name="delete" />
                      </Table.Cell>
                    </Table.Row>
                  ))
                : ""}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}
