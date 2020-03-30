import axios from "axios";

const eventSeed = [
  {
    event_name: "Presentations",
    image: "image",
    location: "Charlotte, NC",
    start_time: new Date("2020/04/04 10:00:00"),
    end_time: new Date("2020/04/04 14:00:00"),
    description: "UNC-Charlotte Full Stack Project Presentations",
    host_id: "",
    vendors: []
  }
];

// const vendorSeed = [{
//     "vendor_name": "Virtual Host",
//     "image": "../images/virtualHost.png",
//     "beacon_id": 1234,
//     "web_url": "https://virtual-host.herokuapp.com/",
//     "description": "Virtual Host Using notifications on your phone to guide you through the event, informing you along the way.",
//     "manager_id": 1,
//     "event_id": "1234demo",
//     "category": "IT "
//   },
//   {
//     "vendor_name": "Adventurous Llama",
//     "image": "../images/llama.jpeg" ,
//     "beacon_id": 12345,
//     "web_url":" https://en.wikipedia.org/wiki/Llama",
//     "description": "Llama adoption agency",
//     "manager_id": 2,
//     "event_id": "1234demo",
//     "category":  "adoption"
//   },
//   {
//     "vendor_name": "Travelers Paradise",
//     "image": "../images/travelers.jpeg",
//     "beacon_id": 123456,
//     "web_url": "https://www.journeytoparadise.com/",
//     "description": "Travel agency to Paradiseseeds.name",
//     "manager_id": 3,
//     "event_id": "1234demo",
//     "category": "travel"
//   },{
//     "vendor_name": "Virtual Host",
//     "image": "../images/virtualHost.png",
//     "beacon_id": "1234",
//     "web_url": "https://virtual-host.herokuapp.com/",
//     "description": "",
//     "manager_id": "",
//     "event_id": "notDEMO",
//     "category": ""
//   }];
export default {
  signupUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  loginUser: function(user) {
    return axios.get("/api/users/login", user);
  },
  getExternalUser: function() {
    return axios.get("/api/dash/getexternal");
  },
  getDashboard: function(id) {
    return axios.get("/api/dash/loaddashboard", id);
  },
  searchVendor: function(term) {
    return axios.get("/api/vendors/search", term);
  },
  allVendors: function() {
    console.log("test");

    return axios.get("/api/vendors/all")
  },
  allEvents: function() {
    return axios.get("/api/events/all");
    // return eventSeed
  },
  googleAuth: function() {
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods":
          "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers": "X-Requested-With,content-type",
        "Access-Control-Allow-Credentials": true
      },
      withCredentials: true,
      data: undefined
    };
    console.log(params);
    return axios.get("/auth/google", params);
  }
};
