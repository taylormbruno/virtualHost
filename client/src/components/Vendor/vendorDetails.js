import React from 'react';
import './style.css';
import { Container, Segment, Header, Image, Divider} from 'semantic-ui-react'
import llama from './llama.jpeg'

const VendorDetails = (props) => {
    const data = props.active

return (
    <div >
        <Container>
            {data.map(active=>(
            <Segment centered id='bodyContainer' stackable>
                <Header id='vendorHeader'>Vendor</Header>
                <Divider/>
                <Image src={active.image} wrapped ui={false} />
                {/* <Image src={llama} size='medium'rounded bordered id='image' /> */}
                <Header>{active.vendor_name}</Header>
                {/* <Header id='vendorName'>Adventurous Llama</Header> */}
                <br/>
                <div>{active.description}</div>
                <p>{active.description}</p>
                {/* <p>Llama adoption agency.  A way for you to find your new best fury friend!</p> */}
                <a href={active.web_url} target="_blank" rel="alternate noopener noreferrer">Website</a>
                {/* <a href='https://en.wikipedia.org/wiki/Llama' target="_blank" rel="alternatenoopener noreferrer ">Website</a> */}
                {/* <Header id='contributors'>Contributors</Header> */}


            </Segment>))}
        </Container>
    </div>
)
}
export default VendorDetails;


    

    // "vendor_name": "Adventurous Llama",
    //     "image": "../images/llama.jpeg" ,
    //     "beacon_id": 12345,
    //     "web_url":" https://en.wikipedia.org/wiki/Llama",
    //     "description": "Llama adoption agency",
    //     "manager_id": 2,
    //     "category":  "adoption"  
    