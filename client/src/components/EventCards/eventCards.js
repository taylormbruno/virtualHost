import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react'; 
import {Link} from 'react-router-dom';


function EventCard (props){
  let active;
      if (props.event) {
        active = (props.event);    
      }
      else {
        active= {
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
            {active.host_id}, {active.web_url}, {active.event_id}
            </Card.Content>                
          </Grid.Column>
        </Card>
  </Card.Group>
  )  
}


export default EventCard;

// const eventSchema = new Schema({
//   _id: {type: String, required: true},  
//   event_name: { type: String, required: true },
//   image: { type: String, required: true },
//   location: { type: String, required: true },
//   start_time: { type: Date, required: true },
//   end_time: { type: Date, required: true },
//   description: { type: String, required: true },
//   host_id: { type: String, required: true },
//   vendors: { type: Array, default: [] },
//   web_url: { type: String, required: false }
// });