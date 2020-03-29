import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


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

    <Card>
      <Grid.Column>
        {/* <Card.Link as ={activeLink} to="https://virtual-host.herokuapp.com/"/> */}
        {/* <Image src={active.image} wrapped ui={false} /> */}
        <img class="ui avatar image" src={active.image}></img>
        <Card.Content>
          <Card.Header>{active.event_name}</Card.Header>
          <Card.Description>
            {active.description},{active.vendors}, {active.location}, {active.start_time}, {active.end_time}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {active.host_id}, {active.web_url}, {active.event_id}
        </Card.Content>
      </Grid.Column>
    </Card>

  )
}


export default EventCard;

