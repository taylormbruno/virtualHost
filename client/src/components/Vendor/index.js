import React from "react";
import VendorDetails from './vendorDetails';

const VendorPage = (props) =>( 
    <>
        <VendorDetails
        userState={props.userState}
        />
    </>
)
export default VendorPage;