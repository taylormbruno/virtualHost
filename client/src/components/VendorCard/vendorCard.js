import React from 'react';
import { Card, Grid, Divider, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function VendorCard(props) {
  console.log(props)
  let active;
  if (props.vendor) {
    active = (props.vendor);
  }
  else {
    active = {
      "_id": "2468",
      "vendor_name": "Virtual Host",
      "image": "../images/virtualHost.png",
      "beacon_id": "1234",
      "web_url": "https://virtual-host.herokuapp.com/",
      "description": "Virtual Host Using notifications on your phone to guide you through the event, informing you along the way.",
      "manager_id": "1",
      "category": "IT ",
      "event_id": "2222"
    }
  }
  return (

    <Card>
      <Grid.Column>
        {/* <Card.Link as ={active.web_url} to="https://virtual-host.herokuapp.com/"/> */}
        {/* <Card.Link to={"/vendor/" + active._id}/> */}
        <img class="ui avatar image" src={active.image}></img>
        <Card.Content>
          <Card.Header>{active.vendor_name}</Card.Header>
          <Card.Description>
            {active.description}
          </Card.Description>
        </Card.Content>
        <Divider/>
        <Card.Content extra>
          Click Card for More Info
        </Card.Content>
      </Grid.Column>
    </Card>
  )
}


export default VendorCard;


