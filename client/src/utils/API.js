import axios from "axios";
const vendorSeed = [{                
    "vendor_name": "Virtual Host",
    "image": "../images/virtualHost.png",
    "beacon_id": 1234,
    "web_url": "https://virtual-host.herokuapp.com/",
    "description": "Virtual Host Using notifications on your phone to guide you through the event, informing you along the way.",
    "manager_id": 1,
    "event_id": "1234demo",
    "category": "IT "  
  },
  {                
    "vendor_name": "Adventurous Llama",
    "image": "../images/llama.jpeg" ,
    "beacon_id": 12345,
    "web_url":" https://en.wikipedia.org/wiki/Llama",
    "description": "Llama adoption agency",
    "manager_id": 2,
    "event_id": "1234demo",
    "category":  "adoption"  
  },
  {                
    "vendor_name": "Travelers Paradise",
    "image": "../images/travelers.jpeg",
    "beacon_id": 123456,
    "web_url": "https://www.journeytoparadise.com/",
    "description": "Travel agency to Paradiseseeds.name",
    "manager_id": 3,
    "event_id": "1234demo",
    "category": "travel"
  },{                
    "vendor_name": "Virtual Host",
    "image": "../images/virtualHost.png",
    "beacon_id": "1234",
    "web_url": "https://virtual-host.herokuapp.com/",
    "description": "",
    "manager_id": "",
    "event_id": "notDEMO",
    "category": ""
  }];
export default {
    signupUser: function(userData) {
        return axios.post("/api/users/signup", userData);
    },
    searchVendor: function(term) {
        return axios.get("/api/vendors/search", term);
    },
    allVendors: function(eventID) {
        console.log('test')
        // return axios.get("/api/vendors/all", eventID);
        return vendorSeed
    }
    // searchEvents: funtion(eventID) {
    //     return axios.get("api/event/search", term);
    // }
}