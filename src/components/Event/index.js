import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'
import './style.css'
import { StyledButton } from '../Event/styledComponenets'
import JoinUs from './joinUs.jpeg'
import FindEvent from './findEvent.jpg'
import ResponsiveMixed from './ResponsiveMixed'


const Event = () => (

    <Card.Group id='cardGroup'>
        <div id='cardwrapper'>
            {/* <div class="ui two column grid" id='columns'> */}
                <div class='row' id='cardRow'>
                    <Grid ResponsiveMixed>
                        <Grid.Column mobile={16} tablet={8} computer={7} id='card1'>
                            <Card className='cardContent'>
                                <Card.Content >
                                    <Image id='event1'
                                        floated='right'
                                        size='large'
                                        src={FindEvent} alt='calendar'
                                    />
                                    <Card.Header>Find Events</Card.Header>
                                    <Card.Description>
                                        This is where you can find upcoming events.
                                        
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra className='cardContent'>
                                    <StyledButton fluid size='large' className="shortBtn">
                                        Find Events
                                    </StyledButton>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={7} id='card2'>
                            <Card>
                                <Card.Content className='cardContent'>
                                    <Image id='event2'
                                        floated='right'
                                        size='large'
                                        src={JoinUs}alt='meeting'
                                    />
                                    <Card.Header>Join Events</Card.Header>
                                    <Card.Description>
                                        This is where you can signup to be in an event as a vendor.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra className='cardContent'>
                                    <StyledButton fluid size='large' className="shortBtn">
                                        Join Events
                                        </StyledButton>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid>
                </div>
            {/* </div> */}
        </div>
    </Card.Group>
)

export default Event;
