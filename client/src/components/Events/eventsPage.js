import React, { useState, useEffect } from 'react';
import { Grid, Segment, Card, Header } from 'semantic-ui-react';
import './style.css';
import EventCard from '../EventCards/eventCards';
import SearchFilter from '../Event/VendorSearch/vendorSearch';
import API from '../../utils/API';


const EventPage = () => {
    const [eventData, setEventData] = useState([])
    const [masterList, setMasterList] = useState([])
    useEffect(() => {
        const fal = API.allEvents()
        console.log(fal)
        setEventData(fal) // this list the one that the map uses
        setMasterList(fal) // this list never changes
    }, [])
    const theSearch = (term) => {
        const filtered = masterList.filter(word => {
            console.log(term, word.event_name)
            return word.event_name.toLowerCase().includes(term.toLowerCase())
        }) // this uses master list to be able to search all vendors
        setEventData(filtered) // this gets replaced with filtered list 
    }
    return (
        <div>
            <Grid stackable>
                <Grid.Row stretched>
                    <Grid.Column floated='right' width={11}>
                        <Segment id="column2">
                            <Header id='vendorHeader'>Events</Header>
                            <SearchFilter theSearch={theSearch} />
                            <div>
                                {eventData ? (
                                    <Card.Group centered grid container columns={3} stackable>
                                        {eventData.map((event) => {
                                            console.log(event)
                                            return <EventCard event={event} />
                                        })}
                                    </Card.Group>) : null}
                            </div>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default EventPage;