import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import '../style.css'; 
import {Link} from 'react-router-dom';


function EventCard (props){
  let active;
      if (props.event) {
        active = (props.event);    
      }
      else {
        active= {
          "_id": "246",               
          "vendor_name": "Virtual Host",
          "image": "../images/virtualHost.png",
          "beacon_id": 1234,
          "web_url": "https://virtual-host.herokuapp.com/",
          "description": "Virtual Host Using notifications on your phone to guide you through the event, informing you along the way.",
          "manager_id": 1,
          "category": "IT "  
      }
    }
      return(
      <Card.Group grid container columns={3} stackable>
        <Card>
          <Grid.Column>
            <Card.Link as ={Link} to="https://virtual-host.herokuapp.com/"/>
            <Image src={active.image} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{active.event_name}</Card.Header>                  
            <Card.Description>
                {active.description},{active.vendors}, {active.location}, {active.start_time}, {active.end_time}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            {active.host_id}, {active.web_url}
            </Card.Content>                
          </Grid.Column>
        </Card>
  </Card.Group>
  )  
}


export default EventCard;

