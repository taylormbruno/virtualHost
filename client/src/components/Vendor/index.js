import React,{useState, useEffect} from "react";
import VendorDetails from './vendorDetails';

const dumbyData = require('../Events/EventSearch/seeds')
const VendorPage = () =>{
 const [vendorData, setVendorData]=useState([])
 useEffect(()=>{
    
    setVendorData(dumbyData)
 },[])
return(
    <>
        <VendorDetails active={vendorData}/>
    </>
)
}
export default VendorPage;