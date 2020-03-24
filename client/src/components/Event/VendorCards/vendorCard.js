import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react'; 
import {Link} from 'react-router-dom';



function VendorCard(props) {
  let active ;
      if (props.vendor) {
        active = (props.vendor);    
      }
      else {
        active= {
          "_id": "2468",               
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
            <Card.Header>{active.vendor_name}</Card.Header>                  
            <Card.Description>
                {active.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            {active.manager_id}, {active.beacon_id}, {active.category},{active.web_url}
            </Card.Content>                
          </Grid.Column>
        </Card>
  </Card.Group>
  )  
}


export default VendorCard;