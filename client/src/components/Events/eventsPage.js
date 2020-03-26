import React from 'react'
// removed Image from import below bc unused lint error.
import { Segment, Card, Placeholder, Icon, Header} from 'semantic-ui-react'
import './style.css'
// import EventCard from  './eventCards'
import EventSearchFilter from './EventSearch/eventSearch';

const EventPage = () => (
    <div>   
        <Segment id="column">
                    <Header id='eventHeader'>Events</Header>
                        <EventSearchFilter/>                
                        <div> 
                            <Card.Group centered>  
                            {/* <EventCard/> */}                
                                <Card>
                                    <Placeholder.Header image/>
                                    <Card.Content>
                                    <Card.Header>Daniel</Card.Header>
                                    <Card.Meta>Joined in 2016</Card.Meta>
                                    <Card.Description>
                                        Daniel is a comedian living in Nashville.
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <a href="/"> {/* does this need to be an anchor or can we change to span to avoid linting errors*/}
                                        <Icon name='user' />
                                        10 Friends
                                    </a>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Placeholder.Header image/>
                                    <Card.Content>
                                    <Card.Header>Daniel</Card.Header>
                                    <Card.Meta>Joined in 2016</Card.Meta>
                                    <Card.Description>
                                        Daniel is a comedian living in Nashville.
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <a href="/"> {/* does this need to be an anchor or can we change to span to avoid linting errors*/}
                                        <Icon name='user' />
                                        10 Friends
                                    </a>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Placeholder.Header image/>
                                    <Card.Content>
                                    <Card.Header>Daniel</Card.Header>
                                    <Card.Meta>Joined in 2016</Card.Meta>
                                    <Card.Description>
                                        Daniel is a comedian living in Nashville.
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <a href="/"> {/* does this need to be an anchor or can we change to span to avoid linting errors*/}
                                        <Icon name='user' />
                                        10 Friends
                                    </a>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                        </div>
                    </Segment>    
    </div>
)

export default EventPage;