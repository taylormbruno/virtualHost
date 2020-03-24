import React from 'react'
import { Image, Segment, Grid } from 'semantic-ui-react'
import Dashboard from "./dashboard.png"
import "./style.css"
import Events from './Events/index.js'
import Booths from './Booths/index.js'
import Notes from './Notes/index.js'
import {StyledHeader} from './styledComponents'

const MyDashboard = () => (
    <div id="container">
        <Image id="logo" src={Dashboard} />
            <Grid stackable columns={2} textAlign='center' verticalAlign='top'>
                <Grid.Column width={7}>
                    <Segment>
                    <StyledHeader as='h1'>My Events</StyledHeader>
                    <Events />
                    </Segment>
                    <Segment>
                    <StyledHeader as='h1'>My Booths</StyledHeader>
                    <Booths />
                    </Segment>
                </Grid.Column>
                <Grid.Column width={9}>
                    <Segment>
                    <StyledHeader as='h1'>My Notes</StyledHeader>
                    <Notes />
                    </Segment>
                </Grid.Column>
        </Grid>
    </div>       
)

export default MyDashboard