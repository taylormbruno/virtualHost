import React from 'react';
import './style.css';
import { Container, Segment, Header, Image, Divider} from 'semantic-ui-react'


const VendorDetails = (active) => (
    <div >
        <Container>            
            <Segment centered id='bodyContainer' stackable>
                <Header id='vendorHeader'>Vendor</Header>
                <Divider/>
                <Image src={active.image} size='small' wrapped ui={false} />
                {/* <Image src={llama} size='medium'rounded bordered id='image' /> */}
                <Header>{active.vendor_name}</Header>
                {/* <Header id='vendorName'>Adventurous Llama</Header> */}
                <br/>
                <div>{active.description}</div>
                <br/>
                <br/>
                <>Click card for more details.</>

                <p>{active.description}</p>
                {/* <p>Llama adoption agency.  A way for you to find your new best fury friend!</p> */}
                <a href={active.web_url} target="_blank" rel="alternate noopener noreferrer">Website</a>
                {/* <a href='https://en.wikipedia.org/wiki/Llama' target="_blank" rel="alternatenoopener noreferrer ">Website</a> */}
                {/* <Header id='contributors'>Contributors</Header> */}


            </Segment>
        </Container>
    </div>
)

export default VendorDetails;


    

    