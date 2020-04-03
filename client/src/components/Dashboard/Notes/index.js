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
        this.findUser().then(response => {
          console.log(response);
          this.setState({
            ...this.state,
            masterList: response,
            eventData: response
          });
        });
      }

      findUser = async () => {
        const master = await API.findUserById();
        console.log(master.data);
        return master.data;
      };


//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
//   handleItemClick = e => {
//     let clickedID = e.target.className - 1;
//     this.setState({
//       eventTitle: notes[clickedID].eventTitle,
//       boothName: notes[clickedID].boothName,
//       noteBody: notes[clickedID].noteBody
//     });
//   };

  render() {
      console.log(this.props)
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
          <Icon name="save" onClick={()=>this.props.update(this.state.currentNotes)} />
          Save Note
        </StyledButton>
        <StyledButton>
          <Icon name="delete" onClick={()=>this.props.update(this.state.currentNotes)} />
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
              {this.props.user.notes.map(notes => (
                <Table.Row className="hover" name={notes.vendor_id}>
                  <Table.Cell
                    onClick={this.handleItemClick}
                    className={notes.vendor_id}
                  >
                    {notes.boothName}
                  </Table.Cell>
                  <Table.Cell
                    onClick={this.handleItemClick}
                    className={notes.vendor_id}
                  >
                    {notes.eventTitle}
                  </Table.Cell>
                  <Table.Cell
                    onClick={this.handleItemClick}
                    className={notes.vendor_id}
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
