import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';


function EventCard(props) {
  console.log('loaded')
  let active;
  if (props.event) {
    active = (props.event);
  }
  else {
    active = {
      "_id": "246",
      "event_name": "Virtual Host",
      "image": "../images/virtualHost.png",
      "locaction": "123 ABC St.",
      "start_time": "Date default",
      "end_time": "Date Default",
      "web_url": "https://virtual-host.herokuapp.com/",
      "description": "Virtual Host Using notifications on your phone to guide you through the event, informing you along the way.",
      "host_id": "1",
      "category": "IT "
    }
  }  
  return (

    <Card href={"/event/?q="+active._id}>
      <Grid.Column>                
        <Card.Content>
          <Image src={active.image} wrapped ui={true} />
          <Card.Header>{active.event_name}</Card.Header>
          <Card.Description>
            <br/>
            <p>{active.description}</p>
            <p>{active.vendors}</p>
            <p>{active.location}</p>
            <p>Starting at {active.start_time}</p> 
            <br/>
          </Card.Description>
        </Card.Content>
        <br/> 
        <br/>
          Click on Card for More Info 
        <br/> 
        <br/>
      </Grid.Column>
    </Card>

  )
}


export default EventCard;

