import React,{useState, useEffect} from "react";
import EventDetails from './eventDetail';

const dumbyData = require('../Events/EventSearch/seeds')
const EventPage = () =>{
 const [vendorData, setVendorData]=useState([])
 useEffect(()=>{
    
    setVendorData(dumbyData)
 },[])
return(
    <>
        <EventDetails active={vendorData}/>
    </>
)
}
export default EventPage;