import React from 'react'
import { Grid, Segment, Container, Card, Image, Placeholder, Icon, Header} from 'semantic-ui-react'
import JoinUs from '../Event/VendorCards/Images/joinUs.jpeg'
import './style.css'
// import VendorCard from '../Event/VendorCards/vendorCard';
import SearchFilter from './VendorSearch/vendorSearch';

const EventDetails = () => (
    <div>
        <Grid columns={2} divided stackable>
            <Grid.Row stretched>
            <Grid.Column floated='left' width={5} >
                <Segment id="column1">
                    <Header id='eventHeader'>Event</Header>
                    
                    <div >                           
                        <Container textAlign='justified'>      
                        <Card textAlign='center' centered>
                            {/* <Image src={active.image} wrapped ui={false} /> */}
                            <Image src={JoinUs} size='medium'/>
                            <Card.Content>
                            {/* <Card.Header>{active.event_name}</Card.Header>*/}
                            <Card.Header textAlign='center'>Demo Day</Card.Header>
                            {/* <Card.Description>
                                {active.description}, {active.location}, {active.start_time}, {active.end_time}
                            </Card.Description> */}
                            <Card.Description>
                            Demo Day is the event of the season where you can view the hard work of students graduating from the muliple IT courses of UNC-Charlotte.  An event where you can see the newly learned technologies and skills on display.
                            <br/><br/>
                            Location:
                            The Barrel Room at Triple C Brewing, Charlotte NC 
                            <br/><br/>                        
                            Time: Wednesday, April 15 at 6:00PM
                            </Card.Description>
                            </Card.Content>
                            {/* <Card.Content extra>
                            {active.host_id}, {active.web_url}
                            </Card.Content>                 */}
                            <Card.Content extra textAlign='center'>
                            Your Host - Ashley Neff 
                            <br/>
                            {/* <a href={web_url} target="_blank" rel="alternate">CLICK Demo Day Website</a> */}
                            <a href='https://www.meetup.com/charlottedevs/events/247770821/' target="_blank" rel="alternate">CLICK Demo Day Website</a>
                            </Card.Content> 
                        </Card>
                        </Container>
                    </div>
                </Segment>            
            </Grid.Column> 
            <Grid.Column floated='right' width={11}>
                <Segment id="column2">
                <Header id='vendorHeader'>Vendors</Header>
                <SearchFilter/>                
                    <div> 
                        <Card.Group centered>  
                         {/* <VendorCard/>   */}                 
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
                                <a>
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
                                <a>
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
                                <a>
                                    <Icon name='user' />
                                    10 Friends
                                </a>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </div>
                </Segment>
            </Grid.Column>     
            </Grid.Row>
        </Grid>
</div>
)

export default EventDetails;