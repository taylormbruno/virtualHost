import React from "react";
// import './style.css';
// import VendorCard from '../Event/VendorCards/vendorCard';
import SearchFilter from './VendorSearch/vendorSearch';
import SideBar from './eventSideBar';


const EventPage = () => (    
    <>
        <SearchFilter/>        
        {/* <VendorCard/>   */}   
        <SideBar/>     
    </>
)

export default EventPage;