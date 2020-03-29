import React from 'react'
// removed Image from import below bc unused lint error.
import { Segment, Card, Header} from 'semantic-ui-react'
import './style.css'
import EventCard from  '../EventCards/eventCards'
import EventSearchFilter from './EventSearch/eventSearch';

const EventPage = () => (
    <div>   
        <Segment id="column">
                    <Header id='eventHeader'>Events</Header>
                        <EventSearchFilter/>                
                        <div> 
                        <Card.Group grid container columns={3} stackable centered>                            
                            <EventCard/>
                            </Card.Group>
                        </div>
                    </Segment>    
    </div>
)

export default EventPage;