import React from "react";
// import './style.css';
// import VendorCard from '../Event/VendorCards/vendorCard';
import SearchFilter from './VendorSearch/vendorSearch';
import SideBarComponent from './eventSideBar';


const EventPage = () => (    
    <>
        <SearchFilter/>        
        {/* <VendorCard/>   */}   
        <SideBarComponent/>     
    </>
)

export default EventPage;