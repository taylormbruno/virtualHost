import React from 'react';
import './style.css';
import { Container, Segment, Header, Image, Divider} from 'semantic-ui-react'


const VendorDetails = (active) => (
    <div >
        <Container>            
            <Segment centered id='bodyContainer' stackable>
                <Header id='vendorHeader'>Vendor</Header>
                <Divider/>
                <Image src={active.image} wrapped ui={true} />                
                <Header>{active.vendor_name}</Header>                
                <br/>
                <div>{active.description}</div>
                <br/>
                <br/>
                <>Click card for more details.</>
                <p>{active.description}</p>                
                <a href={active.web_url} target="_blank" rel="alternate noopener noreferrer">Website</a>                
            </Segment> 
        </Container>
    </div>
)

export default VendorDetails;


    

    