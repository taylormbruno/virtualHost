import React, { useState, useEffect } from 'react';
import { Grid, Segment, Container, Card, Header } from 'semantic-ui-react';
import './style.css';
import VendorCard from '../VendorCard/vendorCard';
import SearchFilter from './VendorSearch/vendorSearch';
import API from '../../utils/API';
import EventCard from '../EventCards/eventCards'

const EventDetail = () => {
    const [vendorData, setVendorData] = useState([])
    const [masterList, setMasterList] = useState([])
    useEffect(() => {
        const fal = API.allVendors()
        console.log(fal)
        setVendorData(fal) // this list the one that the map uses
        setMasterList(fal) // this list never changes
    }, [])
    const theSearch = (term) => {
        const filtered = masterList.filter(word => {
            console.log(term, word.vendor_name)
            return word.vendor_name.toLowerCase().includes(term.toLowerCase())
        }) // this uses master list to be able to search all vendors
        setVendorData(filtered) // this gets replaced with filtered list 
    }
    return (
        <div>
            <Grid columns={2} divided stackable>
                <Grid.Row stretched>
                    <Grid.Column floated='left' width={5} >
                        <Segment id="column1">
                            <Header id='eventHeader'>Event</Header>
                            <div >
                                <Container style={{ "text-align": "center" }}>
                                    <EventCard />
                                </Container>
                            </div>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column floated='right' width={11}>
                        <Segment id="column2">
                            <Header id='vendorHeader'>Vendors</Header>
                            <SearchFilter theSearch={theSearch} />
                            <div>
                                {vendorData ? (
                                    <Card.Group centered grid container columns={3} stackable>
                                        {vendorData.map((vendor) => {
                                            console.log(vendor)
                                            return <VendorCard vendor={vendor}/>
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
export default EventDetail;