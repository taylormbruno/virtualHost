// Remember to put a state within this component that identifies which note is the active note and allows user to edit or delete the note. Each note contains the booth name, event name, note body, and "last edited on". All notes will render in a table sort of like my events with an icon to edit and delete note on each row. Active note will also have a save icon. Will need to create a notes seed json file.

import Seeds from "./noteseeds.json"
import React from 'react'
import { Divider, Form, Table } from 'semantic-ui-react'
import { StyledHeader } from './styledComponents'
import notes from './noteseeds.json'
import './style.css'

export default function Notes() {
    return (
        <div>
            <StyledHeader as="h2">Active Booth Here</StyledHeader>
            <StyledHeader as="h4" className="noPadding">Active Event Here</StyledHeader>
            <Divider />
            <Form>
                <Form.TextArea value="Active note here" placeholder='Tell us more about you...' />
            </Form>
            <div id="notesContainer">
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Booth</Table.HeaderCell>
                        <Table.HeaderCell>Event</Table.HeaderCell>
                        <Table.HeaderCell>Note</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

    <Table.Body>
        {notes.map((notes) => (
            <Table.Row>
                <Table.Cell>{notes.boothName}</Table.Cell>
                <Table.Cell>{notes.eventTitle}</Table.Cell>
                <Table.Cell>
                    {notes.noteBody}
                </Table.Cell>
            </Table.Row>
            ))}
    </Table.Body>
  </Table>
        </div>
        </div>
    )
}