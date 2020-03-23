import React from 'react'
import { Image, Segment, Grid } from 'semantic-ui-react'
import Dashboard from "./dashboard.png"
import "./style.css"
import Events from './Events/index.js'
import Favorites from './Favorites/index.js'
import {StyledHeader} from './styledComponents'

const MyDashboard = () => (
    <div id="container">
        <Image id="logo" src={Dashboard} />
            <Grid columns={2} divided textAlign='center' verticalAlign='middle'>
                <Grid.Column width={7}>
                    <Segment>
                    <StyledHeader as='h1'>My Events</StyledHeader>
                    <Events />
                    </Segment>
                    <Segment>
                    <StyledHeader as='h1'>My Booths</StyledHeader>
                    <Favorites />
                    </Segment>
                </Grid.Column>
                <Grid.Column width={9}>
                    There
                </Grid.Column>
        </Grid>
    </div>       
)

export default MyDashboard